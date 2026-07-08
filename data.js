const DEMO_TRIP_DATA = {
  "cities": [
    {
      "id": "rome",
      "name": "Roma",
      "days": [
        {
          "id": "day-1",
          "label": "Gün 1"
        },
        {
          "id": "day-2",
          "label": "Gün 2"
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
        "id": "rome-1-hotel",
        "time": "09:00",
        "title": "Otelden çıkış",
        "type": "serbest zaman",
        "description": "Güne rahat başlamak için çanta, su ve bilet kontrolü.",
        "duration": "30 dk",
        "address": "Roma merkez konaklama bolgesi",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Rome+city+center",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-colosseum",
        "time": "09:45",
        "title": "Colosseum",
        "type": "müze",
        "description": "Roma'nın en ikonik durağı. Giriş saatinden önce alanda olmak iyi olur.",
        "duration": "90 dk",
        "address": "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Colosseum+Rome",
        "ticketRequired": true,
        "reservationRequired": true,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-forum",
        "time": "11:30",
        "title": "Roman Forum",
        "type": "müze",
        "description": "Antik Roma'nın kamusal yaşam merkezinde yavaş tempolu bir yürüyüş.",
        "duration": "75 dk",
        "address": "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Roman+Forum+Rome",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-lunch",
        "time": "13:00",
        "title": "Öğle molası",
        "type": "yemek molası",
        "description": "Forum sonrası yakın bölgede hafif bir öğle arası.",
        "duration": "90 dk",
        "address": "Monti, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Monti+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-monti-pasta",
            "type": "yemek",
            "title": "Monti'de makarna molası",
            "note": "Kısa yürüyüş mesafesinde pratik ve doyurucu seçenek bak.",
            "price": "€€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=best+pasta+Monti+Rome"
          }
        ]
      },
      {
        "id": "rome-1-pantheon",
        "time": "15:00",
        "title": "Pantheon",
        "type": "gezi",
        "description": "Kubbesi ve meydan atmosferiyle günün en etkileyici duraklarından biri.",
        "duration": "45 dk",
        "address": "Piazza della Rotonda, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Pantheon+Rome",
        "ticketRequired": true,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-navona",
        "time": "16:00",
        "title": "Piazza Navona",
        "type": "gezi",
        "description": "Çeşme, sokak sanatçıları ve meydan keyfi için sakin bir mola.",
        "duration": "45 dk",
        "address": "Piazza Navona, 00186 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Piazza+Navona+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-trevi",
        "time": "17:00",
        "title": "Trevi Fountain",
        "type": "gezi",
        "description": "Kalabalık artmadan fotoğraf ve kısa mola için iyi saat.",
        "duration": "35 dk",
        "address": "Piazza di Trevi, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Trevi+Fountain+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-trevi-gelato",
            "type": "dondurma",
            "title": "Trevi yakininda gelato",
            "note": "Çok turistik olmayan bir sokak dondurmacısı seç.",
            "price": "€",
            "mapLink": "https://www.google.com/maps/search/?api=1&query=gelato+near+Trevi+Fountain"
          }
        ]
      },
      {
        "id": "rome-1-spanish",
        "time": "18:00",
        "title": "Spanish Steps",
        "type": "gezi",
        "description": "Gün batımına doğru merdivenler ve yakın sokaklarda serbest zaman.",
        "duration": "60 dk",
        "address": "Piazza di Spagna, 00187 Roma RM, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Spanish+Steps+Rome",
        "ticketRequired": false,
        "reservationRequired": false,
        "priority": "opsiyonel",
        "foodSuggestions": []
      },
      {
        "id": "rome-1-dinner",
        "time": "20:00",
        "title": "Akşam yemeği bölgesi",
        "type": "yemek molası",
        "description": "Günü uzun bir yemekle kapatmak için Trastevere veya Monti seçilebilir.",
        "duration": "120 dk",
        "address": "Trastevere, Rome, Italy",
        "mapLink": "https://www.google.com/maps/search/?api=1&query=Trastevere+Rome+restaurants",
        "ticketRequired": false,
        "reservationRequired": true,
        "priority": "mutlaka",
        "foodSuggestions": [
          {
            "id": "food-1783516237271",
            "type": "yemek",
            "price": "Biraz pahalı ama taze",
            "title": "Makarna",
            "mapLink": "https://www.google.com/maps/place/Osteria+da+Fortunata+-+Rinascimento,+Corso+del+Rinascimento,+17,+00186+Roma+RM,+%C4%B0talya/@41.8976934,12.4739066,17z/data=!4m6!3m5!1s0x132f614c69ed10df:0xc987d563139a8649!8m2!3d41.8976934!4d12.4739066!16s%2Fg%2F11fq__5q0n?g_ep=Eg1tbF8yMDI2MDcwNV8wIOC7DCoASAJQAg%3D%3D",
            "note": "Carbonara ve suppli çok beğenilmiş, tatlı olarak tiramisu veya cheesecake öneririm. (Konumu ispanyol merdivenlerine 3 km civarinda trevi fountin’a 1 km civarında.)"
          }
        ]
      }
    ]
  }
};
