
// For Sidebar
document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const menuItems = document.getElementById('navbar-sticky');
            const sidebar = document.getElementById('sidebar');
            const closeSidebar = document.getElementById('close-sidebar');

            menuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                sidebar.setAttribute('aria-expanded', sidebar.classList.contains('hidden') ? 'false' : 'true');
            });

            closeSidebar.addEventListener('click', function() {
                sidebar.classList.add('hidden');
                sidebar.setAttribute('aria-expanded', 'false');
            });
        })


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

