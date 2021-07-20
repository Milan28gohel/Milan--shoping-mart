import *    as images from "../lib/constants";


export const products =[
    {
        id: 1,
        name:  "Samsung Galaxy Note 20 Ultra 5G",
        image: `${images.samsunggalaxyf62}`,
        description: "Mystic Black, 12GB RAM, 256GB Storage",
        brand: "Samsung",
        price:104999,
        type: "Mobile"
    },

    {
        id: 2,
        name: "HP 14 (2021) 11th Gen Intel Core i3 Laptop",
        image: `${images.hplaptop}`,
        description:"Alexa Built-in, 8GB RAM, 256GB SSD, 14-Inch (35.6 cm) FHD Screen",
        brand: "Hp",
        price:41990,
        type:"Laptop"

    },

    {
        id:3,
        name:"Hp pendrive",
        image:`${images.Hppendrive}`,
        description:"Lidless, compact design with integrated strap-hole, For Desktop Computer, Television, Laptop",
        brand:"Hp",
        price:49900 ,
        type:"Pendrive"
    },
    
    {
        id:4,
        name:"Mivi",
        image:`${images.Mivi}`,
        description:"Wireless Bluetooth Speaker 5W, Portable Speaker with Studio Quality Sound, Powerful Bass, 24 Hours Playtime, Waterproof, Dual Pairing, Bluetooth 5.0 and in-Built Mic with Voice Assistance",
        brand:"Mivi",
        price:1099,
        type:"Speaker"
    }
];
export default products;