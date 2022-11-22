function price() {
   let orderNum = document.getElementById("polaroidsNumber").value;
   let address = document.getElementById("address").value;
   for (let i = 0; i < 100; i++) {
      if (address.slice(i, i + 3).toLocaleUpperCase() == "KTM" || address.slice(i, i + 9).toLocaleUpperCase() == "KATHMANDU") {
         document.getElementById('price').innerText = orderNum * 15 + 100;
         break;
      } else {
         document.getElementById('price').innerText = orderNum * 15 + 150;
      }
   }

}
document.addEventListener('keyup', price);



// const form = document.querySelector("form"),
// fileInput = document.querySelector(".file-input"),
// progressArea = document.querySelector(".progress-area"),
// uploadedArea = document.querySelector(".uploaded-area");

// form.addEventListener("click", () =>{
//   fileInput.click();
// });

// fileInput.onchange = ({target})=>{
//   let file = target.files[0];
//   if(file){
//     let fileName = file.name;
//     if(fileName.length >= 12){
//       let splitName = fileName.split('.');
//       fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
//     }
//     uploadFile(fileName);
//   }
// }

// function uploadFile(name){
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "php/upload.php");
//   xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//     let fileLoaded = Math.floor((loaded / total) * 100);
//     let fileTotal = Math.floor(total / 1000);
//     let fileSize;
//     (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
//     let progressHTML = `<li class="row">
//                           <i class="fas fa-file-alt"></i>
//                           <div class="content">
//                             <div class="details">
//                               <span class="name">${name} • Uploading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//     uploadedArea.classList.add("onprogress");
//     progressArea.innerHTML = progressHTML;
//     if(loaded == total){
//       progressArea.innerHTML = "";
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${name} • Uploaded</span>
//                                 <span class="size">${fileSize}</span>
//                               </div>
//                             </div>
//                             <i class="fas fa-check"></i>
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//     }
//   });
//   let data = new FormData(form);
//   xhr.send(data);
// }

function popup() {
   if (document.getElementById("polaroidsNumber").value == "" || document.getElementById("polaroidsNumber").value > 110 || document.getElementById("polaroidsNumber").value < 10 || document.getElementById("polaroidsNumber").value%2 != 0  ) {
      polaroidsNumber.style.border ="solid red 1.5px";
   } else {
      let cusName = document.getElementById('first_name').value + " " + document.getElementById('last_name').value
      let odrNum = parseInt(document.getElementById("polaroidsNumber").value);
      client = filestack.init('Al6g2mdEKRUKpzAxvS2MVz');
      const options = {

         onFileUploadFinished: finished => {

            document.querySelectorAll('.wrapper form')[0].style.border = "2px solid #6990F2";
            document.getElementById('status').innerText = "Upload successful! 👍";
         },
         transformations: {
            crop: true,
            circle: false,
            rotate: true
         },
         accept: ["image/*"],
         maxFiles: odrNum,
         minFiles: odrNum,
         uploadConfig: {
            tags: {
               "customer Name": cusName,
               "other info": 'other data',
            }
         },
         fromSources: ["local_file_system", "instagram", "facebook"],
      };
      client.picker(options).open();
   }

}
document.getElementById('uploadArea').addEventListener("click", popup);


let paymentOption = document.getElementsByTagName('select')[0].value;
let cusName = document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
let cusMail = document.getElementById('email').value;
let address = document.getElementById("address").value;
let orderNum = document.getElementById("polaroidsNumber").value;

function paymentch() {
   document.getElementById('paymentChoosen').innerText = paymentOption = document.getElementsByTagName('select')[0].value;

};
function alertOff() {
   polaroidsNumber.style.border ="";
}
paymentOption = document.getElementsByTagName('select')[0].addEventListener('click', paymentch);
polaroidsNumber.addEventListener('click', alertOff);