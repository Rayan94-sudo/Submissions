function reminder() {
  var a = document.getElementById("first_number").value;
  var b = document.getElementById("second_number").value;
  rem = a % b;
  alert("reminder: " + rem);
}
