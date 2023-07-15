/* eslint-disable no-undef */
(function ($) {
  'use strict'

  // Spinner
  const spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show')
      }
    }, 1)
  }
  spinner()

  // Initiate the wowjs
  new WOW().init()

  // Dropdown on mouse hover
  const $dropdown = $('.dropdown')
  const $dropdownToggle = $('.dropdown-toggle')
  const $dropdownMenu = $('.dropdown-menu')
  const showClass = 'show'

  $(window).on('load resize', function () {
    if (this.matchMedia('(min-width: 992px)').matches) {
      $dropdown.hover(
        function () {
          const $this = $(this)
          $this.addClass(showClass)
          $this.find($dropdownToggle).attr('aria-expanded', 'true')
          $this.find($dropdownMenu).addClass(showClass)
        },
        function () {
          const $this = $(this)
          $this.removeClass(showClass)
          $this.find($dropdownToggle).attr('aria-expanded', 'false')
          $this.find($dropdownMenu).removeClass(showClass)
        }
      )
    } else {
      $dropdown.off('mouseenter mouseleave')
    }
  })

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow')
    } else {
      $('.back-to-top').fadeOut('slow')
    }
  })
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300, 'easeInOutExpo')
    return false
  })

  $(document).ready(function () {
    $('.nav-link').click(function(e) {

        $('.nav-link').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        // e.preventDefault();
    });
  });

  $(window).scroll(function(){
    $('.section').each(function(){
        
        if($(window).scrollTop() > $(this).offset().top){
            // console.log($(this).attr('id'));

            var sectionId = $(this).attr('id');
            if(sectionId=="beranda"){
              $('a.nav-link[href="#beranda"]').addClass('active');
              $('a.nav-link[href="#informasi"]').removeClass('active');
            }else{
              $('a.nav-link[href="#informasi"]').addClass('active');
              $('a.nav-link[href="#beranda"]').removeClass('active');
            }
        }
        
    });
});
    
})(jQuery)
