const gallery = document.querySelector('#gallery')
const images = document.querySelectorAll('#gallery img')
const prev = document.querySelector('.buttons .prev')
const next = document.querySelector('.buttons .next')

let i = 0;

prev.onclick = function(){
    console.log('prev clikced')
    images[i].style.display = 'none';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block' 


}

next.onclick = function(){
    console.log('next clikced')
    images[i].style.display = 'none'
    i++;
    if(i === images.length){
        i = 0;
    }
    images[i].style.display = 'block' 
}
