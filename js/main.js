let mainImg = document.querySelector('.main-img');
console.log(mainImg);
let mainContainer = document.querySelector('.container');
console.log(mainContainer);

function phones(phone){
    mainImg.src = phone;
};
function colors(color){
    mainContainer.style.background = color;
};
