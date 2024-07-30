var tl = gsap.timeline()

tl.from(".qq",{
    x:-200,
    opacity:0,
    delay:1,
    duration:0.8,
    stagger:0.3
})
tl.from(".ig",{
    scale:0.5,
    opacity:0,
    delay:0.8,
    duration:0.5,
    stagger:0.3
})
gsap.from(".st",{
    scale:0.5,
    opacity:0,
    delay:0.1,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".st",
        scroll:"body"
    }
})
gsap.from(".ls",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".ls",
        scroll:"body"
    }
  
})
gsap.from("#s7",{
    y:-300,
    duration:0.5,
    opacity:0,
    delay:1,
    scrollTrigger:{
        trigger:"#s7",
        scroll:"body"
    }
  
})