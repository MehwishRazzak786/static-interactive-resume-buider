const toggleEducation = document.getElementById('toggle-education') as HTMLButtonElement;
const educationSection = document.getElementById('education') as HTMLElement;

const toggleSkills = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLElement;

const toggleWorkExperience = document.getElementById('toggle-work-experience') as HTMLButtonElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

// Toggle Education Section
toggleEducation.addEventListener('click', () => {
    const educationDetails = educationSection.querySelector('ul') as HTMLElement;
    if (educationDetails.style.display === 'none') {
        educationDetails.style.display = 'block';
        toggleEducation.textContent = 'Hide Education';
    } else {
        educationDetails.style.display = 'none';
        toggleEducation.textContent = 'Show Education';
    }
});

// Toggle Skills Section
toggleSkills.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleSkills.textContent = 'Hide Skills';
    } else {
        skillsList.style.display = 'none';
        toggleSkills.textContent = 'Show Skills';
    }
});

// Toggle Work Experience Section
toggleWorkExperience.addEventListener('click', () => {
    const workExperienceDetails = workExperienceSection.querySelector('ul') as HTMLElement;
    if (workExperienceDetails.style.display === 'none') {
        workExperienceDetails.style.display = 'block';
        toggleWorkExperience.textContent = 'Hide Work Experience';
    } else {
        workExperienceDetails.style.display = 'none';
        toggleWorkExperience.textContent = 'Show Work Experience';
    }
});
