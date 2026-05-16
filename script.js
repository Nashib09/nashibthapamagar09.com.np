
// Show/Hide additional courses
const showMoreBtnC = document.getElementById('showMore-course');
const additionalCourses = document.getElementById('additional-courses');
const allCourses = document.getElementById('all-courses');

showMoreBtnC.addEventListener('click', () => {

  if (additionalCourses.classList.contains('d-none') && allCourses.classList.contains('d-none') ) {
    additionalCourses.classList.remove('d-none');
    showMoreBtnC.textContent = 'Show All';
  } else if (allCourses.classList.contains('d-none') && !additionalCourses.classList.contains('d-none')){
    allCourses.classList.remove('d-none');
    showMoreBtnC.textContent = 'Show Less';
  }else if (!additionalCourses.classList.contains('d-none') && !allCourses.classList.contains('d-none')){
    additionalCourses.classList.add('d-none');
    allCourses.classList.add('d-none'); 
    showMoreBtnC.textContent = 'Show More';
  }
});

// Show/Hide additional projects
const showMoreBtnP = document.getElementById('showMore-projects');
const additionalProjects = document.getElementById('additional-projects');
const allProjects = document.getElementById('all-projects');

showMoreBtnP.addEventListener('click', () => {

  if (additionalProjects.classList.contains('d-none') && allProjects.classList.contains('d-none') ) {
    additionalProjects.classList.remove('d-none');
    showMoreBtnP.textContent = 'Show All';
  } else if (allProjects.classList.contains('d-none') && !additionalProjects.classList.contains('d-none')){
    allProjects.classList.remove('d-none');
    showMoreBtnP.textContent = 'Show Less';
  }else if (!additionalProjects.classList.contains('d-none') && !allProjects.classList.contains('d-none')){
    additionalProjects.classList.add('d-none');
    allProjects.classList.add('d-none'); 
    showMoreBtnP.textContent = 'Show More';
  }
});