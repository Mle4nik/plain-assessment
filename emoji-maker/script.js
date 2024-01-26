// ----------------------------EMOJI-MAKER--------------------------------------------

const emoji = document.getElementById('emoji')

const skins = document.querySelectorAll('.skin')
const eyes = document.querySelectorAll('.eyes')
const mouth = document.querySelectorAll('.mouth')

skins.forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById('skin').outerHTML = `<img src=${`./assets/skin/${el.id.split('-')[0] + '.png'}`} name="skin" id="skin" />`
        document.getElementById('select-skin-card').style.display = 'none'
        document.getElementById('select-eyes-card').style.display = 'block'
    })
})

eyes.forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById('eyes').outerHTML = `<img src=${`./assets/eyes/${el.id.split('-')[1] + '.png'}`} name="eyes" id="eyes" />`
        document.getElementById('select-eyes-card').style.display = 'none'
        document.getElementById('select-mouth-card').style.display = 'block'
    })
})

mouth.forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById('mouth').outerHTML = `<img src=${`./assets/mouth/${el.id.split('-')[1] + '.png'}`} name="mouth" id="mouth" />`
    })
})


if (document.getElementById('select-skin-card')) {
    document.querySelectorAll('.next-step')[0].addEventListener('click', () => {
        document.getElementById('select-skin-card').style.display = 'none'
        document.getElementById('select-eyes-card').style.display = 'block'
    })
}

if (document.getElementById('select-eyes-card')) {
    document.querySelectorAll('.previous-step')[0].addEventListener('click', () => {
        document.getElementById('select-skin-card').style.display = 'block'
        document.getElementById('select-eyes-card').style.display = 'none'
    })
    document.querySelectorAll('.next-step')[1].addEventListener('click', () => {
        document.getElementById('select-eyes-card').style.display = 'none'
        document.getElementById('select-mouth-card').style.display = 'block'
    })
}

if (document.getElementById('select-mouth-card')) {
    document.querySelectorAll('.previous-step')[1].addEventListener('click', () => {
        document.getElementById('select-mouth-card').style.display = 'none'
        document.getElementById('select-eyes-card').style.display = 'block'
    })
}


// -------------------------MULTI-STEP-FORM--------------------------------------------



// ----------------------------QUIZZ-APP-----------------------------------------------

