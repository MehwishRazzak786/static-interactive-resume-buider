var toggleEducation = document.getElementById('toggle-education');
var educationSection = document.getElementById('education');
var toggleSkills = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
var toggleWorkExperience = document.getElementById('toggle-work-experience');
var workExperienceSection = document.getElementById('work-experience');
// Toggle Education Section
toggleEducation.addEventListener('click', function () {
    var educationDetails = educationSection.querySelector('ul');
    if (educationDetails.style.display === 'none') {
        educationDetails.style.display = 'block';
        toggleEducation.textContent = 'Hide Education';
    }
    else {
        educationDetails.style.display = 'none';
        toggleEducation.textContent = 'Show Education';
    }
});
// Toggle Skills Section
toggleSkills.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleSkills.textContent = 'Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleSkills.textContent = 'Show Skills';
    }
});
// Toggle Work Experience Section
toggleWorkExperience.addEventListener('click', function () {
    var workExperienceDetails = workExperienceSection.querySelector('ul');
    if (workExperienceDetails.style.display === 'none') {
        workExperienceDetails.style.display = 'block';
        toggleWorkExperience.textContent = 'Hide Work Experience';
    }
    else {
        workExperienceDetails.style.display = 'none';
        toggleWorkExperience.textContent = 'Show Work Experience';
    }
});
