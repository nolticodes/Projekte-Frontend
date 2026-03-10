// PARAMETER
const imgArray = [
    "./img/gallery/anime.jpg",
    "./img/gallery/bird_white.jpg",
    "./img/gallery/bird.jpg",
    "./img/gallery/dark_clouds.png",
    "./img/gallery/duck.jpg",
    "./img/gallery/earth_from_sky.jpg",
    "./img/gallery/leopards.jpg",
    "./img/gallery/men_night_sea.jpg",
    "./img/gallery/mountain_sea.jpg",
    "./img/gallery/mountain_sky.jpg",
    "./img/gallery/winter_mountains.jpg",
    "./img/gallery/wintertree.jpg",
]; 

const imgOverviewRef = document.getElementById("image_overview_id"); 

const dialogRef = document.getElementById("image_view_dialog");

let currentIndex = "";

const imageInDialogRef = document.getElementById("image_open_in_dialog"); 

const titleImageInDialogRef = document.getElementById("dialog_image_name");

const imageCounterRef = document.getElementById("image_counter"); 

const prevButtonRef = document.getElementById("btn_prev");

// RENDER IMG IN OVERVIEW
function renderImages() {
    for(i=0; i<imgArray.length; i++) {
        imgOverviewRef.innerHTML += `<img onclick="openImageDialog(${[i]})" 
                                    id="image${[i]}" 
                                    alt="${imgArray[i]}"
                                    src="${imgArray[i]}"></img>`
                                    
    }
}

// OPEN & CLOSE DIALOG
function openImageDialog(i) {
    dialogRef.showModal();
    renderImageInDialog(i);
    loadTitleToDialog(i);
    imageCounterFctn(i);
    currentIndex = i
}

function closeImageDialog() {
    dialogRef.close();
}

// RENDER IMG IN DIALOG
function renderImageInDialog(i) {
    imageInDialogRef.innerHTML = `<img src="${imgArray[i]}"> </img>`;
}

// RENDER TITLE IN DIALOG
function loadTitleToDialog(i) {
    titleImageInDialogRef.innerHTML = imgArray[i].replace("_", " ").replace("_", " ").slice(14, -4);
}

// RENDER COUTNER IN DIALOG
function imageCounterFctn(i){ 
    imageCounterRef.innerHTML = i+1 + " / " + imgArray.length;
}

// BUTTON BACK
function prevImage(){
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    imageCounterFctn(currentIndex);
    renderImageInDialog(currentIndex);
    loadTitleToDialog(currentIndex);
}

// BUTTON NEXT
function nextImage(){
    currentIndex = (currentIndex + 1) % imgArray.length;
    imageCounterFctn(currentIndex);
    renderImageInDialog(currentIndex);
    loadTitleToDialog(currentIndex);
}