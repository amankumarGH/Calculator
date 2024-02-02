const value = document.querySelectorAll(".calculator-digits");
const display = document.querySelector(".display-value");
let string = "";

value.forEach((e) => {
  e.addEventListener("click", (val) => {
    if (val.target.innerHTML == "=") {
      display.innerHTML = eval(string);
      string = "";
    } else if (val.target.innerText === "X") {
      string = string.slice(0, string.length - 1);
      display.innerText = string;
    } else if (val.target.innerHTML == "C") {
      string = "";
      display.innerHTML = string;
    }else if(val.target.innerHTML=="M+"){
      display.innerText="undefined";
      string="";
    } 
    else {
      string += val.target.innerHTML;
      display.innerText = string;
    }
  });
});
