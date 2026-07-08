# PlanTatil

PlanTatil, mobil oncelikli bir gezi rota panosu prototipidir. Ilk surum Italya tatili icin Roma / Gun 1 demosunu gosterir.

## Nasil Calistirilir

Bu proje backend, framework, npm veya build sistemi kullanmaz.

1. Depoyu ac.
2. `index.html` dosyasini tarayicida ac.
3. GitHub Pages uzerinde yayinlandiginda da ayni dosya dogrudan calisir.

## GitHub Pages ile Yayinlama

1. GitHub reposunda `Settings > Pages` alanina gir.
2. Source olarak `Deploy from a branch` sec.
3. Branch olarak `main`, klasor olarak `/root` sec.
4. Kaydet. GitHub Pages `index.html` dosyasini yayinlar.

## Dosya Yapisi

- `index.html`: Uygulama iskeleti ve dialog formlari.
- `styles.css`: Mobil oncelikli sicak tatil temasi.
- `data.js`: Roma / Gun 1 demo verisi.
- `app.js`: Rol davranislari, localStorage ve render mantigi.
- `docs/PROJECT_NOTES.md`: Proje karar notlari.
- `docs/USER_FEEDBACK.md`: Kullanici geri bildirimleri.
- `docs/ROADMAP.md`: Gelistirme yol haritasi.

## Roller

- `Admin`: Rota karti ekler, duzenler ve siler.
- `Lezzet Editoru`: Mevcut rota kartlarina yemek, kahve, dondurma, tatli ve alisveris onerileri ekler.
- `Katilimci`: Kartlari gorur, navigasyonu acar, duraklari tamamlandi ve onerileri denedim olarak isaretler.

## LocalStorage Mantigi

- Demo rota verisi `data.js` icinden gelir.
- `plantatil.routes.v1`: Admin rota degisiklikleri ve lezzet onerileri.
- `plantatil.completedStops.v1`: Katilimci durak tamamlandi isaretleri.
- `plantatil.triedFood.v1`: Katilimci lezzet onerisi denedim isaretleri.
- `Verileri Sifirla` butonu bu kayitlari temizler ve demo veriye doner.

## Sonraki Gelistirme Onerileri

- Roma icin 4.5 gunluk ayrintili plan.
- Floransa, Venedik ve Milano rota verileri.
- Gercek kullanici girisi ve yetkiler.
- Supabase veya Firebase ile cihazlar arasi senkronizasyon.
- PWA destegi ve rota yaklasinca bildirimler.
