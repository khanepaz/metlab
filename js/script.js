  
  
  
  var typed = new Typed('.typed-text', {
    strings: ["استانداردهای آزمایشگاهی", " الزامات ISO 17025", "تکنولوژی های تولید فولاد", " مقالات و پژوهش ها"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
    startDelay: 500,
    backDelay: 1500
});
var typedAbout = new Typed('.typed-about', {
  strings: ["حامد خانه‌پز | کارشناس ارشد رشته مهندسی مواد متالورژی دانشگاه علم و صنعت ایران", "حامد خانه‌پز | مشاور در زمینه تشریح الزامات استاندارد ISO 17025", "حامد خانه‌پز | مدیر فنی آزمایشگاه خواص مکانیکی و آنالیز شیمیایی", "حامد خانه‌پز | طراح وب تخصصی در زمینه های مختلف علمی"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  startDelay: 0,
  backDelay: 1500
});


  function showWhatsAppModal(event) {
    event.preventDefault();
    Swal.fire({
        title: "ارتباط از طریق واتس‌اپ",
        text: "آیا مایل به تماس از طریق واتس‌اپ هستید؟",
        icon: "question",
        confirmButtonText: "بله، برو واتس‌اپ",
        cancelButtonText: "خیر",
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://wa.me/989193898001 ", "_blank");
        }
    });
}

window.onerror = function(message, source, lineno, colno, error) {
  if (source.includes('slides.min.js')) {
    console.error('Slides.js Error:', message, 'at', source, 'line', lineno);
    return true; // از انتشار بیشتر خطا جلوگیری می‌کند
  }
};

  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash.replace('#', '');
    const targetSlide = document.querySelector(`section[id="${hash}"]`);

    if (targetSlide) {
      const index = Array.from(document.querySelectorAll('.slide')).indexOf(targetSlide);
      if (!isNaN(index) && index >= 0) {
        window.changeSlide(index + 1); // changeSlide starts from 1
      }
    }
  });



  $(function () {
    var slideKey = 175;
    if (!window.swipers) { window.swipers = {}; }
    if (!window.swipers[slideKey]) { window.swipers[slideKey] = []; }
    $('.swiper-' + slideKey).each(function () {
      var thisKey = window.swipers[slideKey].length;
      window.swipers[slideKey][thisKey] =
        new Swiper(this, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-175-next',
            prevEl: '.swiper-175-prev',
          },

          observer: true,
          observeParents: true,
          updateOnWindowResize: true,
          breakpoints: {
            767: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        });
    });
  });

  function showWhatsAppModal(event) {
    event.preventDefault();
    Swal.fire({
      title: "ارتباط از طریق واتس‌اپ",
      text: "آیا مایل به تماس از طریق واتس‌اپ هستید؟",
      icon: "question",
      confirmButtonText: "بله، برو واتس‌اپ",
      cancelButtonText: "خیر",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://wa.me/989193898001 ", "_blank");
      }
    });
  }


      // ساخت اسلایدر تصاویر
      var swiperImage = new Swiper(".mySwiperImage", {
        spaceBetween: 30,
        loop: true,
      });
  
      // ساخت اسلایدر متن
      var swiperText = new Swiper(".mySwiperText", {
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".next-164",
          prevEl: ".prev-164",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
  
      // متصل کردن دو اسلایدر به هم
      swiperImage.controller.control = swiperText;
      swiperText.controller.control = swiperImage;



      function showNewsletterAlert() {
    const emailInput = document.querySelector('.slides-form input[name="email"]');
    const email = emailInput.value.trim();

    // اعتبارسنجی ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'ایمیل نامعتبر',
        text: 'لطفاً یک ایمیل معتبر وارد کنید.',
        confirmButtonText: 'متوجه شدم'
      });
      return;
    }

    // نمایش SweetAlert


    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "ایمیل شما با موفقیت ارسال شد",
      showConfirmButton: true,
      timer: 3000
    });


  }

