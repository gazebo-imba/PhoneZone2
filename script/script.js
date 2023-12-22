window.addEventListener('load', function() {
    var links = document.getElementsByTagName('a');
    
    for (var i = 0; i <links.length; i++) {
      links[i].addEventListener('mouseover', function() {
        this.style.color = '#66fcf1';
      });
      
      links[i].addEventListener('mouseout', function() {
        this.style.color = '';
      });
    }
  });

  
var products = document.getElementsByClassName("product");

for (var i = 0; i <products.length; i++) {
  products[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#374785";
    this.style.color = "#F76C6C";
  });

  products[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });
}
  
