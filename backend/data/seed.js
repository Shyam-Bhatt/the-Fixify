// seed.js
const offers = [
    {
        id: 1,
        image: "https://picsum.photos/1200/400?random=1",
        title: "Mega Spring Sale",
        discount: "30% OFF"
    },
    {
        id: 2,
        image: "https://picsum.photos/1200/400?random=2",
        title: "Clearance Deal",
        discount: "Up to 50%"
    }
];


const products = [
    {
        id: 101,
        name: "Aerox Running Shoes",
        brand: "RunCo",
        rating: 4.5,
        price: 3499,
        image: "https://picsum.photos/300/300?random=11"
    },
    {
        id: 102,
        name: "Comfy Cotton T-Shirt",
        brand: "Threadline",
        rating: 4.1,
        price: 499,
        image: "https://picsum.photos/300/300?random=12"
    },
    {
        id: 103,
        name: "Noise-cancel Headphones",
        brand: "SoundMax",
        rating: 4.7,
        price: 7499,
        image: "https://picsum.photos/300/300?random=13"
    },
    {
        id: 104,
        name: "Smartwatch Pro",
        brand: "TimeX",
        rating: 4.2,
        price: 8999,
        image: "https://picsum.photos/300/300?random=14"
    }
];


module.exports = { offers, products };