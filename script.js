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