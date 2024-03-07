
//     // Random hexa color generator
// const generator = () => {
// const randomNumber = Math.floor(Math.random()*1677215);
// const randomCode = `#${randomNumber.toString(16)}`
// document.body.style.backgroundColor = randomCode;
// const colorCode = document.querySelector('.color-code')
// colorCode.innerHTML = randomCode
// const btn = document.querySelector('.btn');
// btn.style.color = randomCode;
// }
 
// //event call
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', generator )

// //intial call
// generator()

window.onload = ()=>{
  main();
}

const main  = ()=>{
 const text = document.querySelector('.text');
 const button = document.querySelector('.btn');
 const colorCode = document.querySelector('.colorCode');
 const CopyBtn = document.querySelector('.copyBtn')

 button.addEventListener('click', () => {
    const bgcolor = generator();
  document.body.style.backgroundColor = bgcolor;
  colorCode.value= bgcolor;
  text.style.color = bgcolor;
 })

 CopyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(colorCode.value)
  const bgcolor = generator()
  CopyBtn.style.color = bgcolor;
 })
}



const generator = ()=>{
  const Red = Math.floor(Math.random()*255)
  const Blue = Math.floor(Math.random()*255)
  const Green = Math.floor(Math.random()*255)

  return `#${Red.toString(16)}${Blue.toString(16)}${Green.toString(16)}`
}


   

