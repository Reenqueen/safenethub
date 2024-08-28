//............................................................navigation section .........................................
let currentState = {};
let previousState = {};
 const initialState = window.location.hash.substr(1);
  showPage(initialState);


  if ('history' in window && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener('popstate', function (event) {
    event.preventDefault;
    var state = event.state;
    if (state) {
      showPage(state.pageId);
    previousState = currentState;
    currentState = event.state;
    //console.log('Current State:', currentState);
    //console.log('Previous State:', previousState);

    if (currentState && currentState.pageId) {
        showPage(currentState.pageId);
    } else {
        Initialpage();
    }
} else {
        Initialpage();
    }
});


  document.addEventListener('DOMContentLoaded', () => {
    clickedbar();
    addprofile();
    category();

    history.state;
   //console.log(history.state);
  if (history.state) {
    showPage(history.state.pageId);
   }
});

//........................................script to properly navigate the website...........................................

  function showPage(pageId) {

    switch (pageId) {
      case 'home':
        // Logic for the initial page
        Initialpage();;
        break;

      case 'navclick':
        // Logic for the nav bar clicks 
        displayitems();
        break;
      case 'course':
        //logic for the courses
        displaycourse();
        break;
      default:
        // Default case or fallback logic
        Initialpage();
        break;
    }
  }



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
        const navItems = document.querySelectorAll('li');
        //console.log(navItems);
        navItems.forEach(item => {
            item.addEventListener('click', handleNavLinkClick);
        });

}
    // Function to handle navigation link clicks
    function handleNavLinkClick(event) {
        
        event.preventDefault();

        const targetId = event.currentTarget.querySelector('a').getAttribute('href').substring(1);
            const currentState = history.state;
            if (!currentState || currentState.pageId !== targetId){
                const path = `#${targetId}`;
                history.pushState({ pageId: 'navclick' }, '', path);
                }
            displayitems();
    }

  function displayitems(){
        const currenthash = window.location.hash.split('#').pop();
        console.log(currenthash);
        if(currenthash=='home'){
            console.log('home');
            Initialpage();
        }else if(currenthash=='course'){
                document.querySelectorAll('.Course_info').forEach(Course_info=>{
                  Course_info.style.display='block';
                });
            navLinks(currenthash);

        }else{
            navLinks(currenthash);
    }
  }

  function navLinks(currenthash){
    const targetSection = document.getElementById(currenthash);
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
  }
 
  function Initialpage(){
        document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
        });
        const targetSection = document.getElementById('home');
              targetSection.style.display = 'block';
              targetSection.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('contact').style.display = 'block';
  }


let courseclicked = document.querySelectorAll('.more');
 courseclicked.forEach(course=>{
    course.addEventListener('click',(event)=>{
        event.preventDefault();
        const target_course = event.target.parentNode.querySelector('h4').getAttribute('info');
        const currentState = history.state;
        if (!currentState || currentState.pageId !== target_course){
            const path = `#course/${target_course}`;
            history.pushState({ pageId: 'course' }, '', path);
            }
        displaycourse();
    })      
 });

 function displaycourse(){
     const currenthash = window.location.hash.split('/').pop();
     const course_element = document.getElementById(currenthash);
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('courses').style.display='block';
    document.querySelectorAll('.Course_info').forEach(Course_info=>{
      Course_info.style.display='none';
    });
    let width = window.innerWidth;
    let styles = '';
    if (width<769) {
        styles='display:'+'block;'+'padding:'+'5px;';
        //console.log(width);
    }else{
        //console.log(width);
        styles='display:'+'flex;'+'padding:'+'5px;';

    }
     course_element.querySelectorAll('.course-card').forEach(card=>{
        card.style.margin='10px';
    });
    course_element.setAttribute('style',`${styles}`);
 }