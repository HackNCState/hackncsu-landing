// Registration Form Pagination and Validation

let currentSection = 1;
const totalSections = 4;

// Show/hide conditional fields
document.addEventListener('DOMContentLoaded', function () {
    // Level of Study - Other field
    document.getElementById('levelOfStudy').addEventListener('change', function () {
        const otherField = document.getElementById('levelOfStudyOther');
        if (this.value === 'other') {
            otherField.style.display = 'block';
            document.getElementById('levelOfStudyOtherText').required = true;
        } else {
            otherField.style.display = 'none';
            document.getElementById('levelOfStudyOtherText').required = false;
        }
    });

    // Gender - Other field
    document.getElementById('gender').addEventListener('change', function () {
        const otherField = document.getElementById('genderOther');
        if (this.value === 'other') {
            otherField.style.display = 'block';
            document.getElementById('genderOtherText').required = true;
        } else {
            otherField.style.display = 'none';
            document.getElementById('genderOtherText').required = false;
        }
    });

    // T-shirt Size - Other field
    document.getElementById('tshirtSize').addEventListener('change', function () {
        const otherField = document.getElementById('tshirtOther');
        if (this.value === 'other') {
            otherField.style.display = 'block';
            document.getElementById('tshirtOtherText').required = true;
        } else {
            otherField.style.display = 'none';
            document.getElementById('tshirtOtherText').required = false;
        }
    });

    // Dietary Restrictions - Other field
    document.getElementById('dietaryOtherCheck').addEventListener('change', function () {
        const otherField = document.getElementById('dietaryOther');
        if (this.checked) {
            otherField.style.display = 'block';
        } else {
            otherField.style.display = 'none';
            document.getElementById('dietaryOtherText').value = '';
        }
    });

    // How did you hear about us - Other field
    document.getElementById('hearAboutUs').addEventListener('change', function () {
        const otherField = document.getElementById('hearAboutUsOther');
        if (this.value === 'other') {
            otherField.style.display = 'block';
            document.getElementById('hearAboutUsOtherText').required = true;
        } else {
            otherField.style.display = 'none';
            document.getElementById('hearAboutUsOtherText').required = false;
        }
    });

    // Age validation
    document.getElementById('age').addEventListener('change', function () {
        if (parseInt(this.value) < 18) {
            alert('You must be 18 or older to participate in Hack_NCState.');
            this.value = '';
        }
    });
});

function nextSection(current) {
    // Validate current section before proceeding
    const currentSectionEl = document.querySelector(`.form-section[data-section="${current}"]`);
    const inputs = currentSectionEl.querySelectorAll('input[required], select[required]');

    let isValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.reportValidity();
            return;
        }
    });

    // Special validation for checkboxes that need at least one checked
    if (current === 4) {
        const attendReasons = currentSectionEl.querySelectorAll('input[name="attendReason"]:checked');
        if (attendReasons.length === 0) {
            alert('Please select at least one reason for attending.');
            isValid = false;
        }
    }

    if (!isValid) {
        return;
    }

    // Hide current section
    currentSectionEl.classList.remove('active');

    // Show next section
    const nextSectionEl = document.querySelector(`.form-section[data-section="${current + 1}"]`);
    nextSectionEl.classList.add('active');

    // Update progress indicator
    updateProgressIndicator(current + 1);

    // Scroll to top of form
    document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth', block: 'start' });

    currentSection = current + 1;
}

function prevSection(current) {
    // Hide current section
    const currentSectionEl = document.querySelector(`.form-section[data-section="${current}"]`);
    currentSectionEl.classList.remove('active');

    // Show previous section
    const prevSectionEl = document.querySelector(`.form-section[data-section="${current - 1}"]`);
    prevSectionEl.classList.add('active');

    // Update progress indicator
    updateProgressIndicator(current - 1);

    // Scroll to top of form
    document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth', block: 'start' });

    currentSection = current - 1;
}

function updateProgressIndicator(section) {
    // Remove active class from all steps
    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });

    // Add active class to current step
    const currentStep = document.querySelector(`.progress-step[data-step="${section}"]`);
    currentStep.classList.add('active');

    // Add completed class to previous steps
    for (let i = 1; i < section; i++) {
        const step = document.querySelector(`.progress-step[data-step="${i}"]`);
        step.classList.add('completed');
    }
}

// Form submission handler
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all sections
    const allInputs = this.querySelectorAll('input[required], select[required]');
    let isValid = true;

    allInputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Please fill out all required fields.');
        return;
    }

    // Collect form data
    const formData = new FormData(this);
    const data = {};

    listKeys = ['Dietary Restrictions', 'Excited to Meet Sponsors', 'Heard of Sponsors', 'Reasons for Participating'];

    otherKeys = ['dietaryOtherText', 'genderOtherText', 'levelOfStudyOtherText', 'tshirtOtherText', 'hearAboutUsOtherText'];

    // Handle regular inputs
    for (let [key, value] of formData.entries()) {
        if (listKeys.includes(key)) {
            // Handle multiple checkboxes
            if (!data[key]) {
                data[key] = [];
            }
            data[key].push(value);
        } else if (otherKeys.includes(key)) {
            if (key === 'dietaryOtherText' && value.trim() !== '') {
                if (!data['Dietary Restrictions']) {
                    data['Dietary Restrictions'] = [];
                }
                data['Dietary Restrictions'].push(value);
            } else if (key === 'genderOtherText' && value.trim() !== '') {
                data['Gender'] = value;
            } else if (key === 'levelOfStudyOtherText' && value.trim() !== '') {
                data['Level of Study'] = value;
            } else if (key === 'tshirtOtherText' && value.trim() !== '') {
                data['Shirt Size'] = value;
            } else if (key === 'hearAboutUsOtherText' && value.trim() !== '') {
                data['Heard of Hack_NCState Via'] = value;
            }
        } else {
            if (value !== 'other')
                data[key] = value;
        }
    }

    console.log('Form submitted:', new URLSearchParams(data).toString());

    fetch("https://script.google.com/macros/s/AKfycbw4rDwRn7d5ynAUGAAlCR9KyAZ0Jt9cpDeU5vleGbXqXfwFvUWBdCZ4sMCXrXLzPOO6lA/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data).toString()
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.success) {
                alert('Thank you for registering for Hack_NCState 2026! We will contact you with more information soon. Email us at hackncstate@ncsu.edu if you need to update your registration.');
            } else {
                // If duplicate or error, show custom message
                alert(`Registration failed: ${data.message || data.error || 'Please try again.'}`);
            }
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Network or script error:', error);
            alert('There was an error submitting your registration. Please try again later.');
        });

    window.location.href = './index.html';
});
