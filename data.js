const DEMO_TRIP_DATA = {
  "cities": [
    {
      "id": "rome",
      "name": "Roma",
      "days": [
        {
          "id": "day-1",
          "label": "Cumartesi"
        },
        {
          "id": "day-2",
          "label": "Pazar"
        },
        {
          "id": "day-3",
          "label": "Pazartesi"
        },
        {
          "id": "day-4",
          "label": "Salı"
        },
        {
          "id": "day-5",
          "label": "Çarşamba Sabah"
        }
      ]
    },
    {
      "id": "florence",
      "name": "Floransa",
      "days": [
        {
          "id": "day-1",
          "label": "Gün 1"
        }
      ]
    },
    {
      "id": "venice",
      "name": "Venedik",
      "days": [
        {
          "id": "day-1",
          "label": "Gün 1"
        }
      ]
    },
    {
      "id": "milan",
      "name": "Milano",
      "days": [
        {
          "id": "day-1",
          "label": "Gün 1"
        }
      ]
    }
  ],
  "routes": {
    "rome:day-1": [
      {
        "id": "rome-1-route-map",
        "time": "08:30",
        "title": "Günün Haritalı Rotası",
        "type": "rota özeti",
        "description": "Cumartesi için temiz ana rota: evden çıkış, Antik Roma ve Monti/Via Veneto hattında gün sonu. Harita eve geri dönüş eklemez.",
        "duration": "Tüm gün",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Via+Belisario+8+00187+Roma+RM+Italy&destination=Via+Veneto+Rome&waypoints=Colosseum+Rome|Roman+Forum+Rome|Palatine+Hill+Rome|Monti+Rome|Piazza+del+Campidoglio+Rome|Piazza+Venezia+Rome|Piazza+Barberini+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Başlangıç evden. Gün sonunda eve dönüş haritaya eklenmedi; o anki yorgunluğa göre yürüyüş, otobüs veya taksi seçilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-hotel",
        "time": "08:30",
        "title": "Evden çıkış ve bilet kontrolü",
        "type": "serbest zaman",
        "description": "Su, şapka, powerbank ve Colosseum saatli giriş biletlerini kontrol edin. Bugün açık alan çok olduğu için rahat ayakkabı önemli.",
        "duration": "20 dk",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Via+Belisario%2C+8%2C+00187+Roma+RM%2C+Italy",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Sabah Colosseum tarafına metro/taksi ile geçmek yürüyüş yükünü azaltır.",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-colosseum",
        "time": "09:15",
        "title": "Colosseum",
        "type": "müze",
        "description": "Roma'nın en ikonik durağı. Saatli girişe 15-20 dakika erken varmak iyi olur.",
        "duration": "90 dk",
        "address": "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Colosseum+Rome",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Önceden saatli bilet alınmalı. Forum ve Palatine ile kombine bilet en pratik seçenek.",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-forum",
        "time": "11:00",
        "title": "Roman Forum",
        "type": "müze",
        "description": "Antik Roma'nın kamusal yaşam merkezi. Gölge az olduğu için tempoyu düşük tutun.",
        "duration": "90 dk",
        "address": "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Roman+Forum+Rome",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "ticketNote": "Colosseum/Forum/Palatine kombine biletiyle gezilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-palatine",
        "time": "12:30",
        "title": "Palatine Hill",
        "type": "müze",
        "description": "Forum sonrası kısa ama etkileyici tepe yürüyüşü. Roma'nın kuruluş efsanesiyle bağlantılı bölge.",
        "duration": "60 dk",
        "address": "Palatine Hill, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Palatine+Hill+Rome",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "ticketNote": "Aynı kombine bilet kapsamındadır. Çok yorulursanız bu durağı kısaltın.",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-lunch",
        "time": "13:45",
        "title": "Monti öğle molası",
        "type": "yemek molası",
        "description": "Antik Roma sonrası Monti tarafında oturarak toparlanma molası. Ağır yemek yerine makarna, pizza al taglio veya sandviç iyi gider.",
        "duration": "90 dk",
        "address": "Monti, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Monti+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-monti-trattoria",
            "type": "yemek",
            "title": "Trattoria Monti / Monti makarna alternatifi",
            "note": "Rezervasyon bulursanız iyi bir oturarak öğle/akşam seçeneği; yoksa Monti'de pizza al taglio daha pratik.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Trattoria+Monti+Rome"
          },
          {
            "id": "food-monti-suppli",
            "type": "atıştırmalık",
            "title": "Supplì veya pizza al taglio",
            "note": "Çocuklarla hızlı ve risksiz mola. Uzun restoran beklemek yerine elde yenebilir.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=suppli+pizza+al+taglio+Monti+Rome"
          }
        ]
      },
      {
        "id": "rome-1-campidoglio",
        "time": "15:30",
        "title": "Piazza del Campidoglio",
        "type": "gezi",
        "description": "Michelangelo tasarımı meydan ve Forum'a yukarıdan bakış için kısa ama değerli durak.",
        "duration": "35 dk",
        "address": "Piazza del Campidoglio, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+del+Campidoglio+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-venezia",
        "time": "16:15",
        "title": "Piazza Venezia",
        "type": "gezi",
        "description": "Vittoriano anıtı ve geniş meydan fotoğrafı. İçeri girmek şart değil; dışarıdan görmek yeterli.",
        "duration": "30 dk",
        "address": "Piazza Venezia, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+Venezia+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-barberini",
        "time": "17:30",
        "title": "Piazza Barberini / Via Veneto dönüşü",
        "type": "gezi",
        "description": "Eve yaklaşırken hafif yürüyüş ve kahve/dondurma molası. Bugün akşamı çok geçe bırakmayın.",
        "duration": "60 dk",
        "address": "Piazza Barberini, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+Barberini+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "transportNote": "Piazza Venezia'dan yorulursanız otobüs veya taksiyle Barberini/Via Veneto tarafına geçin.",
        "foodSuggestions": [
          {
            "id": "food-barberini-gelato",
            "type": "dondurma",
            "title": "Gelato molası",
            "note": "Ana meydanların tam dibindeki aşırı turistik yerler yerine ara sokakta küçük bir dondurmacı bakın.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=gelato+near+Piazza+Barberini+Rome"
          }
        ]
      },
      {
        "id": "rome-1-dinner",
        "time": "19:30",
        "title": "Eve yakın akşam yemeği",
        "type": "yemek molası",
        "description": "İlk tam gün yorucu olacağı için akşamı ev çevresi, Via Veneto veya Monti'de bitirmek rahat olur.",
        "duration": "90 dk",
        "address": "Via Veneto, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Via+Veneto+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Cumartesi akşamı kalabalık olacağı için oturarak yemek isteniyorsa rezervasyon iyi olur.",
        "foodSuggestions": [
          {
            "id": "food-via-veneto-dinner",
            "type": "yemek",
            "title": "Via Veneto çevresi rahat akşam",
            "note": "Çok uzaklaşmadan makarna/pizza odaklı bir yer seçin; çocuklarla dönüş kolay olur.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Via+Veneto+Rome+trattoria"
          }
        ]
      }
    ],
    "rome:day-2": [
      {
        "id": "rome-2-route-map",
        "time": "09:00",
        "title": "Günün Haritalı Rotası",
        "type": "rota özeti",
        "description": "Pazar için tarihi merkezden Trastevere’ye akan temiz yürüyüş rotası. Harita eve geri dönüş eklemez.",
        "duration": "Tüm gün",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Via+Belisario+8+00187+Roma+RM+Italy&destination=Trastevere+Rome&waypoints=Piazza+di+Spagna+Rome|Trevi+Fountain+Rome|Pantheon+Rome|Piazza+Navona+Rome|Campo+de+Fiori+Rome|Jewish+Ghetto+Rome|Isola+Tiberina+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Başlangıç evden. Akşam Trastevere’den eve dönüş haritaya eklenmedi; taksi veya toplu taşıma daha temiz olur.",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-breakfast",
        "time": "09:00",
        "title": "Kahve ve hafif başlangıç",
        "type": "yemek molası",
        "description": "Pazar sabahı acele etmeden kahve, cornetto ve su molasıyla başlayın.",
        "duration": "45 dk",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=cafe+near+Via+Belisario+8+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-local-cafe",
            "type": "kahve",
            "title": "Ev çevresinde kahve",
            "note": "İtalyan usulü hızlı kahve + cornetto. Uzun kahvaltı yerine pratik başlamak iyi olur.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=cafe+near+Via+Belisario+8+Rome"
          }
        ]
      },
      {
        "id": "rome-2-spanish",
        "time": "10:00",
        "title": "Spanish Steps",
        "type": "gezi",
        "description": "Merdivenler ve Piazza di Spagna çevresi. Sabah saatlerinde daha rahat fotoğraf alınır.",
        "duration": "35 dk",
        "address": "Piazza di Spagna, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Spanish+Steps+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-trevi",
        "time": "10:50",
        "title": "Trevi Fountain",
        "type": "gezi",
        "description": "Roma'nın en kalabalık klasiklerinden biri. Fotoğraf ve kısa mola için yeterli süre.",
        "duration": "30 dk",
        "address": "Piazza di Trevi, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Trevi+Fountain+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-trevi-gelato",
            "type": "dondurma",
            "title": "Trevi sonrası gelato",
            "note": "Rengi çok parlak, vitrine taşan dondurmalardan kaçının; daha sade artizanal yerler daha iyi olur.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=gelato+near+Trevi+Fountain+Rome"
          }
        ]
      },
      {
        "id": "rome-2-pantheon",
        "time": "11:45",
        "title": "Pantheon",
        "type": "gezi",
        "description": "Kubbesi ve iç mekânı mutlaka görülmeli. Kısa ama etkileyici bir durak.",
        "duration": "45 dk",
        "address": "Piazza della Rotonda, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Pantheon+Rome",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "ticketNote": "Biletli giriş. Vatikan/Colosseum kadar kritik değil ama online bilet veya uygun saat kontrolü zaman kazandırır.",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-santeustachio",
        "time": "12:45",
        "title": "Sant'Eustachio / kahve molası",
        "type": "kahve molası",
        "description": "Pantheon ile Navona arasında kısa kahve molası için iyi bölge.",
        "duration": "25 dk",
        "address": "Piazza di S. Eustachio, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Sant+Eustachio+Caffe+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": [
          {
            "id": "food-sant-eustachio",
            "type": "kahve",
            "title": "Sant'Eustachio Caffè",
            "note": "Klasik Roma kahve molası. Kalabalıksa ayakta hızlı içip devam edin.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Sant+Eustachio+Caffe+Rome"
          }
        ]
      },
      {
        "id": "rome-2-navona",
        "time": "13:15",
        "title": "Piazza Navona",
        "type": "gezi",
        "description": "Çeşmeler, sokak sanatçıları ve meydan atmosferi. Çocuklarla serbest dolaşmak için güzel.",
        "duration": "40 dk",
        "address": "Piazza Navona, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+Navona+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-lunch",
        "time": "14:00",
        "title": "Navona / Campo öğle molası",
        "type": "yemek molası",
        "description": "Meydana sıfır çok turistik yerler yerine ara sokaklarda kısa öğle molası.",
        "duration": "75 dk",
        "address": "Campo de' Fiori, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Campo+de+Fiori+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-armando",
            "type": "yemek",
            "title": "Armando al Pantheon alternatifi",
            "note": "Rezervasyon bulunursa merkezde klasik Roma yemeği için iyi seçenek; yoksa Navona/Campo ara sokaklarında daha pratik yer bakın.",
            "price": "€€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Armando+al+Pantheon+Rome"
          },
          {
            "id": "food-da-francesco",
            "type": "pizza",
            "title": "Da Francesco / Navona çevresi",
            "note": "Pizza ve makarna için merkezde pratik alternatif; rezervasyon/kalabalık durumuna bakın.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Da+Francesco+Rome+Piazza+Navona"
          }
        ]
      },
      {
        "id": "rome-2-campo",
        "time": "15:30",
        "title": "Campo de' Fiori",
        "type": "gezi",
        "description": "Pazar günü pazar hareketi sınırlı olabilir ama meydan ve çevresi yürüyüş için keyifli.",
        "duration": "30 dk",
        "address": "Campo de' Fiori, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Campo+de+Fiori+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-ghetto",
        "time": "16:15",
        "title": "Jewish Ghetto yürüyüşü",
        "type": "gezi",
        "description": "Tarihi sokaklar, Portico d'Ottavia çevresi ve farklı yemek kültürüyle güzel bir geçiş bölgesi.",
        "duration": "60 dk",
        "address": "Jewish Ghetto, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Jewish+Ghetto+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-carciofi",
            "type": "atıştırmalık",
            "title": "Carciofi alla giudia denemesi",
            "note": "Mevsim ve menü uygunsa Roma Yahudi mutfağının klasiklerinden enginar denenebilir.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=carciofi+alla+giudia+Jewish+Ghetto+Rome"
          }
        ]
      },
      {
        "id": "rome-2-isola",
        "time": "17:30",
        "title": "Isola Tiberina",
        "type": "gezi",
        "description": "Tiber Nehri üzerindeki küçük ada. Trastevere'ye geçmeden önce kısa soluklanma noktası.",
        "duration": "25 dk",
        "address": "Isola Tiberina, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Isola+Tiberina+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-trastevere",
        "time": "18:15",
        "title": "Trastevere sokakları",
        "type": "gezi",
        "description": "Akşam ışıklarıyla Roma'nın en keyifli mahallelerinden biri. Santa Maria in Trastevere çevresinde dolaşın.",
        "duration": "75 dk",
        "address": "Trastevere, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Trastevere+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-2-dinner",
        "time": "19:45",
        "title": "Trastevere akşam yemeği",
        "type": "yemek molası",
        "description": "Pazar akşamı için en güzel kapanış. Çok popüler yerlerde sıra olabilir; çocuklarla bekleme süresine dikkat.",
        "duration": "120 dk",
        "address": "Trastevere, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Trastevere+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Pazar akşamı popüler yerlerde rezervasyon veya erken gitmek önemli.",
        "transportNote": "Dönüşte eve taksi en konforlu seçenek olur.",
        "foodSuggestions": [
          {
            "id": "food-da-enzo",
            "type": "yemek",
            "title": "Da Enzo al 29",
            "note": "Çok popüler; rezervasyon almıyorsa erken gidip sıra bekleme durumunu değerlendirin.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Da+Enzo+al+29+Rome"
          },
          {
            "id": "food-trapizzino",
            "type": "atıştırmalık",
            "title": "Trapizzino",
            "note": "Çocuklarla daha hızlı, daha rahat sokak yemeği alternatifi.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Trapizzino+Trastevere+Rome"
          }
        ]
      }
    ],
    "rome:day-3": [
      {
        "id": "rome-3-route-map",
        "time": "08:00",
        "title": "Günün Haritalı Rotası",
        "type": "rota özeti",
        "description": "Pazartesi Vatikan ve Prati günü. Harita eve geri dönüş eklemez.",
        "duration": "Tüm gün",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Via+Belisario+8+00187+Roma+RM+Italy&destination=Prati+Rome&waypoints=Vatican+Museums|Sistine+Chapel|Prati+Rome|St.+Peter%27s+Basilica|Ponte+Sant%27Angelo|Castel+Sant%27Angelo",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Evden Metro A ile Ottaviano mantıklı. Gün sonunda Prati’den eve dönüş haritaya eklenmedi.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-hotel",
        "time": "08:00",
        "title": "Evden Vatikan'a çıkış",
        "type": "ulaşım",
        "description": "Bilet saatinize göre erken çıkın. Güvenlik sırası ve müze girişi için tampon süre bırakın.",
        "duration": "45 dk",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Via+Belisario%2C+8%2C+00187+Roma+RM%2C+Italy",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Metro A: Barberini/Repubblica → Ottaviano. Ottaviano'dan Vatikan Müzeleri girişine yürüyüş yaklaşık 10-15 dk.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-vatican-museums",
        "time": "09:00",
        "title": "Vatikan Müzeleri",
        "type": "müze",
        "description": "Vatikan gününün ana durağı. Harita gibi kullanmak için içeride önceliği Sistine rotasına ve önemli galerilere verin.",
        "duration": "180 dk",
        "address": "Viale Vaticano, 00165 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Vatican+Museums",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Önceden saatli resmi bilet alınmalı. Sistine Şapeli bu müze rotasının içindedir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-sistine",
        "time": "12:00",
        "title": "Sistine Şapeli",
        "type": "müze",
        "description": "Vatikan Müzeleri rotasının en önemli final noktası. İçeride fotoğraf kurallarına uyun ve kalabalığa hazırlıklı olun.",
        "duration": "30 dk",
        "address": "Sistine Chapel, Vatican City",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Sistine+Chapel",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Ayrı bilet değil; Vatikan Müzeleri biletiyle görülür.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-prati-lunch",
        "time": "13:00",
        "title": "Prati öğle molası",
        "type": "yemek molası",
        "description": "Müze çıkışında doğrudan turistik yerlere oturmak yerine Prati tarafında daha rahat bir mola.",
        "duration": "90 dk",
        "address": "Prati, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Prati+Rome+lunch+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-pizzarium",
            "type": "pizza",
            "title": "Pizzarium / Bonci alternatifi",
            "note": "Vatikan-Cipro tarafında iyi pizza al taglio seçeneği; sıra varsa hızlıca başka alternatife geçin.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Pizzarium+Bonci+Rome"
          },
          {
            "id": "food-prati-lunch",
            "type": "yemek",
            "title": "Prati'de makarna molası",
            "note": "Vatikan kalabalığından biraz uzaklaşıp oturarak yemek için Prati tarafı mantıklı.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Prati+Rome+pasta+restaurant"
          }
        ]
      },
      {
        "id": "rome-3-st-peter",
        "time": "14:45",
        "title": "San Pietro Bazilikası",
        "type": "gezi",
        "description": "Bazilika ve meydan Vatikan gününün ikinci ana parçası. Güvenlik sırası olabilir; süre esnek tutulmalı.",
        "duration": "90 dk",
        "address": "Piazza San Pietro, 00120 Vatican City",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=St+Peter%27s+Basilica+Vatican",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "ticketNote": "Bazilika girişi genelde ücretsizdir; kubbe çıkışı istenirse ayrı ücret/sıra olabilir.",
        "transportNote": "Müze çıkışından bazilikaya geçiş yürüme ve sıra durumuna göre uzayabilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-square",
        "time": "16:15",
        "title": "San Pietro Meydanı",
        "type": "gezi",
        "description": "Meydan, sütunlar ve fotoğraf için kısa serbest zaman.",
        "duration": "30 dk",
        "address": "Piazza San Pietro, 00120 Vatican City",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=St+Peter%27s+Square+Vatican",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-ponte",
        "time": "17:00",
        "title": "Ponte Sant'Angelo",
        "type": "gezi",
        "description": "Nehir kenarı ve melek heykelli köprü yürüyüşü. Gün batımına doğru çok keyifli olur.",
        "duration": "35 dk",
        "address": "Ponte Sant'Angelo, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Ponte+Sant+Angelo+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-castel",
        "time": "17:45",
        "title": "Castel Sant'Angelo dışı",
        "type": "gezi",
        "description": "İçeri girmek güzel ama Vatikan sonrası yorucu olabilir. Bu planda dışarıdan ve köprüden görmek yeterli.",
        "duration": "35 dk",
        "address": "Lungotevere Castello, 50, 00193 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Castel+Sant+Angelo+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "ticketNote": "İçeri girmek isterseniz 1,5-2 saat daha eklemek gerekir; öncelik dışarıdan görmek.",
        "foodSuggestions": []
      },
      {
        "id": "rome-3-dinner",
        "time": "19:15",
        "title": "Prati akşam yemeği",
        "type": "yemek molası",
        "description": "Vatikan gününü Prati'de sakin bir yemekle kapatın. Merkeze dönmeden önce dinlenmek iyi olur.",
        "duration": "105 dk",
        "address": "Prati, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Prati+Rome+dinner+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-prati-dinner",
            "type": "yemek",
            "title": "Prati trattoria alternatifi",
            "note": "Carbonara/cacio e pepe gibi klasikler için rezervasyonlu, sakin bir yer bakın.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=Prati+Rome+trattoria+carbonara"
          },
          {
            "id": "food-prati-gelato",
            "type": "dondurma",
            "title": "Prati gelato",
            "note": "Yemek sonrası kısa dondurma molası.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=gelato+Prati+Rome"
          }
        ]
      }
    ],
    "rome:day-4": [
      {
        "id": "rome-4-route-map",
        "time": "06:45",
        "title": "Günün Haritalı Rotası",
        "type": "rota özeti",
        "description": "Salı için Pompei ve Napoli günü. Rota Roma Termini ile başlar, Napoli keşfinden sonra Roma Termini dönüşünde biter; eve dönüş haritaya eklenmez.",
        "duration": "Tüm gün",
        "address": "Roma Termini, Rome, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Roma+Termini&destination=Roma+Termini&waypoints=Napoli+Centrale|Pompei+Scavi+-+Villa+dei+Misteri|Pompeii+Archaeological+Park|Napoli+Centrale|Spaccanapoli+Naples|Via+San+Gregorio+Armeno+Naples|Piazza+del+Plebiscito+Naples|Lungomare+Caracciolo+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Roma-Napoli hızlı tren, Napoli-Pompei için Circumvesuviana veya Campania Express düşünülür. Geç dönüşte Roma Termini’den eve taksi mantıklı olabilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-hotel",
        "time": "06:45",
        "title": "Evden Termini’ye çıkış",
        "type": "ulaşım",
        "description": "Günübirlik Pompei/Napoli için erken çıkış. Su, şapka, powerbank, tren biletleri ve Pompei bileti kontrol edilir.",
        "duration": "30 dk",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Via+Belisario+8+Rome&destination=Roma+Termini",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Sabah erken olduğu için yürüyüş yerine kısa taksi veya otobüs daha rahat olabilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-termini",
        "time": "07:20",
        "title": "Roma Termini",
        "type": "ulaşım",
        "description": "Napoli hızlı treni için peron kontrolü ve kısa kahve/su alışverişi.",
        "duration": "30 dk",
        "address": "Roma Termini, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Roma+Termini",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Roma-Napoli hızlı tren biletini önceden almak iyi olur. Dönüş saati geç seçilecekse bilet saatini netleştirin.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-naples-train",
        "time": "08:00",
        "title": "Hızlı tren: Roma → Napoli",
        "type": "ulaşım",
        "description": "Yaklaşık 1 saatlik hızlı trenle Napoli Centrale’ye geçiş.",
        "duration": "75 dk",
        "address": "Napoli Centrale, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Napoli+Centrale",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Frecciarossa veya Italo saatlerine göre alınabilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-pompeii-transfer",
        "time": "09:30",
        "title": "Napoli → Pompei Scavi geçişi",
        "type": "ulaşım",
        "description": "Napoli’den Pompei Scavi - Villa dei Misteri durağına geçiş. Peron ve hat tabelalarını dikkatli takip edin.",
        "duration": "60 dk",
        "address": "Pompei Scavi - Villa dei Misteri, Pompei, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Pompei+Scavi+Villa+dei+Misteri",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Circumvesuviana daha sık, Campania Express daha konforlu olabilir. Dönüş saatini de akılda tutun.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-pompeii",
        "time": "10:45",
        "title": "Pompei Arkeolojik Alanı",
        "type": "müze",
        "description": "Forum, Teatro Grande, Via dell’Abbondanza, önemli evler ve amfitiyatro hattı. Çocuklarla 3,5-4 saat ideal; çok uzatmak yorabilir.",
        "duration": "240 dk",
        "address": "Via Villa dei Misteri, 2, 80045 Pompei NA, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Pompeii+Archaeological+Park",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Pompei giriş biletini önceden alın. Güneş, taş zemin ve uzun yürüyüş için rahat ayakkabı şart.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-naples-return",
        "time": "15:15",
        "title": "Pompei → Napoli dönüşü",
        "type": "ulaşım",
        "description": "Pompei gezisini bitirip Napoli merkezine dönme zamanı. Buradan Napoli kısa şehir keşfi başlar.",
        "duration": "60 dk",
        "address": "Napoli Centrale, Naples, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Pompei+Scavi+-+Villa+dei+Misteri&destination=Napoli+Centrale",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-spaccanapoli",
        "time": "16:30",
        "title": "Spaccanapoli yürüyüşü",
        "type": "gezi",
        "description": "Napoli’nin en karakterli tarihi merkez hattı. Kısa ama çok canlı bir şehir hissi verir.",
        "duration": "45 dk",
        "address": "Spaccanapoli, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Spaccanapoli+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Napoli Centrale’den metro/taksi veya yürüyüşle merkeze geçilebilir; kalabalıkta çantalara dikkat.",
        "foodSuggestions": [
          {
            "id": "food-naples-sfogliatella",
            "type": "tatlı",
            "title": "Sfogliatella molası",
            "note": "Napoli’de kısa tatlı/kahve molası için iyi seçim. Çıtır hamurlu klasik tatlıyı deneyin.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=sfogliatella+near+Spaccanapoli+Naples"
          }
        ]
      },
      {
        "id": "rome-4-san-gregorio",
        "time": "17:20",
        "title": "Via San Gregorio Armeno",
        "type": "gezi",
        "description": "Küçük dükkanlar, figürler ve Napoli sokak atmosferi için kısa ama eğlenceli bir durak.",
        "duration": "35 dk",
        "address": "Via San Gregorio Armeno, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Via+San+Gregorio+Armeno+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-plebiscito",
        "time": "18:15",
        "title": "Piazza del Plebiscito",
        "type": "gezi",
        "description": "Napoli’nin büyük meydanı. Gün batımına yakın ferah bir mola ve fotoğraf noktası.",
        "duration": "35 dk",
        "address": "Piazza del Plebiscito, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+del+Plebiscito+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-lungomare",
        "time": "19:00",
        "title": "Lungomare / deniz kenarı kısa yürüyüş",
        "type": "gezi",
        "description": "Hava ve enerji uygunsa Napoli Körfezi manzarası için kısa deniz kenarı yürüyüşü.",
        "duration": "35 dk",
        "address": "Lungomare Caracciolo, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Lungomare+Caracciolo+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "transportNote": "Yorgunluk varsa bu durak atlanıp direkt pizzaya veya istasyona geçilebilir.",
        "foodSuggestions": []
      },
      {
        "id": "rome-4-naples-pizza",
        "time": "19:45",
        "title": "Napoli pizza molası",
        "type": "yemek molası",
        "description": "Napoli’ye kadar gelmişken pizzayı burada yemek güzel final olur. Kuyruk çok uzunsa alternatif pizzeria seçin.",
        "duration": "75 dk",
        "address": "Centro Storico, Naples, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=best+pizza+Centro+Storico+Naples",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-naples-pizza-margherita",
            "type": "yemek",
            "title": "Napoli usulü Margherita",
            "note": "Klasik Margherita veya Marinara deneyin. Çocuklarla paylaşmak kolay olur.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=pizzeria+margherita+Naples+Centro+Storico"
          }
        ]
      },
      {
        "id": "rome-4-train-rome",
        "time": "21:15",
        "title": "Hızlı tren: Napoli → Roma",
        "type": "ulaşım",
        "description": "Geç dönüş planı. Roma’ya varınca ekstra durak yok; Termini’den eve geçip dinlenme.",
        "duration": "75 dk",
        "address": "Roma Termini, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Napoli+Centrale+to+Roma+Termini+train",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Dönüş trenini çok geçe bırakırken çocukların yorgunluğunu hesaba katın. Bilet saatini kesinleştirmeden önce Napoli programına bakın.",
        "transportNote": "Roma Termini’den eve dönüş bu rota kartına eklenmedi; geç saatte taksi en rahat seçenek olabilir.",
        "foodSuggestions": []
      }
    ],
    "rome:day-5": [
      {
        "id": "rome-5-route-map",
        "time": "08:15",
        "title": "Günün Haritalı Rotası",
        "type": "rota özeti",
        "description": "Çarşamba sabahı için hafif kapanış ve Floransa trenine geçiş rotası. Harita ev dönüşünü ayrı son durak yapmaz.",
        "duration": "Sabah",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/dir/?api=1&origin=Via+Belisario+8+00187+Roma+RM+Italy&destination=Roma+Termini&waypoints=Villa+Borghese+Rome|Pincio+Terrace+Rome|Piazza+di+Spagna+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Bavul planına göre yürüyüş kısaltılabilir. Valiz alma/çıkış işi ayrı rota durağı yapılmadı; Termini kartında not olarak tutuldu.",
        "foodSuggestions": []
      },
      {
        "id": "rome-5-breakfast",
        "time": "08:15",
        "title": "Kahvaltı ve çıkış hazırlığı",
        "type": "yemek molası",
        "description": "Son sabah valiz, pasaport, şarj cihazı ve tren biletlerini kontrol edin.",
        "duration": "45 dk",
        "address": "Via Belisario, 8, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=cafe+near+Via+Belisario+8+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-last-cafe",
            "type": "kahve",
            "title": "Son Roma kahvesi",
            "note": "Ev çevresinde kısa kahve/cornetto molası. Uzaklaşmadan yapmak daha güvenli.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=cafe+near+Via+Belisario+8+Rome"
          }
        ]
      },
      {
        "id": "rome-5-borghese",
        "time": "09:15",
        "title": "Villa Borghese / Pincio kısa yürüyüş",
        "type": "gezi",
        "description": "Son sabah için yeşil alan ve şehir manzarası. Hava sıcaksa gölgeli yürüyüş daha rahat olur.",
        "duration": "60 dk",
        "address": "Villa Borghese, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Villa+Borghese+Pincio+Terrace+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "transportNote": "Bavul yoksa yürüyerek yapılabilir. Valiz stresi varsa bu durağı kısaltın.",
        "foodSuggestions": []
      },
      {
        "id": "rome-5-spanish",
        "time": "10:30",
        "title": "Piazza di Spagna son mola",
        "type": "gezi",
        "description": "Floransa öncesi kısa merkez molası. Daha önce yeterince gördüyseniz bu kart opsiyonel kalabilir.",
        "duration": "30 dk",
        "address": "Piazza di Spagna, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+di+Spagna+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": []
      },
      {
        "id": "rome-5-termini",
        "time": "11:45",
        "title": "Roma Termini → Floransa geçişi",
        "type": "ulaşım",
        "description": "Konaklamadan valizleri aldıktan sonra Roma Termini’ye geçiş ve Floransa trenine hazırlık. Peron bilgisi için istasyonda erken olmak iyi olur.",
        "duration": "75 dk",
        "address": "Roma Termini, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Roma+Termini+to+Florence+train",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "ticketNote": "Roma-Floransa hızlı tren biletini önceden alın. Saat kesinleşince bu kartın zamanını güncelleyin.",
        "foodSuggestions": [],
        "transportNote": "Eve dönüş ayrı rota durağı yapılmadı. Valiz alma ve çıkış bu kartın notu olarak kabul edildi."
      }
    ]
  }
};
