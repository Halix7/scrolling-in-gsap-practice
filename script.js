const tl=gsap.timeline();
function time(){
    let a=0;
    setInterval(function(){
        a+= Math.floor(Math.random() * 20);
        if(a<100){
            document.querySelector("#loader h1").innerHTML=`${a}%`
        }else{
            a=100;
            document.querySelector("#loader h1").innerHTML=`${a}%`

        }
        
    },100);
}
time()
tl.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    duration:1.3,
    onStart:time()
    
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})







gsap.to("#page1 h1",{
    transform:"translateX(-150%)",
    fontweight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})