document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const progressBar = document.querySelector('.form-progress-bar');
    let currentStep = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateForm(currentStep)) {
                steps[currentStep].classList.remove('form-step-active');
                currentStep++;
                steps[currentStep].classList.add('form-step-active');
                updateProgressBar();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            steps[currentStep].classList.remove('form-step-active');
            currentStep--;
            steps[currentStep].classList.add('form-step-active');
            updateProgressBar();
        });
    });

    function validateForm(step) {
        // Add your validation logic here
        return true;
    }

    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Simulate fetching user name for demo purposes
    document.getElementById('userName').textContent = 'Ashley';
});
