export function setupSubscribeForm() {

    let updateDateTime = () => {
        let now = new Date();
        
        // Update time
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12;
        document.getElementById('current-time').textContent = `${hours}:${minutes} ${period}`;

        // Update date
        const day = now.getDate().toString().padStart(2, '0');
        const month = now.toLocaleString('en-US', { month: 'short' });
        document.getElementById('current-date').textContent = `${month} ${day}`;
    };

    document.addEventListener('DOMContentLoaded', function() {
        const emailInput = document.getElementById('email-input');
        const emailValue = document.getElementById('email-value');
        const receipt = document.querySelector('.subscribe__receipt');

        emailInput.addEventListener('keyup', function() {
            // Check if input contains at least one valid email character
            const hasValidInput = /[a-zA-Z0-9.@_-]/.test(emailInput.value);
            
            // Show/hide receipt based on input
            if (hasValidInput) {
                receipt.style.display = 'block';
                // Small delay to ensure display: block is applied before adding the class
                setTimeout(() => {
                    receipt.classList.add('is-visible');
                }, 10);
            } else {
                receipt.classList.remove('is-visible');
                // Wait for animation to complete before hiding
                setTimeout(() => {
                    if (!receipt.classList.contains('is-visible')) {
                        receipt.style.display = 'none';
                    }
                }, 300);
            }
            
            // Update email value in receipt
            emailValue.textContent = emailInput.value || '\u00A0';
        });

        // Initial update
        updateDateTime();

        const currentCountryElement = document.getElementById('current-country');
        fetch('https://ipapi.co/country/')
            .then(response => response.text())
            .then(country => {
                currentCountryElement.textContent = country.split('').join('.') + '.';
            })
            .catch(() => {
            currentCountryElement.textContent = 'US'; // Fallback if fetch fails
        });
    });

    document.addEventListener("animationend", (event) => {
        if (event.target.classList.contains("fade-in")) {
            event.target.classList.remove("fade-in");
        }
    });

    // Clear status text when input is empty
    document.querySelector('.subscribe__input').addEventListener('input', (event) => {
        if (event.target.value.trim() === '') {
            updateDateTime();

            const statusElements = document.querySelectorAll('.status-update');
            statusElements.forEach(el => {
                if (!el.querySelector('#spinner')) {
                    el.textContent = '';
                }
            });
        }
    });


}