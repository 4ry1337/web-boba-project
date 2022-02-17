// changing time
var date = new Date()
const oc = document.getElementById("OC")
if( date.getHours()<11 || date.getHours()>22){
  oc.innerHTML = "closed"
  oc.style.color = "#F37272"
}

// category buttons
var btn_c = document.getElementById("cat")
var cat_btns = btn_c.getElementsByClassName("button_cat")
for(var i=0; i<cat_btns.length; i++){
  cat_btns[i].addEventListener("click", function (){
    var current = document.getElementById("cat").getElementsByClassName("cat_active")
    current[0].className = current[0].className.replace("cat_active")
    this.className +=" cat_active"
  })
}