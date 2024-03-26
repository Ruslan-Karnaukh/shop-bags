const buttonsColor = document.getElementsByClassName('color_button')


for (const button of buttonsColor) {

   button.addEventListener('click', onChangeImgButton)
   function onChangeImgButton(e){

const targetImg = document.querySelector('.hero_img')
console.log(targetImg.src)
      const   onTargetButton = e.target.dataset.color
   switch (onTargetButton){

   case "black": 
      targetImg.src ='/src/images/bagBlack.png'
      break;
   
   case "pink": 
      targetImg.src ='/src/images/bagPink.png'
      break;

   case "grey": 
      targetImg.src ='/src/images/bagGrey.png'
      break;
   case "brown": 
      targetImg.src ='/src/images/bagBrown.png'
      break;
   case "red": 
      targetImg.src ='/src/images/bagRed.png'
      break;

   case "white": 
      targetImg.src ='/src/images/bagWhite.png'
      break;
   }

}}