const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-page'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#main-page",{
    y:"100vh",
    scale: 0.6,
    scaleX: 0.01,
    duration:0
})

tl.to("#main-page",{
    y:"-80vh",
    duration:1.5,
    delay:1
})

tl.to("#main-page", {
    y:"0vh",
    rotate:-360,

    scale:1, 
    duration:1,
})

// gsap.to("#marqee > h1",{
//     x: "-100%",
//     duration: 2,
//     repeat: -1
// })
