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
        // Reset custom validity
        input.setCustomValidity('');

        // Check for whitespace only
        if ((input.type === 'text' || input.type === 'email' || input.type === 'tel') && input.value.trim() === '') {
            input.setCustomValidity('Please fill out this field.');
        }

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
        // Reset custom validity
        input.setCustomValidity('');

        // Check for whitespace only
        if ((input.type === 'text' || input.type === 'email' || input.type === 'tel') && input.value.trim() === '') {
            input.setCustomValidity('Please fill out this field.');
        }

        if (!input.checkValidity()) {
            isValid = false;
            input.reportValidity();
        }
    });

    if (!isValid) {
        return;
    }

    // Collect form data
    const formData = new FormData(this);
    const data = {};

    listKeys = ['Dietary Restrictions', 'Excited to Meet Sponsors', 'Heard of Sponsors', 'Reasons for Participating'];

    otherKeys = ['dietaryOtherText', 'genderOtherText', 'levelOfStudyOtherText', 'hearAboutUsOtherText'];

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
            } else if (key === 'hearAboutUsOtherText' && value.trim() !== '') {
                data['Heard of Hack_NCState Via'] = value;
            }
        } else {
            if (value !== 'other')
                data[key] = value;
        }
    }

    console.log('Form submitted:', new URLSearchParams(data).toString());

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="text-xl font-bold">Submitting...</span><span class="font-icon text-2xl">check</span>';

    fetch("https://script.google.com/macros/s/AKfycbwnhFAwh4VM9ogCE0feZPJsHRbVfP4UjyLxohbfRFPXSfEXXDafyd3-1Ur9y-whhzdaFw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data).toString()
    })
        .then(response => response.json())
        .then(data => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;

            console.log('Success:', data);
            if (data.result === 'success') {
                // Hide form and progress
                document.getElementById('registration-form').style.display = 'none';
                document.getElementById('progress-container').style.display = 'none';

                // Show success message
                const successMsg = document.getElementById('success-message');
                successMsg.classList.remove('hidden');

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert(`Sorry, we couldn't register you! ${data.message || data.error || 'Please try again.'}`);
            }
        })
        .catch(error => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;

            console.error('Network or script error:', error);
            alert('There was an error submitting your registration. Please try again later.');
        });
});
