function openMenu(){ 
    document.getElementById("dropdown").classList.toggle("active")
    document.getElementById("btn-open").classList.toggle("btn-img")      
}
function modalVideo(){
    document.getElementById("ModalArea").classList.toggle("activeModal")
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
      Menu.classList.toggle('active')
      
      if(Menu.classList == 'active'){
        document.documentElement.style.overflow = 'hidden';
      }
      else{
        document.documentElement.style.overflow = 'auto';
      }
  }
function MobileDropDown(){
    list = document.getElementById('subP')
    imgDrop = document.getElementById('img-drop-mobile')

    list.classList.toggle('active')
    imgDrop.classList.toggle('active')
}


function changePink(){
    display = document.getElementById('colors')

    display.classList.remove('green')
}
function changeGreen(){
    display = document.getElementById('colors')

    display.classList.add('green')
}


