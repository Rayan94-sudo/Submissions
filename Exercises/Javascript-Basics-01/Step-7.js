function f() {
  var aShoe_size = document.getElementById("shoe_size").value;
  var birth_year = document.getElementById("year").value;
  aShoe_size = (aShoe_size * 2 + 5) * 50 - birth_year + 1766;
  alert(aShoe_size);
}
