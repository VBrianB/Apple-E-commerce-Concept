function openMenu(){ 
    document.getElementById("dropdown").classList.toggle("active");
    document.getElementById("btn-open").classList.toggle("btn-img");   
}
function modalVideo(){
    document.getElementById("ModalArea").classList.toggle("activeModal");
    modal = document.getElementById("ModalArea");

    if( modal.classList == "activeModal"  ){
        document.documentElement.style.overflow = 'hidden';
    }
    else{
        document.documentElement.style.overflow = 'auto';
    }
}
window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("ModalArea").classList.toggle("activeModal");
        document.documentElement.style.overflow = 'auto';     
    }
  }
  function change(x){
      x.classList.toggle('change');
  }
  function ToggleMenu(){
      
      const Menu = document.getElementById('MenuArea');
      Menu.classList.toggle('active');
      
      if(Menu.classList == 'active'){
        document.documentElement.style.overflow = 'hidden';
      }
      else{
        document.documentElement.style.overflow = 'auto';
      }
  }
function MobileDropDown(){
    list = document.getElementById('subP');
    imgDrop = document.getElementById('img-drop-mobile');

    list.classList.toggle('active');
    imgDrop.classList.toggle('active');
}


function changePink(){
    display = document.getElementById('colors');
    display.classList.remove('midnight');
    display.classList.remove('blue');
    display.classList.remove('green');
    display.classList.remove('starlight');
    display.classList.remove('red');
    document.getElementById('iphone-change').src = "img/iphone-pink.png"; 
    document.getElementById('text-pink').style.display = 'block';
    document.getElementById('text-green').style.display = 'none';
    document.getElementById('text-blue').style.display = 'none';
    document.getElementById('text-midnight').style.display = 'none';
    document.getElementById('text-starlight').style.display = 'none';
    document.getElementById('text-red').style.display = 'none';
}
function changeGreen(){
    display = document.getElementById('colors');
    display.classList.remove('starlight');
    display.classList.remove('blue');
    display.classList.remove('midnight');
    display.classList.remove('red');
    display.classList.add('green');
    document.getElementById('iphone-change').src = "img/iphone-green.png"; 
    document.getElementById('text-pink').style.display = 'none';
    document.getElementById('text-green').style.display = 'block';
    document.getElementById('text-blue').style.display = 'none';
    document.getElementById('text-midnight').style.display = 'none';
    document.getElementById('text-starlight').style.display = 'none';
    document.getElementById('text-red').style.display = 'none';

}
function changeBlue(){
    display = document.getElementById('colors');
    display.classList.remove('green');
    display.classList.remove('midnight');
    display.classList.remove('starlight');
    display.classList.remove('red');
    display.classList.add('blue');
    document.getElementById('iphone-change').src = "img/iphone-blue.png"; 
    document.getElementById('text-pink').style.display = 'none';
    document.getElementById('text-green').style.display = 'none';
    document.getElementById('text-blue').style.display = 'block';
    document.getElementById('text-midnight').style.display = 'none';
    document.getElementById('text-starlight').style.display = 'none';
    document.getElementById('text-red').style.display = 'none';
}
function changeMid(){
    display = document.getElementById('colors');
    display.classList.remove('blue');
    display.classList.remove('green');
    display.classList.remove('starlight');
    display.classList.remove('red');
    display.classList.add('midnight');
    document.getElementById('iphone-change').src = "img/iphone-midnight.png"; 
    document.getElementById('text-pink').style.display = 'none';
    document.getElementById('text-green').style.display = 'none';
    document.getElementById('text-blue').style.display = 'none';
    document.getElementById('text-midnight').style.display = 'block';
    document.getElementById('text-starlight').style.display = 'none';
    document.getElementById('text-red').style.display = 'none';
}

function changeStar(){
    display = document.getElementById('colors');
    display.classList.remove('blue');
    display.classList.remove('green');
    display.classList.remove('midnight');
    display.classList.remove('red');
    display.classList.add('starlight');
    document.getElementById('iphone-change').src = "img/iphone-starlight.png"; 
    document.getElementById('iphone-change').src = "img/iphone-midnight.png"; 
    document.getElementById('text-pink').style.display = 'none';
    document.getElementById('text-green').style.display = 'none';
    document.getElementById('text-blue').style.display = 'none';
    document.getElementById('text-midnight').style.display = 'none';
    document.getElementById('text-starlight').style.display = 'block';
    document.getElementById('text-red').style.display = 'none';
}
function changeRed(){
    display = document.getElementById('colors');
    display.classList.remove('blue');
    display.classList.remove('green');
    display.classList.remove('midnight');
    display.classList.remove('starlight');
    display.classList.add('red');
    document.getElementById('iphone-change').src = "img/iphone-red.png"; 
    document.getElementById('text-pink').style.display = 'none';
    document.getElementById('text-green').style.display = 'none';
    document.getElementById('text-blue').style.display = 'none';
    document.getElementById('text-midnight').style.display = 'none';
    document.getElementById('text-starlight').style.display = 'none';
    document.getElementById('text-red').style.display = 'block';
}
function openSearch(){
  Search =  document.getElementById('search-top');
  Search.classList.toggle("active")  


}



