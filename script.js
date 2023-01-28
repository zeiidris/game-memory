const imgs = [{id: 0 ,name: "javascript",img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png' ,
},{id:1, name: "css3",
    img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
},{
    id:2,
    name:"html5",
    img:'https://img.freepik.com/free-icon/html5_318-903450.jpg',
},{
    id:3,
    name: "safari",
    img:'https://res.cloudinary.com/henryzarza/image/upload/v1601735663/General%20assets/safari_mw13q8.png',
},{
    id:4,
    name: "rails",
    img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png',
},{
    id:5,
    name: "node",
    img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png',
},{
    id:6,
    name: "react",
    img: 'https://res.cloudinary.com/henryzarza/image/upload/v1601735662/General%20assets/react_m1pmwj.png',
},{
    id:7,
    name: "angular",
    img:'https://res.cloudinary.com/henryzarza/image/upload/v1601735662/General%20assets/angular_qqblks.png',
},{
    id:8,
    name:"python",
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png',
},{
    id:9,
    name:"java",
    img:"https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
},{
    id:10,
    name:"c++",
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png',
}
,{
    id:11,
    name:'c#',
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
}]
const boxes = document.querySelectorAll('.box')
const time = document.getElementById('time')
const loser = document.getElementById('loser')
const numbers = []
let num = 0
let clicks = 0
const urls = []
let timer = 120
let playable = true
if(playable){
boxes.forEach(box => {
    num++
    if(num > imgs.length){
        numbers.splice(0)
        num = 0
    }
    const box2 = document.createElement('div')
    box2.classList.add('clicked')
    const random = selectRandom()
    box2.style.backgroundImage = `url('${imgs[random].img}')`
    box.appendChild(box2)
   /*  box.setAttribute('name',imgs[random].name)
    box2.setAttribute('id',imgs[random].id) */
    /* boxes */
    box.addEventListener('click',(e)=>{
        urls.push(imgs[random].img)
        box.classList.add('rotate')
        box.setAttribute('name','clicked')
        box2.setAttribute('value','clicked')
        setTimeout(() => {
            box2.style.opacity = 1
        }, 900);
        clicks++
        if(clicks >= 2){
            if(urls[0] != urls[1]){
                const boxes = document.querySelectorAll('[name = clicked')
                const InsideBoxes = document.querySelectorAll(`[value = clicked]`)
                setTimeout(() => {
                    InsideBoxes.forEach(box => box.style.opacity = 0)
                   boxes.forEach(box => box.classList.remove('rotate'))
                   boxes.forEach(box => box.removeAttribute('name'))
                   InsideBoxes.forEach(box => box.removeAttribute('value'))
                    
                }, 1500);
            }else{
                const boxes = document.querySelectorAll('[name = clicked')
                boxes.forEach(box => box.setAttribute('name', imgs[random].name))
                const InsideBoxes = document.querySelectorAll(`[value = clicked]`)
                InsideBoxes.forEach(box => box.setAttribute('value', imgs[random].id))
            }
            clicks = 0
            urls.splice(0)
           
        }
    })
   
})}
function selectRandom(){
    let random = Math.floor(Math.random()*imgs.length);
    while (true){
        if(numbers.includes(random)){
            random = Math.floor(Math.random()*imgs.length); 
        }else{
            numbers.push(random)
            break
        }
    }
    return random
}
function gameTime(){
   const tiger= setInterval(() => {
        time.innerHTML = `${timer} s`
        timer = timer - 1
        if(timer == -1){
            loser.style.display = "block"
            playable = false
            clearInterval(tiger)
        }
    }, 1000);
   
    }
gameTime()