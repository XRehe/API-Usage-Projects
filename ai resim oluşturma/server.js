const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const HF_API_KEY = "your token";

async function retryRequest(prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "image/png",
          },
          responseType: "arraybuffer",
          timeout: 60000,
        }
      );
      return response;
    } catch (error) {
      console.error(
        `Attempt ${i + 1} failed:`,
        error.response?.data || error.message
      );
      await new Promise((res) => setTimeout(res, 2000));
    }
  }
  throw new Error("Failed after multiple attempts");
}

app.post("/generate-image", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt cannot be empty" });
    }

    console.log("Received Prompt:", prompt);

    const response = await retryRequest(prompt, 3);

    const timestamp = Date.now();
    const imagePath = `public/generated_${timestamp}.png`;

    fs.writeFileSync(imagePath, response.data);

    console.log("Image successfully saved:", imagePath);

    res.json({ imageUrl: `/generated_${timestamp}.png` });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on port 3000"));
