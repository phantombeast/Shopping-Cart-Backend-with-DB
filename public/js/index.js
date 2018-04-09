let products = []

function getProducts(done) {
    $.get('/products', (data) => {
        products = data
        done()
    })
}

function postProduct(product, done) {
    $.post('/products', product, (data) => {
        getProducts(done)
    })
}

let cart={};

if(localStorage.getItem('cart')){
    cart=JSON.stringify(localStorage.getItem('cart'));
}

$(function () {
    function refreshProducts () {
        let tableBody = $('#product-table-body')
        tableBody.empty()

        let cartTotal=0;

        cartTotal=cartTotal+ (product.price * cart[product.id] || 0);

        for (product of products) {
            tableBody.append(
                `<tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>
        <span onclick="addToCArt(${product.id})">
         <i class="fas fa-plus"></i>
        </span>
        ${product.price * (cart[product.id] || 0)}          
        <span onclick="removeFromCart(${product.id})">
        <i class="fas fa-minus"></i>
        </span>
        </td>
        </tr>`
            )
        }
        tableBody.append(

            `
            <td id="product-table-row-total" colspan="4">TOTAL</td>
      <td>${cartTotal}</td>
            `
        )
    }

    window.addToCArt=function(id){

        if(cart[id]){
            cart[id]+=1;
        }
        else cart[id]=1;

        localStorage.setItem('cart',JSON.stringify(cart))
        refreshProducts();
    }

    window.removeFromCart=function(id){

        if(cart[id]==0){
            delete cart[id];
        }
        if(cart[id]){
            cart[id]=cart[id]-1;
        }
        refreshProducts()
    }

    getProducts(refreshProducts)


    $('#product-submit').click(function (e) {
        e.preventDefault()
        postProduct({
            name: $('#product-name').val(),
            price: $('#product-price').val()
        }, refreshProducts)
    })
})