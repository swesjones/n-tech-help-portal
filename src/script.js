document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('user-email');
    const hiddenEmailInput = document.getElementById('hidden-email');
    const hiddenSubjectInput = document.getElementById('hidden-subject');
    const descriptionTextarea = document.getElementById('description');
    const helpItems = document.querySelectorAll('.help-item');
    const form = document.getElementById('helpdesk-form');
    const logo = document.getElementById('ntechbot');

    emailInput.addEventListener('input', function() {
        hiddenEmailInput.value = emailInput.value;
    });

    descriptionTextarea.addEventListener('input', function() {
        hiddenSubjectInput.value = `[Ticket Kiosk] ${descriptionTextarea.value}`;
    });

    helpItems.forEach(item => {
        item.addEventListener('click', function() {
            hiddenSubjectInput.value = `[Ticket Kiosk] ${this.getAttribute('data-item')}`;
        });
    });

    // Initialize hidden email and subject fields
    hiddenEmailInput.value = emailInput.value;
    hiddenSubjectInput.value = '[Ticket Kiosk]';
});