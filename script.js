// header script for menu button
// Here I have used onclick event for menu button
var slide_nav_ctr = document.querySelector('.slide-nav-ctr');
var menu_btn = document.querySelector('.menu-btn');
slide_nav_ctr.style.display='none';

function openCloseMenu(){
  if(slide_nav_ctr.style.display==='none')
  {    
    slide_nav_ctr.style.display='flex';
    menu_btn.style.transform='rotate(-90deg)'
  }
  else{
    slide_nav_ctr.style.display='none'
    menu_btn.style.transform='rotate(0deg)'
  }  
}


// pop-up button script

var show_btn = document.querySelector('.show-pop-btn');
var pop_ctr = document.querySelector('.pop-ctr');

var ripple_effect = document.querySelector('.ripple-effect-ctr');

show_btn.addEventListener('click',()=>{
  pop_ctr.style.display='flex';
  ripple_effect.style.display='none';
  show_btn.style.transform='rotate(-45deg)';

})

var cls_btn = document.querySelector('.close-pop-btn');

cls_btn.addEventListener('click',()=>{
  pop_ctr.style.display='none';
  ripple_effect.style.display='block';
  show_btn.style.transform='rotate(0deg)';
})