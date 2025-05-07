// الكود لجعل الفيديو يعمل عند فتح الموقع
 
window.onload = function() {  
    var video = document.getElementById("myVideo");  
    video.play();  
};  



// الكود الذي يجعل القائمة المنسدلة مغلقة عند فتح الموقع و عند الضغط تفتح


const button = document.getElementById('toggleButton');  
const element = document.getElementById('myElement');  

button.addEventListener('click', () => {  
    if (element.classList.contains('hidden')) {  
        element.classList.remove('hidden'); // إظهار العنصر  
    } else {  
        element.classList.add('hidden'); // إخفاء العنصر  
    }  
}); 






// كود زر الوضع المظلم


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }



var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});



// كود زر الوضع المظلم للموبايل


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }



var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon1');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon1');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle1');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});



// كود الحركة للاقسام من scrollreveal
ScrollReveal().reveal('.feature' , {
    delay:1000,
    //  تأخير الظهور
    duration:1000,
    // مدة الحركة بالميلي ثانية
    distance:'300px',
    // مقدار التحرك قبل الظهور
    origin:'left',
    // جهة الحركة
    easing:'ease-in-out',
    // نوع الحركة
});
ScrollReveal().reveal('.shapes' , {
    delay:1000,
    //  تأخير الظهور
    duration:1000,
    // مدة الحركة بالميلي ثانية
    distance:'300px',
    // مقدار التحرك قبل الظهور
    origin:'right',
    // جهة الحركة
    easing:'ease-in-out',
    // نوع الحركة
});
ScrollReveal().reveal('.dishes1' , {
    delay:500,
    //  تأخير الظهور
    duration:1000,
    // مدة الحركة بالميلي ثانية
    distance:'200px',
    // مقدار التحرك قبل الظهور
    origin:'left',
    // جهة الحركة
    easing:'ease-in-out',
    // نوع الحركة
});
ScrollReveal().reveal('.dishes2' , {
    delay:500,
    duration:1000,
    distance:'200px',
    origin:'right',
    easing:'ease-in-out',
});
ScrollReveal().reveal('.img-dishes' , {
    delay:500,
    duration:2200,
    distance:'200px',
    origin:'bottom',
    easing:'ease-in-out',
});
ScrollReveal().reveal('.faq1' , {
    delay:500,
    duration:2200,
    distance:'200px',
    origin:'right',
    easing:'ease-in-out',
});
ScrollReveal().reveal('.faq2' , {
    delay:500,
    duration:2200,
    distance:'200px',
    origin:'left',
    easing:'ease-in-out',
});


ScrollReveal().reveal('.statistics' , {
    delay:2600,
    duration:2200,
   
    easing:'ease-in-out',
});

ScrollReveal().reveal('.test' , {
    delay:2600,
    duration:900,
   
    easing:'ease-in-out',
});



// السلايدر

const swiper = new Swiper('.swiper', {
    autoplay: {  
        delay: 1000,  
        disableOnInteraction: false, // للسماح بالتكملة بعد التفاعل  
       
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        // when window width is >= 480px
       570: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 768px
       768: {
          slidesPerView: 6,
          spaceBetween: 7
        }
      }
  }); 



// كود تحريك الفيديو الثاني عند قتح الموقع
  window.onload = function() {  
    var video = document.getElementById("myVideo1");  
    video.play();  
};






// كود offcanvas عند فتح الموقع

  // إظهار offcanvas عند تحميل الصفحة  
  window.onload = function() {  
    const offcanvas = document.getElementById('offcanvas');  
    offcanvas.classList.remove('hidden');  
    offcanvas.style.display = 'flex'; // ظهور offcanvas  
};  

// إغلاق offcanvas عند الضغط على زر "إغلاق"  
document.getElementById('closeButton').onclick = function() {  
    const offcanvas = document.getElementById('offcanvas');  
    offcanvas.classList.add('hidden');  
    offcanvas.style.display = 'none'; // إخفاء offcanvas  
};  

// يمكنك أيضاً جعل الزر يظهر offcanvas عند الحاجة  
document.getElementById('offcanvasButton').onclick = function() {  
    const offcanvas = document.getElementById('offcanvas');  
    offcanvas.classList.remove('hidden');  
    offcanvas.style.display = 'flex'; // ظهور offcanvas  
};  