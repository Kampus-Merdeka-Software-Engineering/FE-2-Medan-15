const products = [
    {
        id: 'rooms1',
        name: 'Jelaja Hotel Room',
        image: 'image/r1.jpg',
        price: '899,000',
    },
    {
        id: 'rooms2',
        name: 'Jelaja Hotel Twin Bedroom',
        image: 'image/r2.jpg',
        price: '999,000',
    },
    {
        id: 'rooms3',
        name: 'Jelaja Hotel Superior Room',
        image: 'image/r3.jpg',
        price: '1,499,000',
    },
    {
        id: 'rooms4',
        name: 'Jelaja Hotel Suite Room',
        image: 'image/r4.jpg',
        price: '2,499,000',
    },
    {
        id: 'rooms5',
        name: 'Jelaja Hotel Terrace Room',
        image: 'image/r5.jpg',
        price: '1,799,000',
    },
    {
        id: 'rooms6',
        name: 'Jelaja Hotel Luxurious Room',
        image: 'image/r6.jpg',
        price: '1,899,000',
    },
];

// Function to set default values for productName and productPrice
function setProductInfo() {
    // Assuming you want to set the values for the first product in the array
    const product = products[0];

    // Set the default values to the respective input fields
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
}

// Call the function when the page loads
window.onload = setProductInfo;
