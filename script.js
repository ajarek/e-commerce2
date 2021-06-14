const PRODUCTS = document.querySelector('.bestProducts')
const CART = document.querySelector('.cart')
const SUM = document.querySelector('.total')
const BTN = document.querySelector('.footer button')
let arrNew = []
let arrNr = []
let total = []

const headphones = [{
        id: 1,
        name: 'model 1',
        srcImg: `img/blue.png`,
        price: 100,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,

    },
    {
        id: 2,
        name: 'model 2',
        srcImg: `img/red1.png`,
        price: 110,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
`
    },
    {
        id: 3,
        name: 'model 3',
        srcImg: `img/green.png`,
        price: 120,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,
    },
    {
        id: 4,
        name: 'model 4',
        srcImg: `img/yellow.png`,
        price: 130,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
`,
    },
    {
        id: 5,
        name: 'model 5',
        srcImg: `img/black.png`,
        price: 95,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,

    },
    {
        id: 6,
        name: 'model 6',
        srcImg: `img/orange.png`,
        price: 115,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
`
    },
    {
        id: 7,
        name: 'model 7',
        srcImg: `img/silver.png`,
        price: 124,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,
    },
    {
        id: 8,
        name: 'model 8',
        srcImg: `img/violet.png`,
        price: 132,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
`,
    }
]

class Items {
    constructor(id, name, srcImg, price, star) {
        this.id = id
        this.name = name
        this.srcImg = srcImg
        this.price = price
        this.price = star
        this.CreateProduct()
        this.selectProduct()
    }

    CreateProduct() {
        headphones.forEach(el => {
            const product = document.createElement('div')
            product.classList.add('product')
            product.innerHTML = ` <img src="${el.srcImg}" alt="" id="${el.id}">
            <p>${el.name}</p>
            <span>$${el.price}</span>
            <div>${el.star}</div>`
            PRODUCTS.appendChild(product)
        })
    }

    selectProduct() {
        const products = document.querySelectorAll('.product img')
        const wrap = document.querySelector('.wrap')

        products.forEach(prod => prod.addEventListener('click', (e) => {
            BTN.style.display = 'none'
            PRODUCTS.classList.add('active')
            let x = e.target.id;
            const divNew = document.createElement('div')
            divNew.classList.add('activProducts')
            divNew.innerHTML = `
        
            <img src=${headphones[x-1].srcImg} alt="" id=${headphones[x-1].id}>
            <p>${headphones[x-1].name}</p>
            <span>$${headphones[x-1].price}</span>
            <div class="stars"> ${headphones[x-1].star}</div>
            
            <input type="number" name="" id="number" placeholder="how many? " min="1" max="99" step="1" value="1"
            onkeydown="javascript: return event.keyCode == 69||event.keyCode==109||event.keyCode==107||event.keyCode==110||event.keyCode==190||event.keyCode==189||event.keyCode==187||event.keyCode==188 ? false : true">
            <button type="submit" id="carts" onclick="addCart()">Add to cart</button>
            <button  id="back" onclick="reversion()" ><i class="fas fa-long-arrow-alt-left"></i></button><span class="info"></span>`
            wrap.appendChild(divNew)
        }))
    }
}

const item = new Items()

const showCart = () => {
    PRODUCTS.classList.toggle('active')
    CART.classList.toggle('active1')
}

function reversion() {
    const wrapBest = document.querySelector('.wrap .bestProducts')
    const wrapActiv = document.querySelectorAll('.wrap .activProducts')
    BTN.style.display = 'block'
    wrapBest.classList.remove('active')
    wrapActiv.forEach(el => el.classList.add('active'))
}

const addCart = () => {
    const number = document.querySelectorAll('#number')
    const info = document.querySelector('.info')
    const activProducts = document.querySelectorAll('.activProducts img')
    activProducts.forEach(el => {
        let ar = el.id
        arrNew.unshift(ar)
    })
    number.forEach(nr => {
        let howMuch = parseInt(nr.value)
        if (howMuch <= 0 || howMuch > 99 || String(howMuch) === 'NaN') {
            info.innerHTML = `quantity>0 quantity<100`
            setTimeout("window.location.reload()", 2000)
        }
        if (howMuch > 0) {
            arrNr.unshift(howMuch)
        }
    })

    const register = document.createElement('li')
    register.setAttribute('data-all', arrNr[0] * headphones[arrNew[0] - 1].price)
    register.innerHTML = `<img src=${headphones[Number(arrNew[0])-1].srcImg} alt=""}> ${headphones[Number(arrNew[0])-1].name} $${headphones[Number(arrNew[0])-1].price} ${arrNr[0]}szt.  <i class="fas fa-times" style="color:red">`
    CART.appendChild(register)

    total.push(arrNr[0] * headphones[arrNew[0] - 1].price)
    const newTotal = total.reduce((acu, value, index, arr) => (acu + value))
    SUM.innerHTML = `together to pay: <b>${newTotal} $</b>`
    howMuch = 0
    del()
}

const del = () => {
    const delList = document.querySelectorAll('.cart i')
    let warehouse = []
    delList.forEach((dl, index) => {
        dl.addEventListener('click', (e) => {

            e.target.parentNode.remove(e)
            let actual = -Number(e.target.parentNode.dataset.all)
            warehouse.push(actual)
            let newArr = total.concat(warehouse)
            SUM.innerHTML = `together to pay: <b>${Number(newArr.reduce((a, b) => a + b, 0))} $</b>`
        })
    })
}
const pay=()=>{setTimeout("window.location.reload()", 500) }

BTN.addEventListener('click', showCart)