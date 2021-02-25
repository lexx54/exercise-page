const d=document;

export function scrollSpy(){
  const $sections=d.querySelectorAll("section[data-scroll-spy]");
  const cb = function(entries){

    entries.forEach(entry=>{
      const id = entry.target.getAttribute("id");
      console.log(id)
      console.log(entry.isIntersecting)
      console.log(d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList)
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("coler");
      } else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("coler");
      }
    })
  }

  const observer=new IntersectionObserver(cb,{
    // rootMargin:"-250px"
    threshold:"0.4"
  });

  $sections.forEach(ele=>observer.observe(ele))
}