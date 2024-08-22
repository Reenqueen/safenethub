


document.addEventListener('DOMContentLoaded', () => {
    clickedbar();
    addprofile();
    category();
});
function category() {
        const categorySelect = document.getElementById('category');
    const courseCards = document.querySelectorAll('.course-card');

    categorySelect.addEventListener('change', function () {
        const selectedCategory = this.value;

        courseCards.forEach(card => {
            if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function addprofile(){
    const profilePictureInput = document.getElementById('profile-picture-input');
    const profilePicture = document.querySelector('.profile-picture img');

    profilePictureInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

function clickedbar(){
        // Get all navigation list items
        const navItems = document.querySelectorAll('li');
        console.log(navItems);
        // Add click event listener to each list item
        navItems.forEach(item => {
            item.addEventListener('click', handleNavLinkClick);
        });

}
    // Function to handle navigation link clicks
    function handleNavLinkClick(event) {
        // Prevent default action
        event.preventDefault();

        // Get the target section ID from href attribute
        const targetId = event.currentTarget.querySelector('a').getAttribute('href').substring(1);
            const currentState = history.state;
            if (!currentState || currentState.pageId !== targetId){
                const path = `#${targetId}`;
                history.pushState({ pageId: 'navclick' }, '', path);
                }
            displayitems();
    }

  function displayitems(){
        let currenthash = window.location.hash.split('#').pop();
        const targetSection = document.getElementById(currenthash);
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the target section
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
  }

