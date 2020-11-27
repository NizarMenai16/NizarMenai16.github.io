anime({
   targets:'.circle1',
   translateY:[50,0],
   easing:'easeInOutQuad',
   duration:1500,
   direction:'alternate',
   loop:true,

});
anime({
    targets:'.hero-container',
    translateY:[-50,-30],
    opacity:[0,1],
    easing:'spring(1, 80, 10, 0)',
    duration:2000,
    delay:1500,
})
anime({
targets:'nav',
translateY:[-50,0],
easing:'linear',
duration:1500,
});

const burgur = document.querySelector(".burgur");
const address = document.querySelector(".address");
const close = document.querySelector(".close");
burgur.addEventListener("click", e =>{
    address.classList.toggle("address-toggle");
   anime({
     targets:'.address p',
     opacity:[0,1],
     translateY:[25,0],
     easing:'linear',
     duration:1000
   });
});

close.addEventListener("click", e =>{
   address.classList.toggle("address-toggle");
});

// /* First Section Section Animation */

const waypoint = new Waypoint({
  element:document.querySelector(".first-section"),
  handler:function(direction){
    if(direction === "down"){
      anime({
         targets:'.first-section',
         translateY:[20,0],
         easing:'linear',
         opacity:[0,1],
      })
    }
     this.destroy()
  },
  offset:600
  
});


const waypoint2 = new Waypoint({
   element:document.querySelector(".second-picture"),
   handler:function(direction){
      if(direction === "down"){
         anime({
            targets:'.second-picture',
            rotateY:['-90deg','0deg'],
            opacity:[0,1],
            easing:'linear'
         })
      }
      this.destroy()
   },
   offset:600
})

const waypoint3 = new Waypoint({
   element:document.querySelector(".second-content"),
   handler:function(direction){
      if(direction === "down"){
         anime({
            targets:'.second-content',
            translateX:[-500,0],
            opacity:[0,1],
            easing:'linear'
         })
      }
      this.destroy();
   },
   offset:600
})

/* ======================================== GALLERY ======================= */

const waypoint4 = new Waypoint({
   element:document.querySelector(".gallery img", ".gallry-title"),
   handler:function(direction){
      if(direction === "down"){
         anime({
            targets:'.gallery img,.gallry-title',
            translateX:[-1500,0],
            opacity:[0,1],
            easing:'easeInOutQuad',
            delay:anime.stagger(1000),
         })
      }
      this.destroy();
   },
   offset:600
})