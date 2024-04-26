//gansukiennutdangnhap
setTimeout(()=>{
    document.querySelector(".login").querySelector('#dky').style.display =`flex`
    document.querySelector(".registedanimate").style.display=`flex`
},2000)
function registed(){
    let registed = document.querySelector(".registed")
    let registedbutton = document.querySelector(".login").querySelector('#dky')
    let loginanimate = document.querySelector(".loginanimate")
    registedbutton.addEventListener("click",()=>{
        registed.style.display = `flex`
        setTimeout(()=>{
            loginanimate.style.display =`flex`
            registedbutton.style.display =`none`
        },2200)
        document.querySelector(".login").style.display =`none`
        document.querySelector(".registedanimate").style=`none`
    })

}
function login(){
    let login = document.querySelector(".login")
    let registedbutton = document.querySelector(".registed").querySelector('#dn')
    let loginanimate = document.querySelector(".registedanimate")
    registedbutton.addEventListener("click",()=>{
        login.style.display = `flex`
        setTimeout(()=>{
            document.querySelector(".login").querySelector('#dky').style.display = `flex`
            loginanimate.style.display =`flex`
        },2200)
        document.querySelector(".registed").style.display =`none`
        document.querySelector(".loginanimate").style.display=`none`
    })

}
registed()
login()
//clicktrang chnu
function home(){
    document.querySelector(".home").addEventListener("click",()=>{
        window.location.href = "index.html"
    })
}
home()