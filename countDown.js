export function countDown(container,time){
  const $container=document.querySelector(container),
  para=document.createElement('p');
  let principal=new Date(time).getTime(),
  interval,
  colors=["green","pink","gray","orange","yellow"];
  para.classList.add("count-para");


    interval =setInterval(()=>{
      let now=new Date().getTime(),
      limitDate=principal-now,
      days=Math.floor(limitDate/(86400000)),
      hours=Math.floor((limitDate%(86400000)/3600000)),
      min=Math.floor((limitDate%86400000)%3600000/60000),
      sec=Math.floor((limitDate%86400000)%3600000%60000/1000);
      console.log(limitDate);
      para.textContent=`${days} days ${hours} hour ${min} minutes ${sec} seconds to finish the count`;
      $container.appendChild(para);
      $container.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
      if (limitDate==0){
        para.textContent="Happy birthday Lexx";
        clearInterval(interval)
      }

    },1000)
  }
  
  

