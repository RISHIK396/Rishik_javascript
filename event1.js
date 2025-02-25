let div = document.getElementById('div1');
// console.log(div);
const img1 = document.createElement("img"); 
// img1.src="https://gifdb.com/images/high/ishowspeed-gif-file-5394kb-atg9x13lqg19m5w9.gif";
img1.alt="iShowSpeed"
div.onmouseover=()=>{
    document.querySelector('body').appendChild(img1);
    alert("Hey you just entered a div");
}

let button = document.getElementById("btn1");
let img2 = document.createElement("img");
img2.src="https://miro.medium.com/v2/resize:fit:888/1*MpftMUhNlpMfQF22iZCd7A.gif";
img2.alt="Phir Hera Pheri";
button.onclick=(evt)=>{
    console.log("Damn You clicked the button");
    document.querySelector("body").appendChild(img2);
    // console.log(evt);
    console.log(evt.type);
    console.log(evt.X,evt.Y);

}

let mode="light";
let mode_button = document.getElementById("btn3");

mode_button.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="white";
        
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor ="black";

    }
})