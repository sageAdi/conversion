const inputFileBtn = document.getElementById('inputFile');
const editImage = document.getElementById('editImage');
const previewImage = document.getElementById('previewImage');
const uploadBtn = document.getElementById('upload');
const currentFile = document.getElementById('currentFile');
const width = document.getElementById('width');
const height = document.getElementById('height');
const canvas = document.getElementById('canvasImg');

function uploadBtnHandler() {
   inputFileBtn.click();
}
function inputFileChange() {
   const file = inputFileBtn.files[0];
   if (file) {
      const reader = new FileReader();
      editImage.style.display = 'block';
      previewImage.style.display = 'block';
      reader.readAsDataURL(file);
      reader.addEventListener('load', function () {
         editImage.setAttribute('src', this.result);
         previewImage.setAttribute('src', this.result);
         currentFile.innerText = file.name;
         var ctx = canvas.getContext("2d");
         ctx.fillText("Hiii")
         ctx.drawImage(previewImage)
      });
      width.innerText = editImage.clientWidth;
      height.innerText = editImage.clientHeight;
   } else {
      editImage.style.display = null;
      editImage.setAttribute('src', '');
      previewImage.style.display = null;
      previewImage.setAttribute('src', '');
      currentFile.innerText = '';
      width.innerText = '';
      height.innerText = '';
   }
}
