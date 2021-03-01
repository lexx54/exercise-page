const d=document,
  w=window;
export function smartVideo(){
  const $videos=d.querySelectorAll("video[data-smart-video]")
  const cb=(entries)=>{
    entries.forEach(element => {
      element.isIntersecting
      ? element.target.play()
      :element.target.pause();
      
      d.addEventListener("visibilitychange",e=>{
        d.visibilityState==="visible"
      ? element.target.play()
      :element.target.pause();
      })
    });
}

  const observer=new IntersectionObserver(cb,{threshold:0.5});

  $videos.forEach(video=>observer.observe(video))
}