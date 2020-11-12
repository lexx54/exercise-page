export function countDown(container,time,message){
  const $container=document.querySelector(container),
  para=document.createElement('p');
  let principal=new Date(time).getTime(),
  interval,
  colors=["green","blue","gray","orange"];
  para.classList.add("count-para");


    interval =setInterval(()=>{
      let now=new Date().getTime(),
      limitDate=principal-now,
      days=Math.floor(limitDate/(86400000)),
      hours=Math.floor((limitDate%(86400000)/3600000)),
      min=Math.floor((limitDate%86400000)%3600000/60000),
      sec=Math.floor((limitDate%86400000)%3600000%60000/1000);
      para.textContent=`${days} days ${hours} hour ${min} minutes ${sec} seconds to finish the count`;
      $container.appendChild(para);
      $container.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
      if (limitDate<0){
        para.textContent=message;
        clearInterval(interval)
      }

    },1000)
  }
  
  

