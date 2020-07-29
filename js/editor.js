const openNav = document.querySelector('#open-nav');
const openImage = document.querySelector('#open-image');
const loadImage = new Image();
const canvas = document.querySelector('#canvas-img');
const context = canvas.getContext('2d');
openNav.addEventListener('click', () => {
   openImage.click();
});

const img=document.querySelector("#img");
const canvasConatiner= document.querySelector(".canvas-container");
img.onload = function(){
   let x = (img.width- canvasConatiner.offsetWidth)/2;
   let y = (img.height- canvasConatiner.offsetHeight)/2;
   console.log(x + " "+ y)
   let ratio = canvasConatiner.offsetWidth/img.width;
   console.log(ratio)
   img.style.transform = "scale(${ratio})"
}

openImage.addEventListener('change', () => {
   const file = openImage.files[0];
   if (file) {
      context.clearRect(0, 0, 800, 600);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', function () {
         loadImage.src = this.result;
      });
      loadImage.onload = () => {
         canvas.height = canvas.width * (loadImage.height / loadImage.width);
         var oc = document.createElement('canvas'),
            octx = oc.getContext('2d');
         oc.width = loadImage.width * 0.5;
         oc.height = loadImage.height * 0.5;
         octx.drawImage(loadImage, 0, 0, oc.width, oc.height);
         //octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
         context.drawImage(
            oc,
            0,
            0,
            oc.width,
            oc.height,
            0,
            0,
            canvas.width,
            canvas.height
         );
      };
   } else {
      var ctx = canvas.getContext('2d');
      ctx.fillText('Hello', 10, 0);
   }
});
