var curs=document.querySelector("#cursor")
document .addEventListener("mousemove",function(dets){
    curs.style .left=dets.x+"px"
    curs.style.top=dets.y+"px"
})
var blur=document.querySelector("#cursor-blur")
document .addEventListener("mousemove",function(dets){
    blur.style .left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})
gsap.to("#nav",{
    backgroundColor:"white",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       
        start:"top -20%",
        end:"top -30%",
        scrub:1
    }



})


gsap.to("#page2",{
    backgroundColor:"#000",
    duration:0.5,
    
    scrollTrigger:{
        trigger:"page2",
        scroller:"body",
        start:"top -31%",
        end:"top -60%",
       
        scrub:4
    }

}
)