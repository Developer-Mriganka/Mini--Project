// const rgbColorGenerate = ()=>{
//   const randomNumber = Math.floor(Math.random()*255);
//   document.body.style.backgroundColor = randomNumber;

// }

window.onload = () =>{
  main()
}

const main =()=>{
  const container = document.querySelector('.container');
  const btn = document.querySelector('.btn');
  const text = document.querySelector('.text')

  btn.addEventListener('click',()=>{
    const bgcolor = rgbColorGenerate()
    document.body.style.backgroundColor = bgcolor
     text.style.color = bgcolor
  })
}

const rgbColorGenerate = ()=>{
     const Red = Math.floor(Math.random()*255);
     const Blue = Math.floor(Math.random()*255);
     const Green = Math.floor(Math.random()*255);
     return `rgb(${Red},${Blue},${Green})` 
   }

const btn = document.querySelector('.btn');
btn.addEventListener('click',rgbColorGenerate)