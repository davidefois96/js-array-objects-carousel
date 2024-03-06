const imgWrapper = document.querySelector('.imgWrapper');
const slider = document.querySelector('.slider');
const up= document.querySelector('.up');
const down= document.querySelector('.down');
const imgCollection=[];
let contImg = 0 ;


const scrollDown = () =>{

  interScroll = setInterval(() => {


    imgCollection[contImg].classList.add('d-none');
  
    
    if(contImg===images.length-1){
      
      contImg=0;
   
    } else {
  
      contImg++;
  
    }

    imgCollection[contImg].classList.remove('d-none');


    
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
  
  imgCollection.push(`
  <div class="w-100 h-100 d-none"= >
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
 );

});

console.log(imgCollection);

imgWrapper.innerHTML+=imgCollection[contImg]
imgCollection[contImg].classList.remove('d-none');


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

  imgCollection[contImg].classList.add('d-none');


  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  imgCollection[contImg].classList.remove('d-none');
 

})
down.addEventListener('click', function() {

  imgCollection[contImg].classList.add('d-none');

  
  if(contImg===images.length-1){
    
    contImg=0;
 
  } else {

    contImg++;

  }
  imgCollection[contImg].classList.remove('d-none');


})