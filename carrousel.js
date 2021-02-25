const d =document;

export default function slider(){
  const $prevousBtn=d.querySelector(".prev"),
    $nextBtn = d.querySelector(".next"),
    $slides=d.querySelectorAll(".slider-slide");
  let i =0;

    d.addEventListener("click",e=>{
      if(e.target===$nextBtn){
        e.preventDefault();
        $slides[i].classList.remove("active");
        i++;
        if(i>=$slides.length) i=0;
        $slides[i].classList.add("active");
      }
      if(e.target===$prevousBtn){
        e.preventDefault();
        $slides[i].classList.remove("active");
        i--;
        if(i<0) i=$slides.length-1;
        $slides[i].classList.add("active");
      }
    })
}