const d=document;

export function contactFormValidation(){
  const $FORM=d.querySelector(".contact-form"),
    $INPUTS=d.querySelectorAll(".contact-form [required]");
    console.log($INPUTS)

    $INPUTS.forEach(input=>{
      const $SPAN=d.createElement("span");
      $SPAN.id=input.name;
      $SPAN.textContent=input.title;
      $SPAN.classList.add("contact-form-error","none");
      input.insertAdjacentElement("afterend",$SPAN);
    })

    d.addEventListener("keyup",e=>{
      if(e.target.matches(".contact-form [required]")){
        let input=e.target,
          pattern=input.pattern || input.dataset.pattern;

          if (pattern && input.value!==""){
            console.log("has pattern");
            let regex=new RegExp(pattern);
            return !regex.exec(input.value)
              ?d.getElementById(input.name).classList.add("is-active")
              :d.getElementById(input.name).classList.remove("is-active");
              
          }
          if(!pattern){
            console.log("has no pattern");
            return input.value===""
              ?d.getElementById(input.name).classList.add("is-active")
              :d.getElementById(input.name).classList.remove("is-active");
          }
      }
    })
}