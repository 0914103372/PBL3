//slider
let slidebutton = document.querySelectorAll('.slidebaritem')
let x = 0
function slider(){
    let listimg = document.querySelector('.listimg')
        slidebutton[x].classList.remove('chose')
        if(x==3){
            x=0
        }
        else{
        x++
        }
        slidebutton[x].classList.add('chose')
        listimg.style.transform = `translateX(-${75*x}vw)` 

}
let slideraction= setInterval(slider,3000)
slideraction
slidebutton.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        clearInterval(slideraction)
        let listimg = document.querySelector('.listimg')
        slidebutton[x].classList.remove('chose')
        el.classList.add('chose')
        x= i
        listimg.style.transform = `translateX(-${75*x}vw)`
        slideraction
        
    })
})
