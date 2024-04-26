//listroom
let line= 0
function choicefloor(){
    let floors= document.querySelectorAll(".main_listroom_header_item")
    floors.forEach((floor,x)=>{
        floor.addEventListener("click",()=>{
            document.querySelector(`.main_listroom_items_${line+1}`).style.display = `none`
            document.querySelector(`.main_listroom_items_${x+1}`).style.display = `flex`
            floors[line].classList.remove('choice')
            floor.classList.add('choice')
            line = x
        })
    })
}
//chon tang
choicefloor()
//buttoncheckout
function checkout(floors,x,i)
{
        let buttoncheckout = floors.querySelectorAll(".main_listroom_item_button_checkout")
        let status = floors.querySelectorAll(".main_listroom_item_status")
        let confirm = document.querySelector(".confirm")
        let background = document.querySelector(".background")
        let room =floors.querySelectorAll(".main_listroom_item")
        let checkoutfill = ` <div class="main_listroom_item_header">
        <div class="main_listroom_item_header_text">Phòng ${i+1}01</div>
        <div class="main_listroom_item_header_icon" >
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    <div class="main_listroom_item_Name">Tên Khách Hàng</div>
    <div class="CCCD">CCCD:</div>
    <div class="main_listroom_item_line"></div>
    <div class="main_listroom_item_status">Phòng Sẵn Sàng</div>
    
    <div class="main_listroom_item_check">
        <div class="main_listroom_item_checkin">
        <i class="fa-regular fa-clock"></i>
            Ngày nhận phòng: 
        </div>
        <div class="main_listroom_item_checkout">
        <i class="fa-regular fa-clock"></i>
                Ngày trả phòng: 
        </div>
    </div>
    <div class="main_listroom_item_timecheckin">Thời gian nhận phòng :</div>
    <div class="main_listroom_item_button">
        <div class="main_listroom_item_button_checkin">Nhận Phòng</div>
        <div class="main_listroom_item_button_checkout">Trả Phòng</div>

    </div>`
        buttoncheckout[x].addEventListener("click",()=>{
                confirm.style.display =`flex`
                background.style.display =`flex`
                document.querySelector(".confirm_button_ok").addEventListener("click",()=>{
                    status[x].innerHTML = "Phòng Sẵn Sàng" 
                    confirm.style.display =`none`
                    background.style.display =`none`
                    room[x].innerHTML=checkoutfill
                    floors.querySelectorAll(".main_listroom_item_button_checkout")[x].style.opacity=`0`
                    checkin()
                })
                document.querySelector(".confirm_button_cancel").addEventListener('click',()=>{
                    confirm.style.display =`none`
                    background.style.display =`none`
                })
                

            })
     }
       


    


//buutoncheckin
function checkin()
{
    for(let i =0;i<4;i++)
    {  
        //button tra phong
        let floors= document.querySelector(`.main_listroom_items_${i+1}`)
        let buttoncheckin = floors.querySelectorAll(".main_listroom_item_button_checkin")
        let confirm = document.querySelector(".confirm")
        let background = document.querySelector(".background")

   
        buttoncheckin.forEach((bci,x)=>{
            bci.addEventListener("click",()=>{
                confirm.style.display =`flex`
                background.style.display =`flex`
                confirm.querySelector('.confirm_text').innerHTML="Xac Nhận Nhận Phòng"
                document.querySelector(".confirm_button_ok").addEventListener("click",()=>{
                    floors.querySelectorAll(".main_listroom_item_status")[x].innerHTML = `Đã Nhận Phòng` 
                    confirm.style.display =`none`
                    background.style.display =`none`
                    floors.querySelectorAll(".main_listroom_item_button_checkin")[x].style.opacity = `0`
                    floors.querySelectorAll(".main_listroom_item_button_checkout")[x].style.opacity=`1`
                    checkout(floors,x,i)
                    let time = getime()
                    floors.querySelectorAll(".main_listroom_item_timecheckin")[x].innerHTML = "Thời gian nhận phòng : "+ time
                    
                })
                document.querySelector(".confirm_button_cancel").addEventListener('click',()=>{
                    confirm.style.display =`none`
                    background.style.display =`none`
                })
                

            })
        })
       
}
}

checkin()
//lay time
function getime()
{
    let timenow = new Date()
    console.log(timenow.getHours()+"h, ")
    console.log(timenow.getMinutes()+"p")
    return timenow.getHours()+"h"+timenow.getMinutes()+"p"
}