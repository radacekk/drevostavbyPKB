// Získání modálního okna
var modal = document.getElementById('modal');

// Získání obrázku a modálního obrázku
var images = document.querySelectorAll('.image-gallery img');
var modalImg = document.getElementById('modalImage');

// Pro každé kliknutí na obrázek se otevře modální okno s daným obrázkem
images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Zavření modálního okna po kliknutí na "X"
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
