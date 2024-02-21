function BindProducts(){
    for(var i=0 ; i < products.length; i++){
        $("#products-list").append("<div class='product-item'><a href='#'><article><div class='product-item-image'><img src='assets/images/new/"
        +products[i].image + "'alt='" + products[i].title +"'/><h5 class='product-item-title'>" +products[i].title +
        "</h5><div class=product-item-price><span><p>" + products[i].price_title + "</p></span><div><button id='addbas' onclick='addBasket("+products[i].id+
        ")'><i class='fa-solid fa-cart-plus fa-lg' style='color: #ff5c39;'></i></button></div></div></article></a></div>");


}
}




