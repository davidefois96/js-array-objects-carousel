const imgWrapper = document.querySelector('.imgWrapper');
const slider = document.querySelector('.slider');
const up= document.querySelector('.up');
const down= document.querySelector('.down');
let contImg = 0 ;


const scrollDown = () =>{

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
  url :'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg' ,
  nome : 'Finlandia',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg' ,
  nome : 'Norvegia',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg' ,
  nome : 'Danimarca',
  descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

  }, 
  { 
  url :'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg' ,
  nome : 'Islanda',
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

scrollDown();

imgWrapper.addEventListener('mouseover',function(){

 clearInterval(interScroll);

})
up.addEventListener('mouseover',function(){

 clearInterval(interScroll);

})
down.addEventListener('mouseover',function(){

 clearInterval(interScroll);

})



imgWrapper.addEventListener('mouseout',function(){

  scrollDown();
 
})


up.addEventListener('click', function() {

  myImgs[contImg].classList.add('d-none');


  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  myImgs[contImg].classList.remove('d-none');
 

})
down.addEventListener('click', function() {

  myImgs[contImg].classList.add('d-none');

  
  if(contImg===images.length-1){
    
    contImg=0;
 
  } else {

    contImg++;

  }
  myImgs[contImg].classList.remove('d-none');


})