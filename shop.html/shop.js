const data = [
    {
        id: 0,
        img: 'fff.png',
        name: '............',
        size: '...........',
        type: '..........',
        artistname: '............',
        price: 190,
        save: 190,
        delievery: 'In 5 days',
        itemInCart: false

    },
    {
        id: 1,
        img: 'fff.png',
        name: '..........',
        size: '..........',
        type: '.............',
        artistname: '............',
        price: 190,
        save: 190,
        delievery: 'In 6 days',
        itemInCart: false
    },
    {
        id: 2,
        img: 'fff.png',
        name: '.........',
        size: '.......',
        type: '.........',
        artistname: '..........',
        price: 190,
        save: 190,
        delievery: 'In 7 days',
        itemInCart: false
    },
    {
        id: 3,
        img: 'fff.png',
        name: '........',
        size: '....',
        type: '....',
        artistname: '.......',
        price: 190,
        save: 190,
        delievery: 'In 8 days',
        itemInCart: false
    },
];
var cartList = [];
var carte = document.getElementById('carte');
carte.addEventListener('click', displayCart)

var noti = document.getElementById('noti');
noti.addEventListener('click', displayNoti)

var item = document.querySelectorAll('.item');

var detail = document.getElementById('detail');

var detBack = document.getElementById('detail-back')
detBack.addEventListener('click', home);

var cartBack = document.getElementById('cart-back')
cartBack.addEventListener('click', carthome);

var empcartBack = document.getElementById('empcart-back')
empcartBack.addEventListener('click', empcarthome);

var detBay = document.getElementById('detail-bay')
detBay.addEventListener('click', bay);



var detCart = document.getElementById('detail-cart')
detCart.addEventListener('click', () => addToCart(getId));
var g = document.getElementById('countnum')
detCart.addEventListener('click', countnum)

document.addEventListener('click', (e) => {
    if (e.target.id == 'remove') {
   
        removeCart()
    }
})



for (i = 0; i <= data.length; i++) {

    item[i].addEventListener('click', displayDet)
}
var getId;
function displayNoti() {


}
function displayDet() {
    document.getElementById('detail').style.display = "block";
    document.getElementById('six-block').style.display = "none";
    getId = this.id
    console.log(getId)

    var detImg = document.getElementById('detail-img')
    detImg.src = data[getId].img;

    var detNam = document.getElementById('detail-name')
    detNam.innerHTML = data[getId].name;

    var detSiz = document.getElementById('detail-size')
    detSiz.innerHTML = data[getId].size;

    var detTyp = document.getElementById('detail-type')
    detTyp.innerHTML = data[getId].type;

    var detArtNam = document.getElementById('detail-artist-name')
    detArtNam.innerHTML = data[getId].artistname;

    var detMrp = document.getElementById('detail-mrp')
    detMrp.innerHTML = data[getId].mrp;

    var detDel = document.getElementById('detail-delivery')
    detDel.innerHTML = data[getId].delievery;




}
function home() {
    var c = document.getElementById('detail')
    c.style.display = 'none'
    document.getElementById('six-block').style.display = "block";
}
function carthome() {
    var c = document.getElementById('detail')
    c.style.display = 'none'
    document.getElementById('six-block').style.display = "block";
    document.getElementById('cart-notempty').style.display = "none"
}
function empcarthome() {
    var c = document.getElementById('detail')
    c.style.display = 'none'
    document.getElementById('six-block').style.display = "block";
    document.getElementById('cart-empty').style.display = "none"

}
function bay() {
    alert('ouy bay now portal is under mentanance to place order plese whatsapp msg on 6267064847')

}
function addToCart(id) {

    if (!data[id].itemInCart) {

        cartList = [...cartList, data[id]];

        console.log(cartList)

        // alert('item added to cart')
        clickAdd()

    }
    else {
        alert('your item is already there')
    }

    data[id].itemInCart = true


}
function displayCart() {
    document.getElementById('six-block').style.display = "none";
    document.getElementById('detail').style.display = 'none'
    document.getElementById('cartCon').style.display = 'block'
    if (cartList == 0) {
        console.log(cartList)
        document.getElementById('cart-empty').style.display = "block";
        document.getElementById('cart-notempty').style.display = "none";
    }

    else {
        var y = document.getElementById('cart-notempty').style.display = "inline";

        document.getElementById('cart-empty').style.display = "none"
        y.innerHTML++;
        console.log(y)
    }

}

var totalAmount;
var toalItem;
var TotalSave;


function clickAdd() {

    totalAmount = 0;
    totalItems = 0;
    totalSaving = 0
    var z = document.getElementById('item-body');
    z.innerHTML = ' '
    cartList.map((cart) => {

        var cartContee = document.getElementById('item-body');
        totalAmount = totalAmount + cart.price;
        totalSaving = totalSaving + cart.save;
        totalItems = totalItems + 1;

        var tempCart = document.createElement('div')
        tempCart.setAttribute('class', 'cart-listee');

        var listImg = document.createElement('img');
        listImg.setAttribute('id', 'list-imgee');
        listImg.src = cart.img
        tempCart.appendChild(listImg)

        var listName = document.createElement('h3');
        listName.setAttribute('class', 'list-nameee');
        listName.innerHTML = cart.delievery;
        tempCart.appendChild(listName)

        var listPay = document.createElement('h3');
        listPay.setAttribute('class', 'payee');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);

        var listQuantity = document.createElement('h3');
        listQuantity.setAttribute('class', 'quantityee');
        listQuantity.innerHTML = '1';
        tempCart.appendChild(listQuantity);

        var listTrash = document.createElement('i');
        listTrash.setAttribute('class', 'fa fa-trash ');
        listTrash.setAttribute('id', 'remove');
        tempCart.appendChild(listTrash);

        cartContee.appendChild(tempCart)
    })
    document.getElementById('qq').innerHTML = 'Total Amount : $ ' + totalAmount;
    document.getElementById('tt').innerHTML = 'Total Items : ' + totalItems;
    document.getElementById('aa').innerHTML = 'You Saved : $ ' + totalSaving;
    document.getElementById('cart-total').style.display = "block";
}
function countnum() {
    g.innerHTML++;
}
function removeCart() {
    data[getId].itemInCart = false
    cartList = cartList.filter((list) => list.id != getId);
        
        if (cartList.length == 0) {
            document.getElementById('cart-notempty').style.display = "none";
            document.getElementById('cart-empty').style.display = "block";
        }
        clickAdd()
       
    }

