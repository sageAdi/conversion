function clickHandlerHome(){
    var item1=document.getElementById('toPdf');
    var item2=document.getElementById('toJpg');
    if(!item1.classList.contains('d-none')){
        item1.classList.add('d-none')
    }
    if(!item2.classList.contains('d-none')){
        item2.classList.add('d-none')
    }
}
function clickHandlerToPdf() {
   var item = document.getElementById('toPdf');
   item.classList.remove('d-none');
   var item2 = document.getElementById('toJpg');
   if (!item2.classList.contains('d-none')) {
      item2.classList.add('d-none');
   }
}
function clickHandlerToJpg() {
   var item = document.getElementById('toJpg');
   item.classList.remove('d-none');
   var item2 = document.getElementById('toPdf');
   if (!item2.classList.contains('d-none')) {
      item2.classList.add('d-none');
   }
}
