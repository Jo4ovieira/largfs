window.onload = function typeWriter() {
    const content1 = document.getElementById('1')

    const type = content1.innerText.split('')

    content1.innerHTML = ''

    type.forEach((letra, i) => {
        setTimeout(() => content1.innerHTML += letra , 300 * i)
    })

    const content2 = document.getElementById('2')

    const type2 = content2.innerText.split('')

    content2.innerHTML = ''

    setTimeout(function(){
        type2.forEach((letra, i) => {
            setTimeout(() => content2.innerHTML += letra , 100 * i)
        })
    }, 9000)

    const content3 = document.getElementById('3')

    const type3 = content3.innerText.split('')

    content3.innerHTML = ''

    setTimeout(function(){
        type3.forEach((letra, i) => {
            setTimeout(() => content3.innerHTML += letra , 100 * i)
        })
    }, 29000)

    const content4 = document.getElementById('4')

    const type4 = content4.innerText.split('')

    content4.innerHTML = ''

    setTimeout(function(){
        type4.forEach((letra, i) => {
            setTimeout(() => content4.innerHTML += letra , 100 * i)
        })
    }, 44000)

    const content5 = document.getElementById('5')

    const type5 = content5.innerText.split('')

    content5.innerHTML = ''

    setTimeout(function(){
        type5.forEach((letra, i) => {
            setTimeout(() => content5.innerHTML += letra , 50 * i)
        })
    }, 56000)

    const content6 = document.getElementById('6')

    const type6 = content6.innerText.split('')

    content6.innerHTML = ''

    setTimeout(function(){
        type6.forEach((letra, i) => {
            setTimeout(() => content6.innerHTML += letra , 50 * i)
        })
    }, 64000)

    const content7 = document.getElementById('7')

    const type7 = content7.innerText.split('')

    content7.innerHTML = ''

    setTimeout(function(){
        type7.forEach((letra, i) => {
            setTimeout(() => content7.innerHTML += letra , 50 * i)
        })
    }, 76000)

    const content8 = document.getElementById('8')

    const type8 = content8.innerText.split('')

    content8.innerHTML = ''

    setTimeout(function(){
        type8.forEach((letra, i) => {
            setTimeout(() => content8.innerHTML += letra , 50 * i)
        })
    }, 80000)
}