function askQuestion() {
    var q = prompt('how much wood could a woodchucker chuck if a wood chuck could chuck wood');
 if (q != null) {
    document.getElementById('question').innerHTML='yikes! ' + q + ' is a lot of wood!';
 }
}

function showImage(){
      var image=document.getElementById('skibidi toilet');
      image.src = "images/download.jpg";
}