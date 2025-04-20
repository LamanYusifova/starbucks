const sideBar = document.getElementById('sideBar')
const menuDiv = document.getElementById('menuDiv')
const blurDiv = document.getElementById('blurDiv')
const spans = sideBar.querySelectorAll('span')



let flag = true
function openMenu(){
    
    menuDiv.style.right = flag ? 0 : '-100%'
    blurDiv.style.width = flag ? '100%' : 0
    blurDiv.style.height = flag ? '100vh' : 0
    blurDiv.style.backgroundColor = flag ? '#9e9e9e' : 'none'
    blurDiv.style.opacity = flag ? '50%' : 'none'
    document.body.classList.toggle('overflow-y-hidden')
    

    if(flag){
        spans[0].classList.add("rotate-[45deg]")
        spans[1].classList.add("hidden")
        spans[2].classList.add("rotate-[-45deg]")
        spans[0].classList.add('translate-y-[1.6px]')
    }else{
        spans[1].classList.remove("hidden")
        spans[0].classList.remove("rotate-[45deg]")
        spans[2].classList.remove("rotate-[-45deg]")
        spans[0].classList.remove('translate-y-[1.6px]')
    }
    flag = !flag
}