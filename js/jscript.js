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


/******************************************** */


function removeItemAll(name){
    for(var i in cart){
        if(cart[i].name === name){
            cart.splice(i, 1);
            return;
        }
    }
};




function clearCart(){
    cart = [];
}

//*************************************************** */    


function countCart(){
    var totalItemsCount = 0;
    for(var i in cart){
        totalItemsCount += cart[i].noOfItems;
    };
    return totalItemsCount;
};




//************************************************ */


function totalCart(){
    totalCartCosts = 0;
    for(var i in cart){
        totalCartCosts += cart[i].price * cart[i].noOfItems;
    };
    return totalCartCosts;
};

//************************************************ */


function listCartItems(){
    var cartCopy = [];
    for(var i in cart){
        var item  = cart[i];
        var itemCopy = {};
        for (var p in item){
            itemCopy[p] = item[p];
        };
        cartCopy.push(itemCopy);
    };
    return cartCopy;
};

function displayCart(){
    var cartArray = listCartItems();
    var output = "";
    for (var i in cartArray){
        output += "<li>"+cartArray[i].name+" &nbsp &nbsp &nbsp "+cartArray[i].price+ " &nbsp &nbsp &nbsp " +cartArray[i].noOfItems+"</li>"
    };
    $("#showCart").html(output);
    $("#total").html( totalCart());
   
};