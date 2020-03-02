var cart = [];

var Product = function(name, price, noOfItems){
    this.name = name;
    this.price = price;
    this.noOfItems = noOfItems;
};

function addToCart(name, price, noOfItems){
    for (var i in cart) {
        if (cart[i].name === name){
            cart[i].noOfItems += noOfItems;
            return;

        }
    }
    var item = new Product(name, price, noOfItems);
    cart.push(item);
} 