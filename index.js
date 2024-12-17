gsap.registerPlugin(ScrollTrigger);

let contents = gsap.utils.toArray('.sec4 div')

gsap.to(contents,{
    xPercent : -100*(contents.length-1),
    scrollTrigger:{
        trigger:'.sec4',
        start: "top top",
        end:"bottom center",
        pin:true,
        pinSpacing:true,
        scrub:true,
    }
},"<")
  

let tl = gsap.timeline();

tl.to('.bubble',{
    scrollTrigger:{
        trigger:'.bubble',
        start:"top 80%",
        end: "10% 40%",
        scrub:1
    },
    scale:2
})
  .to('.text',{
  scrollTrigger:{
        trigger:'.bubble',
        start:"top 70%",
        scrub:true,
    },
      y:120,
      scale:1.6
  })
  
  
  let tl2 = gsap.timeline();
  
  tl2.to('.lamp-head',{
       scrollTrigger:{
        trigger:'.lamp-head',
        start:"top 70%",
        end: "top 50%",
        scrub:true
    },width:150,boxShadow:"1px -10px 136px 102px #2DFFC4CC" 
  })
  .to('.lamp-light',{
      scrollTrigger:{
        trigger:'.lamp-head',
        scrub:1
    },width:150
  },"<")
  .from('.content img',{
      scrollTrigger:{
        trigger:'img',
        start:"top 70%",
        end: "top 50%",
        scrub:true
    },width:"100%",height:"80%",scale:1.3
  })
  .to('.sec3',{
      scrollTrigger:{
        trigger:'.sec3',
        start:"top top",
        end: "top top", 
          
    },onEnter: wat()
  })
  .to('.img2',{
      scrollTrigger:{
        trigger:'.sec4',
        start:"top 70%",
        end: "top 20%", 
        scrub:true  
    },
     scale:2
  })
  .to('.img3',{
      scrollTrigger:{
        trigger:'.sec4',
        start:"top 70%",
        end: "top 20%", 
        scrub:true  
    },
     scale:2,top:"10%"
  },"<")
  
  
  
  
  
  
  
  
  
  
  
  let words = ["Hi","hello🙃","Feel tensed!","Impressed?","cooked","Man up!"]
  let consan = null
  
  let dum = document.getElementById('text')
  
function wat(){
 setInterval(() =>{
      consan = Math.floor(Math.random()*words.length )
      //console.log(consan)
      dum.textContent = words[consan]
  },2000)
  }
