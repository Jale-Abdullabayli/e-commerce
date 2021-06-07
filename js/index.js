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




function myFunction(x) {
    if (x.matches) {
        $('.nav-item.dropdown').click(function () {
            $(this).find('.dropdown_container').slideToggle();
        })
    }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x)
x.addListener(myFunction)