// Add this script to handle click events
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function (dropdown) {
      var checkbox = dropdown.querySelector('input[type="checkbox"]');
  
      checkbox.addEventListener('change', function () {
        dropdown.querySelector('.dropdown-content').style.display = checkbox.checked ? 'block' : 'none';
      });
    });
  });
  