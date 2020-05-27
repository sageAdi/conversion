const home = document.getElementById('home');
const toPdf = document.getElementById('toPdf');
const toJpg = document.getElementById('toJpg');
const inpFile = document.getElementById('inpFile');
const imgDiv = document.getElementById('imgDiv');
const imgPreview = imgDiv.querySelector('.imgPreview');
const imgText = imgDiv.querySelector('.imgText');
const uploadBtn = document.getElementsByClassName('upload');
const createPdfBtn = document.getElementsByClassName('createPdf');
function clickHandlerHome() {
   home.style.display = null;
   toJpg.style.display = null;
   toPdf.style.display = null;
}
function clickHandlerToPdf() {
   toPdf.style.display = 'block';
   toJpg.style.display = null;
   home.style.display = 'none';
}
function clickHandlerToJpg() {
   toJpg.style.display = 'block';
   toPdf.style.display = null;
   home.style.display = 'none';
}
function uploadBtnHandler() {
   inpFile.click();
}
function inpChange() {
   const file = inpFile.files[0];
   if (file) {
      const reader = new FileReader();
      imgText.style.display = 'none';
      imgPreview.style.display = 'block';
      createPdfBtn.style.display = 'block';
      reader.readAsDataURL(file);
      reader.addEventListener('load', function () {
         imgPreview.setAttribute('src', this.result);
      });
   } else {
      imgText.style.display = null;
      imgPreview.style.display = null;
      imgPreview.setAttribute('src', '');
   }
}
// $(document).ready(function () {
//    $('#drop-area').on('dragenter', function (e) {
//       e.preventDefault();
//       $(this).css('background', '#BBD5B8');
//    });

//    $('#drop-area').on('dragover', function (e) {
//       e.preventDefault();
//    });

//    $('#drop-area').on('drop', function (e) {
//       $(this).css('background', '#D8F9D3');
//       e.preventDefault();
//       var image = e.originalEvent.dataTransfer.files;
//       createFormData(image);
//    });
// });

// function createFormData(image) {
//    var formImage = new FormData();
//    formImage.append('userImage', image[0]);
//    uploadFormData(formImage);
// }

// function dropHandler(ev) {
//    console.log('File(s) dropped');

//    // Prevent default behavior (Prevent file from being opened)
//    ev.preventDefault();

//    if (ev.dataTransfer.items) {
//       // Use DataTransferItemList interface to access the file(s)
//       for (var i = 0; i < ev.dataTransfer.items.length; i++) {
//          // If dropped items aren't files, reject them
//          if (ev.dataTransfer.items[i].kind === 'file') {
//             var file = ev.dataTransfer.items[i].getAsFile();
//             console.log('... file[' + i + '].name = ' + file.name);
//          }
//       }
//    } else {
//       // Use DataTransfer interface to access the file(s)
//       for (var i = 0; i < ev.dataTransfer.files.length; i++) {
//          console.log(
//             '... file[' + i + '].name = ' + ev.dataTransfer.files[i].name
//          );
//       }
//    }
// }
// function dragOverHandler(ev) {
//    console.log('File(s) in drop zone');

//    // Prevent default behavior (Prevent file from being opened)
//    ev.preventDefault();
// }
