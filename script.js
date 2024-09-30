document.getElementById('menu-btn').addEventListener('click', function () {
    const menuIcon = document.getElementById('menu-icon');
    const dropdown = document.getElementById('dropdown');
  
    // Toggle between hamburger and close icon
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
      dropdown.classList.remove('hidden'); // Show the dropdown
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      dropdown.classList.add('hidden'); // Hide the dropdown
    }
  });
  