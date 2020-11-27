//БУРГЕР МЕНЮ

let nav = document.querySelector('.navbar-nav'),
    collapse = document.querySelector('.navbar-toggler'),
    burger = document.querySelector('.burger'),
    body = document.querySelector('body');

collapse.addEventListener('click', function () {
    nav.classList.toggle('show-menu');
    burger.classList.toggle('close');
    body.classList.toggle('lock');
});

//КАРУСЕЛЬ

$('.carousel').carousel({
    interval: false,
    ride: false,

});

//ТАБЫ

let tabNav = document.querySelectorAll('.tab-nav__item'),
    tabContent = document.querySelectorAll('.tab-content__item'),
    tabName;

tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
});

function selectTabNav() {
    tabNav.forEach(function (item) {
        item.classList.remove('active');
    });

    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    });
};

//WOW

new WOW().init();

//АНИМАЦИЯ

//const animItems = document.querySelectorAll('.anim-items');
//
//if (animItems.length > 0) {
//    window.addEventListener('scroll', animOnScroll);
//
//    function animOnScroll() {
//        for (let i = 0; i < animItems.length; i++) {
//            const animItem = animItems[i];
//            const animItemHeight = animItem.offsetHeight;
//            const animItemOffset = offset(animItem).top;
//            const animStart = 4;
//            
//            let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//            if (animItemHeight > window.innerHeight) {
//                animItemPoint = window.innerHeight - window.innerHeight / animStart;
//            }
//
//            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                animItem.classList.add('active-anim');
//            } else {
//                if (!animItem.classList.contains('anim-no-hide')) {
//                    animItem.classList.remove('active-anim');
//                }
//            }
//        }
//    }
//
//    function offset(el) {
//        let rect = el.getBoundingClientRect(),
//            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//        return {
//            top: rect.top + scrollTop,
//            left: rect.left + scrollLeft
//        }
//    }
//    setTimeout(() => {
//        animOnScroll();
//    },300);
//}
