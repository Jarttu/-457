let points = 0;
let pps_ = 0;
let gencost = 30;
let basketupgcost = 50;
let genown = 0;
let ppc = 1;

const ppselement = document.getElementById('pps')
const gencost_element = document.getElementById('gen_cost')
const basketupgcost_element = document.getElementById('basket_upgcost')
const genown_element = document.getElementById('gen_own')
const buygen_btn = document.getElementById('buy_gen')
const basketupg_btn = document.getElementById('basket_upg')
const outputElement = document.getElementById('output')

document.getElementById('clicker').addEventListener('click', (event) => {
    event.preventDefault()
    clickfunction()
});

function clickfunction(){
    points += ppc;
    output()
}

function output(){
    outputElement.textContent = ""

    const image = document.createElement('img');
    
    image.src = 'kapykauhistus.png'
    image.alt = 'pistekapy'
    image.className = 'kapykuva2'
    outputElement.appendChild(image)
    
    const teksti = document.createElement('span')
    teksti.textContent = `: ${points}`
    outputElement.appendChild(teksti)
}

function display(){
    ppselement.textContent = pps_
    gencost_element.textContent = gencost
    basketupgcost_element.textContent = basketupgcost
    genown_element.textContent = genown

    buygen_btn.disabled = points < gencost
    basketupg_btn.disabled = points < basketupgcost
}

function generatorpoints(){
    points += pps_
    output()
    display()
}

buygen_btn.addEventListener('click', () =>{
    if (points >= gencost){
        points -= gencost
        genown += 1
        pps_ += 1

        gencost = Math.floor(gencost * 1.8)

        output()
        display()
    }
})

basketupg_btn.addEventListener('click', () => {
    if (points >= basketupgcost){
        points -= basketupgcost
        ppc += 1

        basketupgcost = Math.floor(basketupgcost * 1.5)

        output()
        display()
    }
})

setInterval(generatorpoints, 1000)

output()
display()