const iphonesColors = {
    White: "./assets/img/silver.png",
    SpaceGrey: "./assets/img/spacegray.png"
}
const colo = {
    White: 'White'
}

let btn = document.querySelectorAll('button[data-apple]')

let macBook = document.querySelector(".img")

let items = document.querySelectorAll('button[data-apple]')

let text = document.querySelector('.blue')

let pri = document.querySelectorAll('button[data-p]')

let  txt = document.querySelector(".price")

btn.forEach(btn => {
    btn.onclick = () => {

        let key = btn.innerHTML
        macBook.style.backgroundImage = `url(${iphonesColors[key]})`
        items.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
        text.innerHTML = [key]
       
    }
})

let prices = document.querySelectorAll('.item')


// pri.forEach(item => {
//             btnn.onclick = () => {
//                 prices.forEach(el => el.classList.remove('active'))
//                 btnn.classList.add('active')
                
//             }
//         })
//     }
// )
pri.forEach(item => {
    item.onclick = () => {
        price(item.getAttribute('data-p'))
        prices.forEach(btnn => {
             prices.forEach(el => el.classList.remove('active'))
             item.classList.add('active') 
            })
    }
});

    function price(pri) {
        if (pri === '0') {
            txt.innerHTML = '$1,999'
        } else if (pri === '200') {
            txt.innerHTML = '$2,199'
        } else if (pri === '600') {
            txt.innerHTML = '$2,399'
        } else if (pri === '1200') {
            txt.innerHTML = '$3,199'
        }
    }
