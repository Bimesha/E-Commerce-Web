const categories = {
    chair:{
        title: "CHAIR COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../../assets/product img/Chair collection.png",
        image2: "../../assets/product img/Product1.png"

    },
    table:{
        title: "TABLE COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../../assets/product img/Table collection.png",
        image2: "../../assets/product img/Product1.png"
    },
    sofa:{
        title: "SOFA COLLECTION",
        description: "hvghvhv hvuvgkjvhgjbvhjvghv hgv ghvkv bggvbyuvbghu ugvuigv",
        image1: "../../assets/product img/Sofa collection.png",
        image2: "../../assets/product img/Product1.png"
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
        document.getElementById('productPage-image').src= "../../assets/product img/Chair collection.png";
        
        document.getElementById('product-image2').src = product.image2;
    }
}

window.onload = updateProductPage;

window.onhashchange = updateProductPage;

