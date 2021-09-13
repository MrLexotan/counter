let number = 0
let value = document.querySelector('#number')

function increase() {
    number += 1
    value.innerText = number

    if (number > 0) {
        value.style.color = '#50C878';
        console.log('verde')
    }

     if (number === 0) {
        value.style.color = '#252525';
        console.log('preto')
    }

    else if (number < 0) {
        value.style.color = '#f9265e';
        console.log('vermelho')
    }

}

function decrease() {
    number -= 1
    value.innerText = number

    if (number > 0) {
        value.style.color = '#50C878';
        console.log('verde')
    }

    if (number === 0) {
        value.style.color = '#252525';
        console.log('preto')
    }

    else if (number < 0) {
        value.style.color = '#f9265e';
        console.log('vermelho')
    }
}

function zero() {
    number = 0
    value.innerText = number

    if (number > 0) {
        value.style.color = '#50C878';
        console.log('verde')
    }

    if (number === 0) {
        value.style.color = '#252525';
        console.log('preto')
    }

    else if (number < 0) {
        value.style.color = '#f9265e';
        console.log('vermelho')
    }
}




