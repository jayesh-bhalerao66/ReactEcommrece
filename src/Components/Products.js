const products = [
  {
    id: 1,
    image: "images/mob1.webp",
    productName: "realme 12 5G (Woodland Green, 128 GB)  (6 GB RAM)",
    price: 16999,
    desc: `6 GB RAM | 128 GB ROM | Expandable Upto 2 TB
        17.07 cm (6.72 inch) Full HD+ Display
        108MP + 2MP | 8MP Front Camera
        5000 mAh Battery
        Dimensity 6100+ Processor`,
    type: "mobile",
  },
  {
    id: 2,
    image: "images/mob2.webp",
    productName:
      "POCO M6 5G - Locked with Airtel Prepaid (Orion Blue, 128 GB)  (4 GB RAM)",
    price: 8799,
    desc: `4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
    17.12 cm (6.74 inch) HD+ Display
    50MP Rear Camera
    5000 mAh Battery
    Mediatek Dimensity 6100+ Processor`,
    type: "mobile",
  },
  {
    id: 3,
    image: "images/mob3.webp",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 4,
    image: "images/mob4.jpg",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 5,
    image: "images/mob5.jpg",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 6,
    image: "images/1.jpg",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 7,
    image: "images/2.webp",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 8,
    image: "images/3.jpg",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 9,
    image: "images/headset1.webp",
    productName: "OnePlus Bullets Wireless Z2 ",
    price: 1798,
    desc: `With Mic:Yes
    Bluetooth version: 5
    Battery life: 20 Hrs | Charging time: 10 min`,
    type: "headset",
  },
  {
    id: 10,
    image: "images/headset2.webp",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 11,
    image: "images/head3.jpg",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 12,
    image: "images/head4.jpg",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 13,
    image: "images/head5.jpg",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 14,
    image: "images/head6.jpg",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 15,
    image: "images/head7.jpg",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 16,
    image: "images/laptop1.webp",
    productName: "Apple 2020 Macbook Air Apple M1",
    price: 82990,
    desc: `Stylish & Portable Thin and Light Laptop
    13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)`,
    type: "laptop",
  },
  {
    id: 17,
    image: "images/laptop2.webp",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 18,
    image: "images/lap3.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 19,
    image: "images/lap4.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 20,
    image: "images/lap5.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 21,
    image: "images/lap6.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 22,
    image: "images/lap7.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 23,
    image: "images/lap8.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 24,
    image: "images/Watch1.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 25,
    image: "images/Watch2.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 26,
    image: "images/Watch3.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 27,
    image: "images/Watch4.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 28,
    image: "images/Watch5.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 29,
    image: "images/Watch6.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 30,
    image: "images/Watch7.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 31,
    image: "images/Watch8.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "Watch",
  },
  {
    id: 32,
    image: "images/tv1.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 33,
    image: "images/tv2.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 34,
    image: "images/tv3.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 35,
    image: "images/tv4.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 36,
    image: "images/tv5.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 37,
    image: "images/tv6.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
  {
    id: 38,
    image: "images/tv7.jpg",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "tv",
  },
];
export default products;
