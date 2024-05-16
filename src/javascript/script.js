let imagens=[
    'src/assets/imgs/banners/Banner1.jpg',
    'src/assets/imgs/banners/Banner2.jpeg',
    'src/assets/imgs/banners/Banner3.jpg'
];

let index = 0;
function slideShow() {
    document.getElementById('imgBanner').src = imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout(slideShow, 3000);
}
slideShow();