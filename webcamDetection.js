const d=document,
n=navigator;
export default function webCam(id){
  const $video=d.getElementById(id);
  console.log($video)
  if(n.mediaDevices.getUserMedia){
    n.mediaDevices.getUserMedia({video:true})
    .then(stream=>{
      $video.srcObject=stream;
      $video.play();
    })
    .catch(err=>{
      $video.insertAdjacentHTML("afterend",`<p><mark>${err}</mark></p>`)
      console.error("We got the next error "+err)
    });
  }
}