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

//********************************************** */



function removeItem(name){
    for(var i in cart){
        if(cart[i].name === name){
            cart[i].noOfItems --;
            if(cart[i].noOfItems === 0){
                cart.splice(i, 1)
            };
            return;
        };
    };
};
