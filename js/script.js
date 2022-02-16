// changing time
var date = new Date()
if( date.getHours()<11 || date.getHours()>22){
  document.getElementById("OC").innerHTML = "closed"
  document.getElementById("OC").style.color = "#F37272"
}

// modals
