const socket = io.connect("http://localhost:3000/");


const chat = document.querySelector(".container2 a");
const container2 = document.querySelector(".container2");
const sender = document.querySelector(".sender");
const message = document.querySelector(".message");
const btn = document.querySelector(".btn");
const footer = document.querySelector(".footer");
const senderText = document.querySelector(".senderText");

btn.addEventListener("click",() => {
  if(sender.value === "" || message.value === "") return;

  socket.emit("data",{
    sender:sender.value,
    message:message.value
  });


});

socket.on("data",data => {
  footer.innerHTML += `<p><span>${data.sender}:</span>${data.message}</p>`;
  senderText.innerHTML = "";
  message.value = "";
});


message.addEventListener("keypress",() => {
  socket.emit("sender",sender.value);
})

socket.on("sender",data => {
  senderText.innerHTML = data + " writes...";
})

  chat.onclick = function (){
    container2.style.width = "0";
    container2.style.height = "0";
  }