function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// window.addEventListener(`scroll`,()=>{
//   let scroll= window.scrollY;
//    if (scroll>140){                        //quando la navbar scrolla oltre il banner di 455px aggiungiamo o togliamo la classe .downScroll (bg-color: white)
//      header.classList.add(`downScroll`);
//   }else{
//      header.classList.remove(`downScroll`);
//   }
// })

