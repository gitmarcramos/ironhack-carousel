const images = [
    'https://static.lpnt.fr/images/2020/09/25/20799762lpw-20799798-article-forrest-gump-cinema-jpg_7372886_1250x625.jpg',
    'https://media.vogue.fr/photos/5d234d48d3002d773f169965/2:3/w_2560%2Cc_limit/076_CHL_150058.jpg',
    'https://lh3.googleusercontent.com/proxy/4mwnmH-knbzJ2uQPiyOQwvz5uSNf7E94d32sxHnVwTqfKNs4oTpvQjxwo_P8f7NNv952okW1aEwnzewiMdOoA8eokA4BbK61mJak0bgt9O32YQZE09XaQrMbgOD8MeT-2L75wukRCEHSavZ8CrpGKvLGMvlljJ5zWiYsqCzqgq5Sxv0khlgRM8UZqL_-Cevffs6x2YHmoNYyiLEA6w'
];

const imgContainer = document.querySelector('.image-container');

const image = document.querySelector('img');

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');

let count = 0;


function replaceSrc(){
    image.src = images[count];
}

previousBtn.addEventListener('click', () => {
    count--
    if(count < 0) {
        count = images.length-1;
    }
    replaceSrc()
})

nextBtn.addEventListener('click', () => {
    count++
    if(count > images.length-1) {
        count = 0;
    }
    replaceSrc()
})