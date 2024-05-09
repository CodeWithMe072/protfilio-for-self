 const navLinkEls=document.querySelectorAll('.nav-link')

 navLinkEls.forEach(navLinkEls =>{
   navLinkEls.addEventListener('click', () =>{
     document.querySelector('.active')?.classList.remove('active');
     navLinkEls.classList.add('active');
   });
 });
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav right-part ul li a');

// window.onscroll =() =>{
//   sections.forEach(sec =>{
//     let top=window.scrollY;
//     let offset=sec.offsetTop;
//     let height=sec.offsetHeight;
//     let id = sec.getAttribute('id')

//     if(top >=offset && top < offset + height){
//       navLinks.forEach(links =>{
//         links.classList.remove('active');
//         document.querySelector('header nav right-part ul li a[herf*='+ id +']').classList.add('active'); 
        
//       })
//     }

//   })
// }

var typed= new Typed(".multple-text" ,{
    strings: ["Frontend Developer" , "Web Developer" ,
    "Web Designer" , "Python Programer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

const abouttitilelink=document.querySelectorAll('.about-titile-link')

abouttitilelink.forEach(abouttitilelink =>{
  abouttitilelink.addEventListener('click', () =>{
    document.querySelector('.active-link')?.classList.remove('active-link');
    abouttitilelink.classList.add('active-link');
  });
});
