
function revealCat() {
    const catImage = document.querySelector('.cat-image');
    const catText = document.querySelector('#cat-text');

    if (catImage.style.display === "none") {
        catImage.style.display = "block";
        catText.style.display = "block";  
    } else {
        catImage.style.display = "none";
        catText.style.display = "none";  
    }
}


function revealCrystal() {
    const crystalImage = document.querySelector('.crystal-image');
    const crystalText = document.querySelector('#crystal-text');

    if (crystalImage.style.display === "none") {
        crystalImage.style.display = "block";
        crystalText.style.display = "block";  
    } else {
        crystalImage.style.display = "none";
        crystalText.style.display = "none";  
    }
}