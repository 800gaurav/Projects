let icon = document.querySelector('.icon')
let ul = document.querySelector('ul');
let Home = document.getElementById('Home')

icon.addEventListener("click", () => {
    ul.classList.toggle("showdata")
    
})

let home = document.getElementById('home')
let shop = document.getElementById('shop')
let review = document.getElementById('review')
let blog = document.getElementById('blog')
let contact = document.getElementById('contact')

home.addEventListener('click', () => {
    home.style.color = "aqua"
    shop.style.color = "white"
    review.style.color = "white"
    blog.style.color = "white"
    contact.style.color = "white"

});
shop.addEventListener('click', () => {
    home.style.color = "white"
    shop.style.color = "aqua"
    review.style.color = "white"
    blog.style.color = "white"
    contact.style.color = "white"

});
review.addEventListener('click', () => {
    home.style.color = "white"
    shop.style.color = "white"
    review.style.color = "aqua"
    blog.style.color = "white"
    contact.style.color = "white"

});
blog.addEventListener('click', () => {
    home.style.color = "white"
    shop.style.color = "white"
    review.style.color = "white"
    blog.style.color = "aqua"
    contact.style.color = "white"

});
contact.addEventListener('click', () => {
    home.style.color = "white"
    shop.style.color = "white"
    review.style.color = "white"
    blog.style.color = "white"
    contact.style.color = "aqua"

})

let cards = document.querySelectorAll('.card')
let check = document.querySelectorAll('.check')
let itempage = document.querySelector('.itemPage')
let containar = document.querySelector('.containar')
let itemimg = document.getElementById('itemimg')
let buybtn = document.getElementById('buybtn')
let buypage = document.querySelector('.buypage')
let cross = document.querySelector('.cross')
let order = document.getElementById('order')


//          input select

let Name = document.getElementById('name')
let address = document.getElementById('address')
let tel = document.getElementById('tel')

cards.forEach((carvalue) => {
    carvalue.addEventListener("click", () => {
        containar.style.display = "none"
        itempage.style.display = "flex"
        let carimg = carvalue.firstElementChild.src
        itemimg.src = carimg

        buybtn.addEventListener("click", () => {
            buypage.style.display = "flex"
        })
        cross.addEventListener("click", () => {
            buypage.style.display = "none"
        })
        order.addEventListener("click", () => {
            if (address.value.trim() =="") {
                alert("plese enter your")
            }else if(Name.value.trim ==""){
                alert("plese enter your addres")
            }else if(tel.value.trim ==""){
                alert("plese enter your mobile number")
            }else{
                alert("your order has been placed")
                buypage.style.display="none"
            }
         
            })
           
        })
})