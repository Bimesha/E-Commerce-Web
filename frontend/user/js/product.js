const categories = {
    chair:{
        title: "CHAIR COLLECTION",
        description: "Explore our stylish and comfortable chairs designed to complement any space",
        image1: "../assets/product-img/chair-collection.png",
        image2: "../assets/product-img/product-1.png"

    },
    table:{
        title: "TABLE COLLECTION",
        description: "Discover functional and elegant tables and add versatility and charm to your home or office",
        image1: "../assets/product-img/table-collection.png",
        image2: "../assets/product-img/product-1.png"
    },
    sofa:{
        title: "SOFA COLLECTION",
        description: "Browse through our luxurious sofas, perfect for relaxing and enhancing your living space",
        image1: "../assets/product-img/sofa-collection.png",
        image2: "../assets/product-img/product-1.png"
    }
};

function updateProductPage(){
    const hash = window.location.hash.substring(1);
    const product = categories[hash];

    if (product) {
        document.getElementById('productPage').textContent = product.title;
        document.getElementById('pageDescription').textContent = product.description;
        document.getElementById('productPageImage').src = product.image1;
        document.getElementById('productImage2').src = product.image2;
    } else {
        
    }
}


window.onload = updateProductPage;

window.onhashchange = updateProductPage;

