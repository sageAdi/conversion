// Selecting new Image
const openNav = document.querySelector('#open-nav');
const openImage = document.querySelector('#open-image');
const loadImage = new Image();
openNav.addEventListener('click', () => {
   openImage.click();
});

const img = document.querySelector('#img');
const canvasContainer = document.querySelector('.canvas-container');
openImage.addEventListener('change', () => {
   const file = openImage.files[0];
   if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', function () {
         loadImage.src = this.result;
      });
      loadImage.onload = () => {
         img.src = loadImage.src;
         let x = -(img.width - canvasContainer.offsetWidth) / 2 + 'px';
         let y = -(img.height - canvasContainer.offsetHeight) / 2 + 'px';
         let ratio = 0;
         if (canvasContainer.offsetWidth < img.width)
            ratio = canvasContainer.offsetWidth / img.width;
         else ratio = img.width / canvasContainer.offsetWidth;
         img.style.transform = `translate(${x},${y}) scale(${ratio})`;
         // Caman('#img', function () {
         //    this.brightness(10);
         //    this.contrast(30);
         //    this.sepia(60);
         //    this.saturation(-30);
         //    this.render();
         // });
         
      };
   } else {
   }
});
//Rotate right
const rotateRight = document.querySelector('.rotate-right');
rotateRight.addEventListener('click', () => {
   img.style.transform = 'rotate(90deg)';
});
//Rotate left
const rotateLeft = document.querySelector('.rotate-left');
rotateLeft.addEventListener('click', () => {
   img.style.transform = 'rotate(-90deg)';
});
//Flip Horizontal
const flipHorizontal = document.querySelector('.flip-horizontal');
flipHorizontal.addEventListener('click', () => {
   img.style.transform = 'scaleX(-1)';
});
//Flip Horizontal
const flipVertical = document.querySelector('.flip-vertical');
flipVertical.addEventListener('click', () => {
   img.style.transform = 'scaleY(-1)';
});
//Temperature change
const temperature = document.querySelector('#temperature');
temperature.addEventListener('click', () => {
   Caman('#img', function(){
      console.log(temperature.value);
      this.brightness(temperature.value);
      this.render();
   });
});