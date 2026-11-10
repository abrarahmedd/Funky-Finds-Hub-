const btn= document.getElementById("btn-links")
btn.addEventListener('click',()=>{
   
      const links = document.getElementById("links-menu")
      links.classList.toggle("menu-show")
     if(btn.classList.contains("fa-bars")){
      btn.classList.replace("fa-bars","fa-close")
     }else{
      btn.classList.replace("fa-close","fa-bars")
     }
})
/////////////////////////////////////////////////////////////
const darkmood= document.getElementById("darkmood")
darkmood.addEventListener('click',()=>{
      if(document.body.dataset.mood ==="light"){
            document.body.style.backgroundColor = "black"
            document.body.style.transition = "2s"
            document.body.dataset.mood = "dark"
            const sun = document.getElementById("sun")
            sun.classList.replace("fa-moon" , "fa-sun")
      }
      else {
            document.body.style.backgroundColor = "white"
            document.body.dataset.mood = "light"
            const sun = document.getElementById("sun")
            sun.classList.replace("fa-sun" , "fa-moon")
      }
})
