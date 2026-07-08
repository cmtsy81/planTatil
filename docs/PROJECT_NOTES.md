# Project Notes

## Proje Kararlari

PlanTatil ilk asamada mobil oncelikli ve hizli denenebilir bir rota panosu olarak tasarlandi. Ana hedef, Roma / Gun 1 akisini sade kartlarla gostermek ve rollerin temel davranisini prototip seviyesinde test etmek.

## Neden Vanilla JS Secildi

Bu surumde framework, npm ve build sistemi kullanilmadi. Vanilla HTML, CSS ve JavaScript secimi GitHub Pages uyumlulugunu kolaylastirir, dosyalari okunabilir tutar ve prototipi dogrudan `index.html` ile calistirir.

## Neden Ilk Surumde Backend Yok

Backend olmadan fikir daha hizli denenebilir. Admin duzenlemeleri, lezzet onerileri ve katilimci isaretleri localStorage ile ayni cihazda saklanir. Bu, prototip icin yeterli ve dusuk maliyetli bir cozumdur.

## Ileriye Donuk Not

Ileride Supabase veya Firebase eklenerek gercek kullanici girisi, rol yetkileri ve cihazlar arasi senkronizasyon saglanabilir.

## Ilk Hedef

Ilk hedef Roma / Gun 1 demosudur. Diger sehir ve gunler bos durum ekraniyla hazir tutuldu.

## Lezzet Onerisi Duzenleme Karari

Lezzet Editoru rolune mevcut onerileri duzenleme ve silme yetkisi eklendi. Ayni dialog hem yeni oneri ekleme hem de var olan oneriyi guncelleme icin kullanilir. Silme islemi sadece ilgili lezzet onerisi listesini etkiler; ana rota karti korunur.

## data.js Aktarma Karari

GitHub Pages statik calistigi icin tarayici dogrudan repodaki `data.js` dosyasina yazamaz. Bu nedenle uygulamaya localStorage'daki guncel rota ve lezzet onerilerini `data.js` formatinda indiren bir cikti butonu eklendi. Katilimci tamamlandi/denedim isaretleri kisisel veri olarak disarida tutulur.

## Kompakt Kart Karari

Mobil ekranda rota akisini daha hizli taramak icin kartlar varsayilan olarak kompakt hale getirildi. Sadece siradaki durak ilk acilista otomatik genisler; diger kartlar kullanici istegiyle acilir. Navigasyon ve tamamlandi isaretleme kapali kartta kalir, detay ve rol bazli duzenleme aksiyonlari acik kartta gosterilir.
