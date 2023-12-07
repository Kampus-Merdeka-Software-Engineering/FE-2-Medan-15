const productData = [{
    id: "product1",
    itemSrc: "image/r1.jpg",
    name: "Jelaja Hotel Room",
    price: 899000
  },
  {
    id: "product2",
    itemSrc: "image/r2.jpg",
    name: "Jelaja Hotel Twin Bedroom",
    price: 999000 
  },
  {
    id: "product3",
    itemSrc: "image/r3.jpg",
    name: "Jelaja Hotel Superior Room",
    price: 1499000
  },
  {
    id: "product4",
    itemSrc: "image/r4.jpg",
    name: "Jelaja Hotel Suite Room",
    price: 2499000
  },
  {
    id: "product5",
    itemSrc: "image/r5.jpg",
    name: "Jelaja Hotel Terrace Room",
    price: 1799000 
  },
  {
    id: "product6",
    itemSrc: "image/r6.jpg",
    name: "Jelaja Hotel Luxurious Room",
    price: 1899000 
  }, 
];

const parentProduct = document.getElementById('parent-product');

//API untuk memanggil nama dan price di Form CO
function redirectToCheckout(productId) {
    console.log("redirect to checkout");
    console.log(productId);

    const product = productData.filter(product => product.id === productId);
    console.log("redirect to checkout");
    localStorage.setItem('productData', JSON.stringify(product[0]));
    window.location.href = 'checkout.html';
  }