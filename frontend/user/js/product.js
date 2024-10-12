const categories = {
    chair:{
        title: "CHAIR COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../assets/product-img/chair-collection.png",
        image2: "../assets/product-img/product1.png"

    },
    table:{
        title: "TABLE COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../assets/product-img/table-collection.png",
        image2: "../assets/product-img/product1.png"
    },
    sofa:{
        title: "SOFA COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../assets/product-img/sofa-collection.png",
        image2: "../assets/product-img/product1.png"
    }
};

function updateProductPage(){
    const hash = window.location.hash.substring(1);
    const product = categories[hash];

    if (product) {
        document.getElementById('product-page').textContent = product.title;
        document.getElementById('page-description').textContent = product.description;
        document.getElementById('productPage-image').src = product.image1;
        document.getElementById('product-image2').src = product.image2;
    } else {
        document.getElementById('product-page').textContent = product.chair.title;
        document.getElementById('productPage-image').src= "../assets/product-img/chair-collection.png";
        
        document.getElementById('product-image2').src = product.image2;
    }
}

window.onload = updateProductPage;

window.onhashchange = updateProductPage;

