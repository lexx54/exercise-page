const d=document;

export function arrow(arrow,container){
  const $arrow=document.querySelector(arrow);
  if(container>400){
    $arrow.classList.add("arrowAp");
  } else {
    $arrow.classList.remove("arrowAp");
  }
}