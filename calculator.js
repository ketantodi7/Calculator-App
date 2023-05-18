let string = "";
let buttons = document.querySelectorAll(".cal-button");
let input = document.querySelector(".cal-input");
let preview = document.querySelector(".preview-body");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    string = String(string);
    let arr = ["+","-","*","/","%","."];
    if(arr.includes(string.charAt(string.length-1))&& arr.includes(e.target.innerHTML)){
    }
    else if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.innerHTML == "C") {
        string = ""
        input.value = string;
        preview.innerHTML = "0";
      }
    else if(e.target.innerHTML == "DE"){
      string = string.slice(0,-1);
      input.value = string;
    }
    else if(e.target.innerHTML == "√x"){

      string = Math.sqrt(parseInt(string)).toFixed(5);
      input.value = string;
    }
    else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
    preview.innerHTML = eval(string)?eval(string):"0";
  });
});