<script>
    // Function to toggle the display of the nav menu
    function toggleMenu() {
        const navLinks = document.querySelector('.navlinks');
        const navIcon = document.querySelector('.navicon');
        
        // Toggle the 'active' class to show or hide nav links
        navLinks.classList.toggle('active');
        navIcon.classList.toggle('active');
    }

    // Add the toggle function to the hamburger menu button
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
</script>
