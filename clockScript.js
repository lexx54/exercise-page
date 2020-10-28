export default function clockFunc(...args){
  const info=args,
  [$ele1,$ele2]=info;
  let clear;

  console.log("hi");
  console.log(info);
  console.log($ele1);
  console.log($ele2);


  for (let i = 0; i<4; i++){
    const data=[
      "iniciar reloj",
      "detener reloj",
      "iniciar alarma",
      "detener alarma"
    ],
    button=document.createElement("button");
    button.classList.add(`btn-clock${i}`);
    button.textContent=data[i]
    $ele1.appendChild(button)
  }

  document.addEventListener("click",e=>{
    if(e.target.matches(".btn-clock0")){
        const para1=document.createElement("p"),
        para2=document.createElement("p"),
        para3=document.createElement("p");
      console.log("1");
      clockStarter($ele2,para1,para2,para3);
      $ele1.children[0].setAttribute("disabled",true);
    };

    if(e.target.matches(".btn-clock1")){
      console.log("2");
      clearInterval(clear);
      const para=document.querySelectorAll("p");
      for (let ele of para){
        ele.remove();
      }  
      $ele1.children[0].disabled=false;
    };

    if(e.target.matches(".btn-clock2")){
      console.log("3")
      alarmStarter($ele2);
      $ele1.children[2].disabled=true;
    };
    if(e.target.matches(".btn-clock3")){
      console.log("4");
      $ele2.querySelector("audio").remove();
      $ele2.querySelector("img").remove();
      $ele1.children[2].disabled=false;
    };
  });

function clockStarter(container,h,m,s){
    clear= setInterval(e=>{
    console.log("1");
    const now = new Date(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();


  h.textContent = hour;
  m.textContent = min;
  s.textContent = sec;
  container.appendChild(h);
  container.appendChild(m);
  container.appendChild(s);
  },1000)
  }
}

function alarmStarter(container,){
  const $audio=document.createElement("audio"),
  $image=document.createElement("img");
  $audio.setAttribute("src","https://freesound.org/s/316843/");
  $audio.setAttribute("autoplay",true);
  $image.setAttribute("src","https://images.unsplash.com/photo-1550534791-2677533605ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)")
  $image.classList.add("show-img")
  container.appendChild($image);
  container.appendChild($audio)
}
