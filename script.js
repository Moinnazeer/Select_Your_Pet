let petsImageUrls = {
    dog: "https://pngimg.com/uploads/dog/dog_PNG156.png",
    cat: "https://pngimg.com/uploads/cat/cat_PNG50488.png",
    parrot: "https://pngimg.com/uploads/parrot/parrot_PNG709.png",
    spider: "https://pngimg.com/uploads/spider/spider_PNG0.png",
    rabbit: "https://pngimg.com/uploads/rabbit/rabbit_PNG3797.png"
};

let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");

// Preload images
let preloadedImages = {};
Object.keys(petsImageUrls).forEach(pet => {
    let img = new Image();
    img.src = petsImageUrls[pet];
    preloadedImages[pet] = img;
});

petSelectEl.addEventListener("change", function(event) {
    let selectedPet = event.target.value;
    let selectedPetImgUrl = petsImageUrls[selectedPet];
    petImgEl.src = selectedPetImgUrl;
});
