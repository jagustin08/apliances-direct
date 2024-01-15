$(document).ready(function() {
    // get started

    // Tooltip configuration
    tippy.setDefaultProps({
        allowHTML: true,
        hideOnClick: true,
        // trigger: 'click',
        placement: 'top-end',
        offset: [5, 10],
        maxWidth: 187,
        theme: 'white',
        animation: 'shift-away',
        zIndex: 1020,
    });

    tippy('[data-tippy-content]');
    tippy('[data-template]', {
        content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        template.style.display = 'block';
        return template;
        },
    });    


    $('.logo-container, #ad-arrow-logo').css(
        '-webkit-animation-play-state', 'running'
    );

    $('.logo-container, #ad-arrow-logo').on('animationend', function() {
        $('.preloader-container').fadeOut('slow');
    });
});