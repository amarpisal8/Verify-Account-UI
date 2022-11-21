let otp_boxes = document.querySelector(".otp"); //Yes
otp_boxes[0].focus();   //Yes
const otp = "123456";   //Yes
let bag = "";   //Yes
otp_boxes.forEach((e, i) => {   //Yes
    e.addEventListener("keydown", (event) => {  //Yes
        if(i === otp_boxes.length - 1) {    //Yes
            return; //Yes
        }   //Yes
        if (event.key >= 0 && event.key <= 9) {  //Yes
            e.classList.add("valid")    //Yes
            setTimeout(() => {  //Yes
                otp_boxes[i + 1].focus();   //Yes
            }, 100);
        } else if((event.key = "Backspace")) {  //Yes
            setTimeout(() => {  //Yes
                otp_boxes[i - 1].value = "";
                otp_boxes[i - 1].focus(); 
            }, 100);
        }
    });
});
