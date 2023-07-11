// libreria del cursor
new kursor({
  type:1 ,
})

// variables 


const buttonsMenu= document.querySelector ('.buttons-menu')
const services= document.querySelector ('.services')
const portfolio = document.querySelector ('.portfolio')
const aboutMe= document.querySelector ('.about-me')
const windowBackgroun = document.querySelector('#windowBackground'),
 popUp = document.querySelector('#popup'),
 linkInfo = document.querySelector('#linkarticle1'),
 buttonClosePopUp = document.querySelector('#buttonClose')
const windowBackgroun2 = document.querySelector('#windowBackground2'),
popUp2 = document.querySelector('#popup2'),
linkInfo2 = document.querySelector('#linkarticle2'),
buttonClosePopUp2 = document.querySelector('#icon-x2')
const windowBackgroun3 = document.querySelector('#windowBackground3'),
popUp3 = document.querySelector('#popup3'),
linkInfo3 = document.querySelector('#linkarticle3'),
buttonClosePopUp3 = document.querySelector('#icon-x3')
const windowBackgroun4 = document.querySelector('#windowBackground4'),
popUp4 = document.querySelector('#popup4'),
linkInfo4 = document.querySelector('#linkarticle4'),
buttonClosePopUp4 = document.querySelector('#icon-x4')
const myWork = document.querySelector('#myWork')
const menuMobile = document.querySelector('.menuM')
const buttonMenuMobile = document.querySelector('#menuMovileB')
const buttonMobile1 = document.querySelector('.button-menu-mobile1')
const buttonMobile2 = document.querySelector('.button-menu-mobile2')
const buttonMobile3 = document.querySelector('.button-menu-mobile3')
const buttonMobile4 = document.querySelector('.button-menu-mobile4')
const myWorkMobile = document.querySelector('#myWorkMobile')





//eventos

buttonsMenu.addEventListener('click', toggleActive1);
services.addEventListener('click', toggleActive2);
portfolio.addEventListener('click', toggleActive3);
aboutMe.addEventListener('click', toggleActive4);
myWork.addEventListener('click', Work);

// popUps

linkInfo.addEventListener('click', () =>{
  windowBackgroun.style.display = 'flex'
})

buttonClosePopUp.addEventListener('click',()=> clouseWindow())

const clouseWindow = ()=>{
  popUp.classList.add('close')

  setTimeout(()=>{
    popUp.classList.remove('close')
    windowBackgroun.style.display = 'none'
  },1000)
}

// pop up 2

linkInfo2.addEventListener('click', ()=> {
  windowBackgroun2.style.display = 'flex'
})

buttonClosePopUp2.addEventListener('click', () => clouseWindow2())


const clouseWindow2 = ()=>{
  popUp2.classList.add('close')

  setTimeout(()=>{
    popUp2.classList.remove('close')
    windowBackgroun2.style.display = 'none' 
  },1000)

}
linkInfo3.addEventListener('click', ()=> {
  windowBackgroun3.style.display = 'flex'
})

buttonClosePopUp3.addEventListener('click', () => clouseWindow3())


const clouseWindow3 = ()=>{
  popUp3.classList.add('close')

  setTimeout(()=>{
    popUp3.classList.remove('close')
    windowBackgroun3.style.display = 'none' 
  },1000)

}

//funciones

function toggleActive1 (){
  buttonsMenu.classList.add('active')
  if(toggleActive1){
    services.classList.remove('active')
    portfolio.classList.remove('active')
    aboutMe.classList.remove('active')

  }
}
function toggleActive2 (){
  services.classList.add('active')
  if(toggleActive2){
    buttonsMenu.classList.remove('active')
    portfolio.classList.remove('active')
    aboutMe.classList.remove('active')
  }
}
function toggleActive3 (){
  portfolio.classList.add('active')
  if(toggleActive3){
    buttonsMenu.classList.remove('active')
    services.classList.remove('active')
    aboutMe.classList.remove('active')
    
  }
}
function toggleActive4 (){
  aboutMe.classList.add('active')
  if(toggleActive4){
    buttonsMenu.classList.remove('active')
    services.classList.remove('active')
    portfolio.classList.remove('active')
  }
}
function Work (){
  var seccion = document.getElementById('seccionTres')

  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}



// programacion de menu mobil
buttonMenuMobile.addEventListener('click', ()=>{
  menuMobile.classList.toggle('inactive')
})

buttonMobile2.addEventListener('click', () =>{
  buttonMobile2.classList.add('activeMenu')
  menuMobile.classList.add('inactive')
  let work2 = document.getElementById('seccionDos')
  if(work2){
    work2.scrollIntoView({behavior: "smooth", block: "start"});
  }
  if(buttonMobile2){
    buttonMobile1.classList.remove('activeMenu')
    buttonMobile3.classList.remove('activeMenu')
    buttonMobile4.classList.remove('activeMenu')
  }
})

buttonMobile3.addEventListener('click', () =>{
  buttonMobile3.classList.add('activeMenu')
  menuMobile.classList.add('inactive')
  let work3 = document.getElementById('seccionTres')
  if(work3){
    work3.scrollIntoView({behavior: "smooth", block: "start"});
  }
  if(buttonMobile3){
    buttonMobile2.classList.remove('activeMenu')
    buttonMobile1.classList.remove('activeMenu')
    buttonMobile4.classList.remove('activeMenu')


  }
})

buttonMobile4.addEventListener('click', () =>{
  buttonMobile4.classList.add('activeMenu')
  menuMobile.classList.add('inactive')
  let work3 = document.getElementById('seccionTres')
  if(work3){
    work3.scrollIntoView({behavior: "smooth", block: "start"});
  }
  if(buttonMobile4){
    buttonMobile2.classList.remove('activeMenu')
    buttonMobile1.classList.remove('activeMenu')
    buttonMobile3.classList.remove('activeMenu')
  }
})
buttonMobile1.addEventListener('click', () =>{
  buttonMobile1.classList.add('activeMenu')
  menuMobile.classList.add('inactive')
  let work1 = document.getElementById('seccionUno')
  if(work1){
    work1.scrollIntoView({behavior: "smooth", block: "start"});
  }
  if(buttonMobile1){
    buttonMobile2.classList.remove('activeMenu')
    buttonMobile3.classList.remove('activeMenu')
    buttonMobile4.classList.remove('activeMenu')
  }
})

myWorkMobile.addEventListener('click', ()=> {
  let work5 = document.getElementById('seccionTres');
  if(work5){
    work5.scrollIntoView({behavior: 'smooth', block:'start'})
  }
})