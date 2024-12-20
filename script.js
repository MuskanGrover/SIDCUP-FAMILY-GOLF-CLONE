var crsr=document.querySelector("#cursor");
var cblur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets)
{
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    cblur.style.left=dets.x-250+"px";
    cblur.style.top=dets.y-250+"px";
})
gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"95px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -8%",
        end:"top -9%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -%",
        end:"top -70%",
        scrub:2
    }
})

