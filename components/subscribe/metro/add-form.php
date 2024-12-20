<div class="subscribe">
    <div class="subscribe__info">
        <?php get_template_part('components/dividers/top-divider'); ?>

        <div class="subscribe__info-wrapper">
            <h4 class="subscribe__title">
                <?php get_template_part('svg/icon-paper-airplane'); ?>

                <span class="subscribe__title-label">Subscribe to Metro</span>
            </h4>

            <p class="subscribe__headline | copy-3">Local News from the Pacific Northwest. Get it in your inbox.</p>
        </div>

    </div>

    <div class="subscribe__form-wrapper">
        <form
            hx-post="<?php echo admin_url('admin-ajax.php?action=subscribe'); ?>"
            hx-target=".status-update"
            hx-swap="innerHTML"
            hx-indicator="#spinner"
            hx-on="htmx:afterSwap: document.querySelector('.status-update')?.classList.add('fade-in');"
            class="subscribe__form">

            <label for="email-input" class="subscribe__label">Email</label>

            <input 
                type="email" 
                name="email" 
                class="subscribe__input" 
                id="email-input" 
                placeholder="hello@gmail.com"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Email address"
                autocomplete="email"
                data-1p-ignore 
                required 
            />
            <input type="hidden" name="email_list_id" value="67f01c5c-2fd0-47dc-9338-df47135122cf">

            <button type="submit" class="subscribe__button">Subscribe</button>
        </form>

        <div class="subscribe__receipt">
            <div class="subscribe__receipt-header">
                <h5 class="subscribe__receipt-title">Subscription Receipt</h5>
                <h5 class="subscribe__receipt-title">The Seattle Sun</h5>
            </div>
            <div class="subscribe__receipt-body">
                <div class="subscribe__receipt-item">
                    <div class="subscribe__receipt-label">Volume:</div>
                    <div class="subscribe__receipt-value">Metro</div>
                </div>

                <div class="subscribe__receipt-item">
                    <div class="subscribe__receipt-label">When:</div>
                    <div class="subscribe__receipt-value">Mondays A.M.</div>
                </div>

                <div class="subscribe__receipt-item">
                    <div class="subscribe__receipt-label">Email:</div>
                    <div class="subscribe__receipt-value handwritten" id="email-value">&nbsp;</div>
                </div>

                <div class="subscribe__receipt-item">
                    <div class="subscribe__receipt-label">Status:</div>
                    <div class="subscribe__receipt-value">
                        <div class="status-update">
                            <div class="lds-ring htmx-indicator" id="spinner" htmx-indicator>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="subscribe__receipt-footer">
                <div class="subscribe__receipt-meta">
                    <p class="subscribe__receipt-meta-label">Date</p>
                    <p class="subscribe__receipt-meta-value handwritten" id="current-date">01 Jan</p>
                </div>

                <div class="subscribe__receipt-meta">
                    <p class="subscribe__receipt-meta-label">Time</p>
                    <p class="subscribe__receipt-meta-value handwritten" id="current-time">12:00</p>
                </div>  

                <div class="subscribe__receipt-meta">
                    <p class="subscribe__receipt-meta-label">Country</p>
                    <p class="subscribe__receipt-meta-value handwritten" id="current-country">SEA</p>
                </div>  
            </div>
        </div>
    </div>
</div>

<script>

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

        // Function to update time and date


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
</script>