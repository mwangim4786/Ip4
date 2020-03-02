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


$(function(){
    $('#hawBtn').click(function(){
        $(".flex-container").empty();
        $('.flex-container').append(' <h3>Hawaiian </h3>'+
        ' <div class="row">'+
        '<div class="col-md-4">'+

        '<div class="items border">'+
            '<div><img src="images/hawaii.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Large Hawaaian" priceData = "1500">'+
                '<button class = "block" id="chicBtn">Large Haawaian <br> Ksh 1500</button></a></div>'+
        '</div>'+

        '</div>'+

        '<div class="col-md-4">'+

            '<div class="items border">'+
                '<div><img src="images/hawaii.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Medium Hawaaian" priceData = "1000">'+
                '<button class = "block" id="hawaiBtn">Medium Haawaian <br> Ksh 1000</button></a></div>'+
                '</div>'+
            
            '</div>'+

            '<div class="col-md-4">'+

                '<div class="items border">'+
                    '<div><img src="images/hawaii.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Small Hawaaian" priceData = "500">'+
                '<button class = "block" id="vegBtn">Small Haawaian <br> Ksh 500 </button></a></div>'+
                '</div>'+
                
                '</div>'+

    '</div>'+

                '<h6>Select Your Toppings </h6>'+
                    '<div class="row tops">'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Mushrooms" priceData = "300">'+
                    '<button class = "block1" style = "background: url(images/top1.png); background-size: cover;" id="chicBtn">Mushrooms <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Bacon" priceData = "300">'+
                    '<button class = "block1" style = "background: url(images/top2.jpg); background-size: cover;" id="chicBtn">Bacon <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Cheese" priceData = "300">'+
                    '<button class = "block1" style = "background: url(images/top3.jpg); background-size: cover;" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '</div>'+

                    '<h6>Select Your Crust </h6>'+
                '<div class="row tops">'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Crispy" priceData = "300">'+
                    '<button class = "block1"  id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Stuffed" priceData = "300">'+
                    '<button class = "block1" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '<div class="col-lg-3">'+
                    '<div><a class = "topsbtns addToCart" href="#" nameData = "Gluten Free" priceData = "300">'+
                    '<button class = "block1" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
                    '</div>'+
                    '</div>');
        





                    $(' .addToCart').click(function(event){
                        event.preventDefault();
                        var name = $(this).attr("nameData");
                        var price = Number($(this).attr("priceData"));
                
                        addToCart(name, price, 1);
                        displayCart();
                    });



                    $('#clearCart').click(function(event){
                        clearCart()
                        displayCart();
                    });
                    
                
                
                    // function displayCart(){
                    //     var cartArray = listCartItems();
                    //     var output = "";
                    //     for (var i in cartArray){
                    //         output += "<li>"+cartArray[i].name+" &nbsp &nbsp &nbsp  "+cartArray[i].price+ " &nbsp &nbsp &nbsp " +cartArray[i].noOfItems+"</li>"
                    //     };
                    //     $("#showCart").html(output);
                    //     $("#total").html( totalCart());
                    // };






    });





    $('#vegBtn').click(function(){
        $(".flex-container").empty();
        $('.flex-container').append(' <h3> Vegatable Feast </h3>'+
        ' <div class="row">'+
        '<div class="col-md-4">'+

        '<div class="items border">'+
            '<div><img src="images/veg.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Large Vegetable" priceData = "1500">'+
                '<button class = "block" id="chicBtn">Large Veg Feast <br> Ksh 1500</button></a></div>'+
        '</div>'+

        '</div>'+

        '<div class="col-md-4">'+

            '<div class="items border">'+
                '<div><img src="images/veg.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Medium Vegetable" priceData = "1000">'+
                '<button class = "block" id="hawaiBtn">Medium Veg Feast <br> Ksh 1000</button></a></div>'+
                '</div>'+
            
            '</div>'+

            '<div class="col-md-4">'+

                '<div class="items border">'+
                    '<div><img src="images/veg.jpg" alt=""></div>'+
            '<div class = "itemsBtn"><a class = "addToCart" href="#" nameData = "Small Vegetable" priceData = "500">'+
                '<button class = "block" id="vegBtn">Small Veg Feast <br> Ksh 500 </button></a></div>'+
                '</div>'+
                
                '</div>'+

    '</div>'+
    
    
    
    '<h6>Select Your Toppings </h6>'+
    '<div class="row tops">'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Mushrooms" priceData = "300">'+
    '<button class = "block1" style = "background: url(images/top1.png); background-size: cover;" id="chicBtn">Mushrooms <br> Ksh 300</button></a></div>'+
    '</div>'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Bacon" priceData = "300">'+
    '<button class = "block1" style = "background: url(images/top2.jpg); background-size: cover;" id="chicBtn">Bacon <br> Ksh 300</button></a></div>'+
    '</div>'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Cheese" priceData = "300">'+
    '<button class = "block1" style = "background: url(images/top3.jpg); background-size: cover;" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
    '</div>'+
    '</div>'+

    '<h6>Select Your Crust </h6>'+
'<div class="row tops">'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Crispy" priceData = "300">'+
    '<button class = "block1"  id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
    '</div>'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Stuffed" priceData = "300">'+
    '<button class = "block1" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
    '</div>'+
    '<div class="col-lg-3">'+
    '<div><a class = "topsbtns addToCart" href="#" nameData = "Gluten Free" priceData = "300">'+
    '<button class = "block1" id="chicBtn">Cheese <br> Ksh 300</button></a></div>'+
    '</div>'+
    '</div>');







    $(' .addToCart').click(function(event){
        event.preventDefault();
        var name = $(this).attr("nameData");
        var price = Number($(this).attr("priceData"));

        addToCart(name, price, 1);
        displayCart();
    });



    $('#clearCart').click(function(event){
        clearCart()
        displayCart();
    });
    

    // function displayCart(){
    //     var cartArray = listCartItems();
    //     var output = "";
    //     for (var i in cartArray){
    //         output += "<li>"+cartArray[i].name+" &nbsp &nbsp &nbsp "+cartArray[i].price+ " &nbsp &nbsp &nbsp " +cartArray[i].noOfItems+"</li>"
    //     };
    //     $("#showCart").html(output);
    //     $("#total").html( totalCart());
    // };






        
    });







































});