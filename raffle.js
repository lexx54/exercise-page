const d=document;

export default function draw(btn,selector){
  const getWinner= (select)=>{
    const players = d.querySelectorAll(select);
    const random=Math.floor(Math.random()*players.length);
    const winner=players[random];
    // console.log({players,random})
    return "El ganador es "+winner.textContent;
  }

  d.addEventListener("click",e=>{
    if (e.target.matches(btn)){
      let result = getWinner(selector);
      alert(result);

    }
  })
}

