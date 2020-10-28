const $btnHamburguer=document.querySelector(".btn-menu"),
  $links=document.getElementById("links-container"),
  $move=document.querySelector(".btn-menu-inner");


  document.addEventListener("click",(e)=>{
    if(e.target.classList[1]==="bx-menu"||e.target.classList[1]==="bx-x"){
      $links.classList.toggle("disappear");
      $links.classList.toggle("appear");
      $move.classList.toggle("btn-inner-movement")
    }

    if(e.target.matches(".navegation-links")){
      $links.classList.toggle("disappear");
      $links.classList.toggle("appear");
      $move.classList.toggle("btn-inner-movement")
    }
  })
  // $btnHamburguer.addEventListener("click",(e)=>{
  //   $links.classList.toggle("disappear");
  //   $links.classList.toggle("appear");
  //   $move.classList.toggle("btn-inner-movement")

  // })