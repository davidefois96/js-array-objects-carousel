const imgWrapper = document.querySelector('.imgWrapper');
const slider = document.querySelector('.slider');
const left= document.querySelector('.left');
const right= document.querySelector('.right');
const btnLeft=document.querySelector('.btnLeft');
const btnRight=document.querySelector('.btnRight');
const thumbimages = document.querySelectorAll('.thumbimages');
let contImg = 0 ;


const scrollLeft = () =>{

  interScroll = setInterval(() => {

    myImgs[contImg].classList.add('d-none');


  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  myImgs[contImg].classList.remove('d-none');

  }, 3000);


}

const scrollRight = () =>{

  interScroll = setInterval(() => {


    myImgs[contImg].classList.add('d-none');
  
    
    if(contImg===images.length-1){
      
      contImg=0;
   
    } else {
  
      contImg++;
  
    }

    myImgs[contImg].classList.remove('d-none');


  }, 3000);


}




const images = [
  
  { 
  url :'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg' ,
  nome : 'Svezia',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'https://www.sardegna.info/wp-content/uploads/sites/5/portoscuso.jpg' ,
  nome : 'Lungomare Cristoforo Colombo',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
    
  url :'https://www.radiox.it/wp-content/uploads/tonnaraportoscuso.jpg' ,
  nome : 'Tonnara',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'https://www.sacruxitta.it/wp-content/uploads/2012/07/pano-da-scalette.jpg',
  nome : 'Portopaglietto',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'https://i.ytimg.com/vi/HADEzZGUz0c/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGCUgYShlMA8=&amp;rs=AOn4CLBmGaElfP-VSCUtrxQ2bCOP_mh6_g',
  nome: 'Capoaltano',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  
  
]
  

images.forEach (elemento => {
  
  imgWrapper.innerHTML+=`
  <div class="w-100 h-100 position-relative d-none myImgs"= >
  <div class="position-absolute m-3 ">
  <h1>
    ${elemento.nome}
   </h1>
   <p>
    ${elemento.descrizione}
   </p>

  </div>
   
  <img src="${elemento.url} " alt="${elemento.nome} class="w-100 h-100">
  
  </div> `
 ;

});



const myImgs = document.querySelectorAll('.myImgs');

myImgs[contImg].classList.remove('d-none');



slider.addEventListener('mouseover',function(){

 clearInterval(interScroll);
 

})
left.addEventListener('mouseover',function(){

  clearInterval(interScroll);

})
right.addEventListener('mouseover',function(){

 clearInterval(interScroll);

})




left.addEventListener('click', function() {

  myImgs[contImg].classList.add('d-none');


  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  myImgs[contImg].classList.remove('d-none');
 

})
right.addEventListener('click', function() {

  myImgs[contImg].classList.add('d-none');

  
  if(contImg===images.length-1){
    
    contImg=0;
 
  } else {

    contImg++;

  }
  myImgs[contImg].classList.remove('d-none');


})

btnLeft.addEventListener('click',function(){
   clearInterval(interScroll);
 })
btnLeft.addEventListener('click',function(){
   scrollLeft();
 })
btnRight.addEventListener('click',function(){
   clearInterval(interScroll);
 })
btnRight.addEventListener('click',function(){
  scrollRight();
})





thumbimages[0].addEventListener('click',function(){

  myImgs[contImg].classList.add('d-none');
  myImgs[0].classList.remove('d-none');
  contImg=0;

})
thumbimages[1].addEventListener('click',function(){

  myImgs[contImg].classList.add('d-none');
  myImgs[1].classList.remove('d-none');
  contImg=1;

})
thumbimages[2].addEventListener('click',function(){

  myImgs[contImg].classList.add('d-none');
  myImgs[2].classList.remove('d-none');
  contImg=2;

})
thumbimages[3].addEventListener('click',function(){

  myImgs[contImg].classList.add('d-none');
  myImgs[3].classList.remove('d-none');
  contImg=3;

})
thumbimages[4].addEventListener('click',function(){

  myImgs[contImg].classList.add('d-none');
  myImgs[4].classList.remove('d-none');
  contImg=4;

})