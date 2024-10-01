
// For Sidebar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});


// For Dropdown Business
document.addEventListener('DOMContentLoaded', function () {
    const businessToggle = document.getElementById('business-toggle');
    const businessDropdown = document.getElementById('business-dropdown');

    businessToggle.addEventListener('click', function () {
        businessDropdown.classList.toggle('hidden');
    });
});


// Lood Footer 
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the footer:', error));
});

// For Dropdown Internal Business
document.addEventListener("DOMContentLoaded", () => {
    const businessLink = document.getElementById("business-link-unique");
    const businessDropdown = document.getElementById("business-dropdown-unique");

    businessLink.addEventListener("click", (event) => {
        event.preventDefault();
        businessDropdown.classList.toggle("hidden");
    });
});

