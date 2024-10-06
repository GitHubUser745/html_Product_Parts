function getRandomRating() {
    return Math.floor(Math.random() * 5) + 1;
}

const productData = {
    'Inkjet printer': {
        title: 'Inkjet Printer Selection',
        description: 'Check out our Inkjet printers!',
        products: [
            { id: 'Inkjet-printer-1', name: 'HP Color LaserJet Pro MFP 4303fdw', detailedName: 'HP Color LaserJet Pro MFP 4303fdw Printer (5HH67A) All tech specs, Functions, Print, copy, scan, fax', price: '39,990', image: 'MyImagesAndIcons/Printer1.png', rating: 3, description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.' },
            { id: 'Inkjet-printer-2', name: 'HP OfficeJet Pro 9730', detailedName: 'HP OfficeJet Pro 9730 Wide Format All-in-One Printer (537P5C)', price: '14,390', image: 'MyImagesAndIcons/Printer2.jpg', rating: 3, description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.'},
            { id: 'Inkjet-printer-3', name: 'Epson EcoTank L3251', detailedName: 'Epson EcoTank L3251 A4 Wi-Fi All-in-One Ink Tank Printer', price: '9,890', image: 'MyImagesAndIcons/Printer3.jpg', rating: 1,  description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.'},
            { id: 'Inkjet-printer-4', name: 'HP Officejet Pro 8210', detailedName: 'HP Officejet Pro 8210 Wireless Print, Duplex printer', price: '7,990', image: 'MyImagesAndIcons/Printer4.jpg', rating: 2,  description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.'},
            { id: 'Inkjet-printer-5', name: 'HP OfficeJet Pro 6230', detailedName: 'HP OfficeJet Pro 6230 ePrinter (E3E03A) Wireless, Duplex printing', price: '4,690', image: 'MyImagesAndIcons/Printer5.png', rating: 3, description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.' },
            { id: 'Inkjet-printer-6', name: 'HP DeskJet 2710', detailedName: 'HP DeskJet 2710 All-in-One Wireless Inkjet Printer', price: '2,790', image: 'MyImagesAndIcons/Printer6.jpg', rating: 4, description: 'Print, scan, and copy in standout colour on sizes up to A3, for bold documents and presentations at up to 50% less cost per page than colour laser. Fax up to 21.6 x 35.6 cm (8.5 x 14 inches). Dynamic security enabled printer. Only intended to be used with cartridges using an HP original chip. Cartridges using a non-HP chip may not work, and those that work today may not work in the future.' }
        ]
    },
    'Dot matrix printer': {
        title: 'Dot Matrix Printer Selection',
        description: 'Explore our Dot matrix printers!',
        products: [
            { id: 'Dot-Matrix-printer-1', name: 'EPSON FX-890II', detailedName: 'EPSON FX-890II', price: '27,600', image: 'MyImagesAndIcons/Printer11.png', rating: 3, description: 'Flexibility. Choice of front, top, bottom and rear paper paths gives you even more control over desk space management. And the addition of a USB interface means more flexibility in connectivity.  Longer ribbon life. With a ribbon life of around 15 million characters, the ribbon replacement cycles are longer, which brings down running costs and maintenance time.'},
            { id: 'Dot-Matrix-printer-2', name: 'EPSON LQ-2190', detailedName: 'EPSON LQ-2190', price: '39,890', image: 'MyImagesAndIcons/Printer12.png', rating: 5, description: 'Flexibility. Choice of front, top, bottom and rear paper paths gives you even more control over desk space management. And the addition of a USB interface means more flexibility in connectivity.  Longer ribbon life. With a ribbon life of around 15 million characters, the ribbon replacement cycles are longer, which brings down running costs and maintenance time.' },
            { id: 'Dot-Matrix-printer-3', name: 'EPSON LQ-350', detailedName: 'EPSON LQ-350', price: '12,475', image: 'MyImagesAndIcons/Printer13.png', rating: 4, description: 'Flexibility. Choice of front, top, bottom and rear paper paths gives you even more control over desk space management. And the addition of a USB interface means more flexibility in connectivity.  Longer ribbon life. With a ribbon life of around 15 million characters, the ribbon replacement cycles are longer, which brings down running costs and maintenance time.' },
            { id: 'Dot-Matrix-printer-4', name: 'EPSON LQ-590II', detailedName: 'EPSON LQ-590II DOT MATRIX PRINTER, C11CF39401', price: '35,950', image: 'MyImagesAndIcons/Printer14.png', rating: 3, description: 'Flexibility. Choice of front, top, bottom and rear paper paths gives you even more control over desk space management. And the addition of a USB interface means more flexibility in connectivity.  Longer ribbon life. With a ribbon life of around 15 million characters, the ribbon replacement cycles are longer, which brings down running costs and maintenance time.' },
            { id: 'Dot-Matrix-printer-5', name: 'EPSON LX-350', detailedName: 'EPSON LX-350 PRINTER', price: '11,850', image: 'MyImagesAndIcons/Printer15.png', rating: 3, description: 'Flexibility. Choice of front, top, bottom and rear paper paths gives you even more control over desk space management. And the addition of a USB interface means more flexibility in connectivity.  Longer ribbon life. With a ribbon life of around 15 million characters, the ribbon replacement cycles are longer, which brings down running costs and maintenance time.' }
        ]
    },
    'Laser printer': {
        title: 'Laser Printer Selection',
        description: 'Explore our Laser printers!',
        products: [
            { id: 'Laser-printer-1', name: 'HP LaserJet Pro MFP 4103DW', detailedName: 'Z6267A HP LaserJet Pro MFP 4103DW Monochrome Print/Copy/Scan/Automatic Duplex Printing & Scanning Wifi & network Port', price: '27,025', image: 'MyImagesAndIcons/Printer31.png', rating: 3, description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.' },
            { id: 'Laser-printer-2', name: 'HP LaserJet Pro MFP 4103DFW', detailedName: 'Z6269A HP LaserJet Pro MFP 4103DFW Monochrome Print/Copy/Scan/Fax Automatic Duplex Printing & Scanning Wifi & network Port', price: '29,785', image: 'MyImagesAndIcons/Printer32.png', rating: 2,  description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.'},
            { id: 'Laser-printer-3', name: 'Canon i-Sensys LBP233DW', detailedName: 'Canon I-Sensys LBP233DW', price: '11,899', image: 'MyImagesAndIcons/Printer33.png', rating: 5, description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.' },
            { id: 'Laser-printer-4', name: 'Canon i-SENSYS LBP236dw', detailedName: 'Canon i-SENSYS LBP236dw', price: '13,250', image: 'MyImagesAndIcons/Printer34.png', rating: 4, description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.' },
            { id: 'Laser-printer-5', name: 'HP 107W Printer', detailedName: 'HP 107W PRINTER', price: '8,980', image: 'MyImagesAndIcons/Printer35.png', rating: 2,description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.'  },
            { id: 'Laser-printer-6', name: 'HP Color LaserJet Pro MFP M479fdn', detailedName: 'HP Color LaserJet Pro MFP M479fdn', price: '40,120', image: 'MyImagesAndIcons/Printer36.png', rating: 3, description: 'Get blazing fast printing speeds, high-volume scanning, and easy management tools with LaserJet Pro.  Dynamic security enabled printer  Certain HP printers are intended to work only with cartridges that have a new or reused HP chip or electronic circuitry. These printers use dynamic security measures to block cartridges using a non-HP chip or electronic circuitry. Periodic firmware updates will maintain the effectiveness of these measures and block cartridges that previously worked. Reused HP chips and electronic circuitry enable the use of reused, remanufactured, and refilled cartridges.' },
        ]
    },
    'Monitor': {
        title: 'Monitor Selection',
        description: 'Choose from our Monitor selection!',
        products: [
            { id: 'Monitor-1', name: 'Hikvision DS-D5043QE', detailedName: 'Hikvision DS-D5043QE, 31.5"/43" LED backlit technology with full HD 1920x1080, HDMI, VGA, Built-in speaker, Wide viewing angle, Black', price: '8,990 - 13,990', image: 'MyImagesAndIcons/Monitor1.png', rating: 4, description: 'Immerse yourself in a world of vibrant colors and stunning clarity. Our cutting edge monitor delivers exceptional visual performance, bringing your favorite content to life with remarkable detail and depth. Experience the thrill of gaming, the beauty of creative projects, and the joy of entertainment on a screen that elevates your viewing experience to new heights.' },
            { id: 'Monitor-2', name: 'MSI 27" G274QPX', detailedName: 'MSI 27" 240 Hz Rapid IPS QHD Gaming Monitor G-Sync Compatible 2560 x 1440 (2K) G274QPX', price: '25,590', image: 'MyImagesAndIcons/Monitor2.png', rating: 2, description: 'Immerse yourself in a world of vibrant colors and stunning clarity. Our cutting edge monitor delivers exceptional visual performance, bringing your favorite content to life with remarkable detail and depth. Experience the thrill of gaming, the beauty of creative projects, and the joy of entertainment on a screen that elevates your viewing experience to new heights.' },
            { id: 'Monitor-3', name: 'MSI G32CQ5P', detailedName: 'MSI G32CQ5P, 32" Gaming Monitor, 2560 x 1440 (QHD) Curved Gaming Monitor, 1 ms, 170Hz, FreeSync Premium, 1500R, HDMI, DisplayPort, Tilt, Swivel, Pivot and Height Adjustable', price: '22,990', image: 'MyImagesAndIcons/Monitor3.png', rating: 3,description: 'Immerse yourself in a world of vibrant colors and stunning clarity. Our cutting edge monitor delivers exceptional visual performance, bringing your favorite content to life with remarkable detail and depth. Experience the thrill of gaming, the beauty of creative projects, and the joy of entertainment on a screen that elevates your viewing experience to new heights.' }
        ]
    },
    'Casing': {
        title: 'PC Casing Selection',
        description: 'Browse our variety of PC casings!',
        products: [
            { id: 'Casing-1', name: 'COOLER MASTER MasterBox 600', detailedName: 'COOLER MASTER MasterBox 600 PC CASING (BLACK / WHITE)', price: '5,990', image: 'MyImagesAndIcons/Casing1.png', rating: 2, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' },
            { id: 'Casing-2', name: 'COOLER MASTER Q300L V2', detailedName: 'COOLER MASTER Q300L V2 ARGB PC CASING (BLACK)', price: '3,990', image: 'MyImagesAndIcons/Casing2.png', rating: 1, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' },
            { id: 'Casing-3', name: 'COOLER MASTER TD500 MAX', detailedName: 'COOLER MASTER TD500 MAX PC CASING', price: '26,900', image: 'MyImagesAndIcons/Casing3.png', rating: 4,description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.'  },
            { id: 'Casing-4', name: 'COOLER MASTER Masterbox MB530P', detailedName: 'Casing Cooler Master Masterbox MB530P Black RGB', price: '6,490', image: 'MyImagesAndIcons/Casing4.png', rating: 5, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' },
            { id: 'Casing-5', name: 'COOLER MASTER Masterbox MB520', detailedName: 'Casing Cooler Master Masterbox MB520 MESH', price: '5,690', image: 'MyImagesAndIcons/Casing5.png', rating: 4, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' },
            { id: 'Casing-6', name: 'COOLER MASTER HAF 500 WHITE', detailedName: 'COOLER MASTER CASING HAF 500 WHITE', price: '7,390', image: 'MyImagesAndIcons/Casing6.png', rating: 3, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.'},
            { id: 'Casing-7', name: 'COOLER MASTER HAF 700 EVO', detailedName: 'COOLER MASTER CASING HAF 700 EVO', price: '28,900', image: 'MyImagesAndIcons/Casing7.png', rating: 2, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' },
            { id: 'Casing-8', name: 'COOLER MASTER HAF 500', detailedName: 'COOLER MASTER CASING HAF 500', price: '7,390', image: 'MyImagesAndIcons/Casing8.png', rating: 4, description: 'Elevate your gaming setup with a sleek and stylish PC case. Designed to showcase your components while providing optimal airflow and easy accessibility, this case is the perfect blend of form and function. Its premium materials and meticulous craftsmanship ensure a durable and visually stunning enclosure for your high-performance build.' }
        ]
    },
    'CPU Cooler': {
        title: 'CPU Cooler Selection',
        description: 'Check out our range of CPU coolers!',
        products: [
            { id: 'CPU-Cooler-1', name: 'MSI MAG Coreliquid M360', detailedName: 'MSI MAG Coreliquid M360 CPU Liquid Cooler', price: '7,990', image: 'MyImagesAndIcons/CPU1.png', rating: 5, description: 'Keep your high-performance CPU running cool and quiet with our advanced cooling solution. Featuring [innovative cooling technology], this cooler efficiently dissipates heat, preventing throttling and ensuring optimal performance during intensive tasks. Its sleek design and quiet operation make it the perfect choice for gamers and enthusiasts who demand the best.' },
            { id: 'CPU-Cooler-2', name: 'MSI MPG Coreliquid D360', detailedName: 'MSI MPG Coreliquid D360 CPU Liquid Cooler', price: '18,290', image: 'MyImagesAndIcons/CPU2.png', rating: 2, description: 'Keep your high-performance CPU running cool and quiet with our advanced cooling solution. Featuring [innovative cooling technology], this cooler efficiently dissipates heat, preventing throttling and ensuring optimal performance during intensive tasks. Its sleek design and quiet operation make it the perfect choice for gamers and enthusiasts who demand the best.' },
            { id: 'CPU-Cooler-3', name: 'MSI MAG Coreliquid M240', detailedName: 'MSI MAG Coreliquid M240 CPU Liquid Cooler', price: '6,190', image: 'MyImagesAndIcons/CPU3.png', rating: 4, description: 'Keep your high-performance CPU running cool and quiet with our advanced cooling solution. Featuring [innovative cooling technology], this cooler efficiently dissipates heat, preventing throttling and ensuring optimal performance during intensive tasks. Its sleek design and quiet operation make it the perfect choice for gamers and enthusiasts who demand the best.' },
            { id: 'CPU-Cooler-4', name: 'MSI MPG Coreliquid D240', detailedName: 'MSI MPG Coreliquid D240 CPU Liquid Cooler', price: '15,900', image: 'MyImagesAndIcons/CPU4.png', rating: 5, description: 'Keep your high-performance CPU running cool and quiet with our advanced cooling solution. Featuring [innovative cooling technology], this cooler efficiently dissipates heat, preventing throttling and ensuring optimal performance during intensive tasks. Its sleek design and quiet operation make it the perfect choice for gamers and enthusiasts who demand the best.' }
        ]
    },
    'CPU': {
        title: 'CPU Selection',
        description: 'Explore our range of CPUs!',
        products: [
            { id: 'CPU-1', name: 'Intel® Core™ i7-12700', detailedName: 'Intel® Core™ i7-12700 LGA1700 (WITHOUT BOX)', price: '18,490', image: 'MyImagesAndIcons/CPUCore1.png', rating: 4, description: 'Experience unparalleled processing power with our state-of-the-art CPU. Engineered to handle the most demanding tasks with ease, this processor delivers exceptional performance across a wide range of applications. From gaming to content creation to productivity, our CPU will exceed your expectations and elevate your computing experience to new heights.' },
            { id: 'CPU-2', name: 'Intel® Core™ i5-12400', detailedName: 'Intel® Core™ i5-12400 (BOX)', price: '9,900', image: 'MyImagesAndIcons/CPUCore2.png', rating: 3, description: 'Experience unparalleled processing power with our state-of-the-art CPU. Engineered to handle the most demanding tasks with ease, this processor delivers exceptional performance across a wide range of applications. From gaming to content creation to productivity, our CPU will exceed your expectations and elevate your computing experience to new heights.' }
        ]
    },

    'Power Supply': {
        title: 'Power Supply Selection',
        description: 'Choose from our range of power supplies!',
        products: [
            { id: 'Power-Supply-1', name: 'ASUS ROG STRIX 750G', detailedName: 'ASUS ROG STRIX 750G - FULLY MODULAR 80+ GOLD 750W GAMING POWER SUPPLY', price: '9,190', image: 'MyImagesAndIcons/Supply1.png', rating: 1, description: 'Power your high-performance system with our reliable and efficient power supply. Designed to deliver clean, stable power to your components, this PSU ensures optimal performance and reliability even under the most demanding workloads. Its advanced features and durable construction make it the perfect choice for gamers, enthusiasts, and professionals who require a dependable power source.'},
            { id: 'Power-Supply-2', name: 'ASUS ROG THOR 1000P2', detailedName: 'ASUS ROG THOR 1000P2 GAMING - FULLY MODULAR 80+ PLATINUM 1000W GAMING POWER SUPPLY', price: '25,900', image: 'MyImagesAndIcons/Supply2.png', rating: 5, description: 'Power your high-performance system with our reliable and efficient power supply. Designed to deliver clean, stable power to your components, this PSU ensures optimal performance and reliability even under the most demanding workloads. Its advanced features and durable construction make it the perfect choice for gamers, enthusiasts, and professionals who require a dependable power source.'  },
            { id: 'Power-Supply-3', name: 'ASUS ROG STRIX 850G', detailedName: 'ASUS ROG STRIX 850G - FULLY MODULAR 80+ GOLD 850W GAMING POWER SUPPLY', price: '16,290', image: 'MyImagesAndIcons/Supply3.png', rating: 2, description: 'Power your high-performance system with our reliable and efficient power supply. Designed to deliver clean, stable power to your components, this PSU ensures optimal performance and reliability even under the most demanding workloads. Its advanced features and durable construction make it the perfect choice for gamers, enthusiasts, and professionals who require a dependable power source.' },
            { id: 'Power-Supply-4', name: 'COOLER MASTER MWE GOLD V2', detailedName: 'COOLER MASTER POWER SUPPLY MWE GOLD V2 FM 850W', price: '7,990', image: 'MyImagesAndIcons/Supply4.png', rating: 3, description: 'Power your high-performance system with our reliable and efficient power supply. Designed to deliver clean, stable power to your components, this PSU ensures optimal performance and reliability even under the most demanding workloads. Its advanced features and durable construction make it the perfect choice for gamers, enthusiasts, and professionals who require a dependable power source.'  }
        ]
    },

    'GPU': {
        title: 'GPU Selection',
        description: 'Explore our range of high-performance GPUs!',
        products: [
            { id: 'GPU-1', name: 'RTX 3080', detailedName: 'ASUS TUF GAMING NVIDIA RTX 3080 10G V2 GAMING', price: '25,700', image: 'SingleProductPage/GpuSingleProductPage/Images/RTX3080.jpg', rating: 5, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-2', name: 'RTX 4080 SUPER', detailedName: 'ROG Strix GeForce RTX™ 4080 SUPER 16GB GDDR6X OC Edition', price: '40,500', image: 'SingleProductPage/GpuSingleProductPage/Images/RTX4080Super.jpg', rating: 4, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-3', name: 'GTX 1660 TI', detailedName: 'TUF Gaming GeForce® GTX 1660 Ti EVO OC Edition 6GB GDDR6', price: '18,400', image: 'SingleProductPage/GpuSingleProductPage/Images/GTX 1660 TI._AC_SL1500_.jpg', rating: 5,description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.'  },
            { id: 'GPU-4', name: 'RTX 3070', detailedName: 'ROG-STRIX-RTX3070-O8G-WHITE', price: '25,700', image: 'SingleProductPage/GpuSingleProductPage/Images/RTX3070white.jpg', rating: 4,  description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-5', name: 'GTX 1650 EVO', detailedName: 'ASUS Phoenix GeForce GTX 1650 EVO OC Edition 4GB GDDR6', price: '10,700', image: 'SingleProductPage/GpuSingleProductPage/Images/GTX 1650 Evo.jpeg', rating: 3, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-6', name: 'RTX 4090', detailedName: 'ASUS TUF Gaming GeForce RTX™ 4090 24GB GDDR6X OG', price: '80,700', image: 'SingleProductPage/GpuSingleProductPage/Images/4090.jpg', rating: 5, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-7', name: 'RTX 2060', detailedName: 'ASUS Dual GeForce RTX 2060 EVO', price: '26,700', image: 'SingleProductPage/GpuSingleProductPage/Images/2060EVO.jpeg', rating: 4, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' },
            { id: 'GPU-8', name: 'RTX 2080 EVO', detailedName: 'DUAL-RTX2080-A8G-EVO', price: '29,700', image: 'SingleProductPage/GpuSingleProductPage/Images/2060EVO.jpeg', rating: 2, description: 'Immerse yourself in stunning visuals with our cutting-edge GPU. Featuring [advanced graphics technology], this powerful card delivers exceptional performance for gaming, content creation, and more. Experience lifelike graphics, smooth frame rates, and stunning special effects that will bring your favorite games and applications to life.' }
        ]
    },

    'Hard Disk Drive': {
        title: 'HDD Selection',
        description: 'Explore our range of high-capacity Hard Disk Drives!',
        products: [
            { id: 'Hard-Disk_Drive-1', name: 'TOSHIBA ENTERPRISE 10TB', detailedName: 'TOSHIBA ENTERPRISE 10TB 7200RPM 256MB INTERNAL HDD 3.5"',  price: '16,200.00', image: 'MyImagesAndIcons/HDD1.png', rating: 3, description: 'Store your valuable data with our high-capacity HDD. Offering ample storage space for your files, documents, media, and more, this reliable drive provides fast data transfer speeds and long-lasting durability. Perfect for storing large libraries of games, movies, and other digital content.' },
            { id: 'Hard-Disk_Drive-2', name: 'TOSHIBA S300 SURVEILLANCE 8TB', detailedName: 'TOSHIBA S300 SURVEILLANCE 8TB INTERNAL HDD 3.5"', price: '12,000.00', image: 'MyImagesAndIcons/HDD2.png', rating: 2,  description: 'Store your valuable data with our high-capacity HDD. Offering ample storage space for your files, documents, media, and more, this reliable drive provides fast data transfer speeds and long-lasting durability. Perfect for storing large libraries of games, movies, and other digital content.'},
            { id: 'Hard-Disk_Drive-3', name: '2TB SEAGATE SKYHAWK', detailedName: '2TB SEAGATE SKYHAWK SURVEILLANCE HDD', price: '3,950.00', image: 'MyImagesAndIcons/HDD3.png', rating: 4, description: 'Store your valuable data with our high-capacity HDD. Offering ample storage space for your files, documents, media, and more, this reliable drive provides fast data transfer speeds and long-lasting durability. Perfect for storing large libraries of games, movies, and other digital content.' },
            { id: 'Hard-Disk_Drive-4', name: 'TOSHIBA S300 SURVEILLANCE 4TB', detailedName: 'TOSHIBA S300 SURVEILLANCE 4TB INTERNAL HDD 3.5"', price: '5,490.00', image: 'MyImagesAndIcons/HDD4.png', rating: 1, description: 'Store your valuable data with our high-capacity HDD. Offering ample storage space for your files, documents, media, and more, this reliable drive provides fast data transfer speeds and long-lasting durability. Perfect for storing large libraries of games, movies, and other digital content.' }
        ]
    },

    'Solid State Drive': {
        title: 'Solid State Drive Selection',
        description: 'Explore our Solid State Drives!',
        products: [
            { id: 'Solid-State-Drive-1', name: 'KIOXIA SSD M.2 2280 PCIE 500GB NVME', detailedName: 'KIOXIA SSD M.2 2280 PCIE 500GB NVME', price: '2,575.00', oldPrice: '3,050.00', image: 'MyImagesAndIcons/SSD1.png', rating: 3, description: 'Experience lightning-fast load times and exceptional performance with our SSD. This high-speed storage solution delivers blazing-fast data transfer speeds, significantly reducing boot times, application launch times, and overall system responsiveness. Perfect for demanding applications like gaming, video editing, and content creation.' },
            { id: 'Solid-State-Drive-2', name: 'Lexar NM620 256GB M.2 2280 NVME SSD', detailedName: 'Lexar NM620 256GB M.2 2280 NVME SSD', price: '1,950.00', image: 'MyImagesAndIcons/SSD2.png', rating: 2, description: 'Experience lightning-fast load times and exceptional performance with our SSD. This high-speed storage solution delivers blazing-fast data transfer speeds, significantly reducing boot times, application launch times, and overall system responsiveness. Perfect for demanding applications like gaming, video editing, and content creation.' },
            { id: 'Solid-State-Drive-3', name: 'WD Red SA500 NAS SATA SSD M.2 2280 2TB', detailedName: 'WD Red SA500 NAS SATA SSD M.2 2280 2TB', price: '12,000.00', image: 'MyImagesAndIcons/SSD3.png', rating: 5, description: 'Experience lightning-fast load times and exceptional performance with our SSD. This high-speed storage solution delivers blazing-fast data transfer speeds, significantly reducing boot times, application launch times, and overall system responsiveness. Perfect for demanding applications like gaming, video editing, and content creation.' },
            { id: 'Solid-State-Drive-4', name: 'Samsung T7 TOUCH - EXTERNAL SSD 2TB', detailedName: 'Samsung T7 TOUCH - EXTERNAL SSD 2TB', price: '13,750.00', image: 'MyImagesAndIcons/SSD4.png', rating: 4, description: 'Experience lightning-fast load times and exceptional performance with our SSD. This high-speed storage solution delivers blazing-fast data transfer speeds, significantly reducing boot times, application launch times, and overall system responsiveness. Perfect for demanding applications like gaming, video editing, and content creation.'  }
       ]
    },

    'Headphone': {
        title: 'Headphone Selection',
        description: 'Explore our range of Headphones!',
        products: [
            { id: 'Headphone-1', name: 'A4TECH - FSTYLER AUX 3.5mm 4-PIN STEREO HEADPHONE STONE (BLACK)', detailedName: 'A4TECH - FSTYLER AUX 3.5mm 4-PIN STEREO HEADPHONE STONE (BLACK)', price: '790.00', image: 'MyImagesAndIcons/HeadPhone1.png', rating: 3, description: 'Immerse yourself in a world of pure audio with our premium headphones. Featuring [advanced audio technology], these headphones deliver exceptional sound quality, rich bass, and crystal-clear highs. With comfortable design and noise-canceling capabilities, they are perfect for gaming, music listening, and more.' },
            { id: 'Headphone-2', ame: 'A4TECH HS-30i HEADPHONE 4-PIN BLACK WITH CABLE / ADAPTER', detailedName: 'A4TECH HS-30i HEADPHONE 4-PIN BLACK WITH CABLE / ADAPTER', price: '890.00', image: 'MyImagesAndIcons/HeadPhone2.png', rating: 2,  description: 'Immerse yourself in a world of pure audio with our premium headphones. Featuring [advanced audio technology], these headphones deliver exceptional sound quality, rich bass, and crystal-clear highs. With comfortable design and noise-canceling capabilities, they are perfect for gaming, music listening, and more.'},
            { id: 'Headphone-3', name: 'VERTUX BLITZ 7.1 SURROUND SOUND GAMING HEADPHONE', detailedName: 'VERTUX BLITZ 7.1 SURROUND SOUND GAMING HEADPHONE', price: '2,176.00', oldPrice: '3,400.00', image: 'MyImagesAndIcons/HeadPhone3.png', rating: 4, description: 'Immerse yourself in a world of pure audio with our premium headphones. Featuring [advanced audio technology], these headphones deliver exceptional sound quality, rich bass, and crystal-clear highs. With comfortable design and noise-canceling capabilities, they are perfect for gaming, music listening, and more.' },
            { id: 'Headphone-4', name: 'VERTUX MIAMI PRO GAMING HEADSET FOR PHONE', detailedName: 'VERTUX MIAMI PRO GAMING HEADSET FOR PHONE', price: '2,784.00', oldPrice: '4,350.00', image: 'MyImagesAndIcons/HeadPhone4.png', rating: 5, description: 'Immerse yourself in a world of pure audio with our premium headphones. Featuring [advanced audio technology], these headphones deliver exceptional sound quality, rich bass, and crystal-clear highs. With comfortable design and noise-canceling capabilities, they are perfect for gaming, music listening, and more.' }
        ]
    },

    'Speaker': {
        title: 'Speaker Selection',
        description: 'Explore our range of Speakers!',
        products: [
            { id: 'Speaker-1', name: 'LOGITECH Z533 MULTIMEDIA SPEAKERS', detailedName: 'LOGITECH Z533 MULTIMEDIA SPEAKERS', price: '6,550.00', image: 'MyImagesAndIcons/Speaker1.png', rating: 2, description: 'Experience powerful, immersive sound with our high-performance speakers. Designed to deliver rich, detailed audio across a wide range of frequencies, these speakers bring your favorite music, movies, and games to life. With [advanced sound technology] and a sleek, stylish design, they are the perfect addition to any home entertainment setup.' },
            { id: 'Speaker-2', name: 'LOGITECH Z313 SPEAKER SYSTEM - 3.5MM STEREO', detailedName: 'LOGITECH Z313 SPEAKER SYSTEM - 3.5MM STEREO', price: '3,100.00', image: 'MyImagesAndIcons/Speaker2.png', rating: 3, description: 'Experience powerful, immersive sound with our high-performance speakers. Designed to deliver rich, detailed audio across a wide range of frequencies, these speakers bring your favorite music, movies, and games to life. With [advanced sound technology] and a sleek, stylish design, they are the perfect addition to any home entertainment setup.' },
            { id: 'Speaker-3', name: 'HP DHS-2111 Speaker Desktop Wired Mini Multimedia USB Speaker, Stereo, Subwoofer for Home, Mobile & Notebook | 2B286AA', detailedName: 'HP DHS-2111 Speaker Desktop Wired Mini Multimedia USB Speaker, Stereo, Subwoofer for Home, Mobile & Notebook | 2B286AA', price: '890.00', image: 'MyImagesAndIcons/Speaker3.png', rating: 1, description: 'Experience powerful, immersive sound with our high-performance speakers. Designed to deliver rich, detailed audio across a wide range of frequencies, these speakers bring your favorite music, movies, and games to life. With [advanced sound technology] and a sleek, stylish design, they are the perfect addition to any home entertainment setup.' },
            { id: 'Speaker-4', name: 'Lenovo Thinkplus TS38 Wired Desktop Speakers', detailedName: 'Lenovo Thinkplus TS38 Wired Desktop Speakers', price: '890.00', image: 'MyImagesAndIcons/Speaker4.png', rating: 5, description: 'Experience powerful, immersive sound with our high-performance speakers. Designed to deliver rich, detailed audio across a wide range of frequencies, these speakers bring your favorite music, movies, and games to life. With [advanced sound technology] and a sleek, stylish design, they are the perfect addition to any home entertainment setup.'  }
        ]
    }

};

function loadProductPage(category) {
    const selectedCategory = productData[category];

  
    document.querySelector('.subtitle').textContent = selectedCategory.title;
    document.querySelector('.sub-subtitle').textContent = selectedCategory.description;

  
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    
    selectedCategory.products.forEach((product) => {
        const stars = generateStarRating(product.rating);
        const productBox = `
            <div class="product-box" data-price="${product.price}" data-stars="${product.rating}">
                <div>
                    <p class="product-name">${product.name}</p>
                </div>
                <div>
                     <img class="image" src="${product.image}" alt="${product.name}">
                </div>
                <div class="detailed-product-name">
                    <p>${product.detailedName}</p>
                </div>
                <hr class="line">
                <div class="cost">
                    RS ${product.price}.00
                </div>
                <hr class="line">
                <div class="star">
                    ${stars}
                </div>
                <div class="product-button">
                    <button class="view-product" data-id="${product.id}">View Product</button>
                </div>
            </div>`;
        productGrid.innerHTML += productBox;
    });

    const viewProductButtons = document.querySelectorAll('.view-product');
    viewProductButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            window.location.href = `single-product.html?productId=${productId}`;
        });
    });
    addViewProductEventListeners();
}




function addViewProductEventListeners() {
  const viewProductButtons = document.querySelectorAll('.view-product');
  viewProductButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.target.getAttribute('data-id');
      window.location.href = `single-product.html?productId=${productId}`;
    });
  });
}

function generateStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<span class="fa fa-star checked"></span>';
    } else {
      stars += '<span class="fa fa-star"></span>';
    }
  }
  return stars;
}

function initializeProductPage() {

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category') || 'GPU';
  loadProductPage(category);
}


document.addEventListener('DOMContentLoaded', initializeProductPage);


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('view-product')) {
    const productId = e.target.getAttribute('data-id');
    window.location.href = `single-product.html?productId=${productId}`;
  }
});


document.querySelectorAll('.sidebar-category').forEach(item => {
  item.addEventListener('click', (e) => {
    const category = e.target.getAttribute('data-category');
    loadProductPage(category);
  });
});
