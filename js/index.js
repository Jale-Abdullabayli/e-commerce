proposalButton = $('.proposal');
proposalButton.click(function() {
    priceProposal = $('.priceProposal').offset().top;

    window.scrollTo({
        top: priceProposal,
        behavior: 'smooth',
    })
})


//menuToggle
menu = $(".menuButton");
navbarCollapse = $('.navbar-collapse');
menu.click(function() {
    navbarCollapse.toggleClass('opened');
    $('.menuIcon').toggleClass('open');
})