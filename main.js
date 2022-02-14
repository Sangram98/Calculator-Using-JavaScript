  //targeting the buttons
  var buttons = document.getElementById("buttons");
  //targeting all the li's
  var li = buttons.querySelectorAll("li");
  //for result
  var result = document.getElementById("result");

  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
      if (this.innerHTML == "=") {
    
        result.innerHTML= eval(result.innerHTML);
      } else if(this.innerHTML == 'c'){
          result.innerHTML= " ";

      }else {
          
        result.innerHTML += this.innerHTML;
      }
    });
  }