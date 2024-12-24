<div class="subscribe">
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

        <button type="submit" class="subscribe__button"><span>+</span></button>
    </form>

    <div class="subscribe__receipt">
        <div class="subscribe__receipt-header">
            <h5 class="subscribe__receipt-title">Subscription Receipt</h5>
            <h5 class="subscribe__receipt-title">The Seattle Sun</h5>
        </div>
        <div class="subscribe__receipt-body">
            <div class="subscribe__receipt-item">
                <div class="subscribe__receipt-label">Volume:</div>
                <div class="subscribe__receipt-value"><span class="volume">Metro</span></div>
            </div>

            <div class="subscribe__receipt-item">
                <div class="subscribe__receipt-label">When:</div>
                <div class="subscribe__receipt-value"><span class="when">Mondays A.M.</span></div>
            </div>

            <div class="subscribe__receipt-item">
                <div class="subscribe__receipt-label">Email:</div>
                <div class="subscribe__receipt-value user-input" id="email-value">&nbsp;</div>
            </div>

            <div class="subscribe__receipt-item">
                <div class="subscribe__receipt-label">Status:</div>
                <div class="subscribe__receipt-value user-input">
                    <div class="status-update">
                        <div class="spinner htmx-indicator" id="spinner" htmx-indicator>
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
                <p class="subscribe__receipt-meta-value date" id="current-date">01 Jan</p>
            </div>

            <div class="subscribe__receipt-meta">
                <p class="subscribe__receipt-meta-label">Time</p>
                <p class="subscribe__receipt-meta-value time" id="current-time">12:00</p>
            </div>  

            <div class="subscribe__receipt-meta">
                <p class="subscribe__receipt-meta-label">Country</p>
                <p class="subscribe__receipt-meta-value country" id="current-country">SEA</p>
            </div>  
        </div>
    </div>
</div>