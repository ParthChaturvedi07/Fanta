document.addEventListener("DOMContentLoaded", function(){

    function animation1(){
        var tl = gsap.timeline()
        
        tl.from("nav a, nav i",{
            y:-40,
            duration:0.7, 
            delay:0.5,
            opacity:0,
            stagger:0.15
        })
    }
    
    animation1()
    
    function animation2(){
        
        var tl2 = gsap.timeline({
            scrollTrigger:{
            scroller:"body",
            trigger:".two",
            markers:false,
            start:"0% 95%",
            end:"40% 50%",
            scrub:2
    }
})

tl2.to("#fanta",{
    top:"118%",
    left:"0%"
},'orange')

tl2.to("#orange-cut",{
    top:"158%",
    left:"21%"
},'orange')

tl2.to("#orange",{
    width:"15%",
    top:"160%",
    right:"0.5%"
},'orange')

tl2.to("#leaf",{
    top:"95%",
    rotate:"130deg",
    left:"80%"
},'orange')

tl2.to("#leaf2",{
    top:"110%",
    rotate:"130deg",
    left:"0%"
},'orange')

}

animation2()

function animation3(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".three",
            markers:false,
            start:"0% 95%",
            end:"48% 50%",
            scrub:2
        }
    })
    
   gsap.to(".lemon1", {
        rotate: "129600deg",
        repeat: -1,
        duration: 150,
        ease: "none"
    });
    
    gsap.to(".lemon2", {
        rotate: "129600deg",
        repeat: -1,
        duration: 150,
        ease: "none"
    });
    
    tl3.to("#orange-cut",{
        width:"18%",
        left: "42%",
        top: "204%",
    }, 'ca')
    
    tl3.to("#fanta",{
        width:"35%",
        top: "210%",
        left: "33%",
    }, 'ca')
    
}

animation3()

})
