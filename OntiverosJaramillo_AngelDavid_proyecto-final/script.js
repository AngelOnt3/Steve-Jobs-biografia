ocument.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll('.accordion');
  
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function() {
        this.classList.toggle('active');
        var details = this.nextElementSibling;
        
   
  if (details.style.display === 'table-row-group') {
          details.style.display = 'none';
        } 
   
  else {
          details.style.display = 'table-row-group';
        }
      }
    }
  });



  var slideIndex = 1;
showSlides(slideIndex);

