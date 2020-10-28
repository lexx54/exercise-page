const d=document;
let x=0,y=0;

export function moveBall(e,ball,stage){
  const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    limitsBalls=$ball.getBoundingClientRect(),
    limitesStage=$stage.getBoundingClientRect();

    switch(e.keyCode){
      //izq
      case 37:
        e.preventDefault()
        if(limitsBalls.left>limitesStage.left) x--;
        break;
      //arriba
      case 38:
        e.preventDefault()
        if(limitsBalls.top>limitesStage.top) y--;
        break;
      //derecha
      case 39:
        e.preventDefault()
        if(limitsBalls.right<limitesStage.right) x++;
        break;
      //abajo
      case 40:
        e.preventDefault()
        if(limitsBalls.bottom<limitesStage.bottom) y++;
        break;
    }
    $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
}
export function shortcuts(e){
  if (e.keyCode===65 && e.altKey ){
    alert("you have launched an alert with the keyword")
  }
  if (e.key==="c" && e.altKey ){
    confirm("you have launched a confirm with the keyword")
  }
  if (e.key==="p" && e.altKey ){
    prompt(`you have launched a prompt with ${e.key} `)
  }
}
