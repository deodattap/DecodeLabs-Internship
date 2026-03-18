var container = document.querySelector(".cart-items")

fetch("http://localhost:5000/products")
.then(function(res){
return res.json()
})
.then(function(data){

container.innerHTML=""

data.forEach(function(item){

container.innerHTML += `
<div class="cart-item grey-bg">
<img src="assets/product1.jpg">
<div class="item-details">
<h3>${item.name}</h3>
<p class="price">Rs. ${item.price}</p>

<div class="quantity">
<button class="minus">-</button>
<span>1</span>
<button class="plus">+</button>
</div>
</div>
</div>
`

})

})
.catch(function(){
container.innerHTML = "error loading data"
})