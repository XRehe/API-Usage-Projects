# AI Image Generator Web App

Bu proje, Hugging Face API'sini kullanarak kullanıcıların metin tabanlı açıklamalarla (prompt) resimler oluşturmasını sağlar. Kullanıcı, girdiği metne göre dinamik olarak resimler üretilebilir.

## Proje Özeti

Bu web uygulaması, Express.js ile geliştirilmiş bir backend kullanarak Hugging Face API'si üzerinden resim oluşturur. Kullanıcılar, basit bir arayüz üzerinden istedikleri metni girerek resim oluşturabilirler. Uygulama, kullanıcının girdiği prompt'a göre AI tabanlı resim üretimi sağlar ve bu resmi kullanıcıya görsel olarak sunar.

## Özellikler
- Kullanıcılar metin girerek görsel oluşturabilir.
- Hugging Face API’si ile en son teknoloji AI modelleri kullanılarak resimler üretilir.
- Resim, kullanıcıya görsel olarak sunulur ve indirilebilir.
- Backend kısmı Node.js ve Express.js kullanılarak yapılmıştır.
- Resimler, her seferinde farklı dosyalar olarak kaydedilir.

## Kullanıcı Arayüzü
Web uygulamasının kullanıcı arayüzü basittir ve şu adımları içerir:
1. Kullanıcı, giriş kutusuna bir metin (prompt) yazar.
2. "Generate Image" butonuna tıklar.
3. API yanıtını bekler ve görsel sonucu görür.

## Teknolojiler
- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express.js
- **API**: Hugging Face API (FLUX.1-schnell modeli)
- **HTTP İstekleri**: Axios
- **Templating**: EJS

## Gereksinimler
Projenin çalışabilmesi için aşağıdaki yazılımlar gereklidir:
- Node.js (v14 veya daha yeni)
- NPM (Node Package Manager)

## Kurulum

1. Projeyi kendi bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/XRehe/API-Usage-Test.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd /ai resim oluşturma
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. Server.js dosyasına Hugging Face API key’inizi ekleyin:
   ```
   HF_API_KEY="your token"
   ```
5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

Uygulama artık `http://localhost:3000` adresinde çalışıyor olmalıdır.

## API Kullanımı
Uygulama, Hugging Face’in **FLUX.1-schnell** modelini kullanarak metin tabanlı resim oluşturur. Her bir istekle birlikte, kullanıcı tarafından gönderilen metin (prompt) modelin çıktısı olarak bir resme dönüştürülür.

## Hata Yönetimi
Eğer bir hata oluşursa, uygulama hata mesajlarını kullanıcıya gösterir. API istekleri sırasında bir sorun oluşursa, **500** hata kodu ile kullanıcıya bilgi verilir.

## Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, şu adımları izleyebilirsiniz:
1. Projeyi kendi hesabınıza **fork** edin.
2. Geliştirmelerinizi yapın ve commit edin.
3. Değişikliklerinizi ana projeye **pull request** olarak gönderin.
