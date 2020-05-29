const inputFileBtn = document.getElementById('inputFile');
const editImage = document.getElementById('editImage');
const imgDiv = document.getElementById('imgDiv');
const uploadBtn = document.getElementById('upload');

function uploadBtnHandler() {
   inputFileBtn.click();
}
function inputFileChange() {
   const file = inputFileBtn.files[0];
   if (file) {
      const reader = new FileReader();
      editImage.style.display = 'block';
      reader.readAsDataURL(file);
      reader.addEventListener('load', function () {
         editImage.setAttribute('src', this.result);
      });
      console.log('width : ' + editImage.clientWidth);
      console.log('height : ' + editImage.clientHeight);
   } else {
      editImage.style.display = null;
      editImage.setAttribute('src', '');
   }
}