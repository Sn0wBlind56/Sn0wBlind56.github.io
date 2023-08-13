/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".nav .link").on('click', function(event) {
        // Should have been set automatically through href by clicking the link
        if (this.hash === "") {
            return;
        }

        var indexPage = window.location.pathname.indexOf("index.html");

        if (indexPage && indexPage > 0) {
            var hash = this.hash;
            event.preventDefault();
    
            $('html').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// navbar toggle
$('.nav .link').click(function(){
    $('#nav-toggle').toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
