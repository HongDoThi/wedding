function openTab(tabName) {
    var tabLink = document.querySelectorAll('ul.tab__link li.tab__link__item');
    console.log(tabLink);
    var tabContent = document.querySelectorAll('.tab__content ');
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove('active1');
    }
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active2');
    }
    document.getElementById(tabName).classList.add('active2');
    event.currentTarget.classList.add('active1');
}




var allEffect = {
    init: function() {
        this.menu();
        this.loadpage();
        this.scrollTop();
        this.iconBar();
        this.setting();
        this.countdown();
    },
    menu: function() {

        var menu = document.querySelector('.top__menu');
        var event__section = document.querySelector('.event__section');
        window.addEventListener('scroll', function() {
            console.log(window.scrollY);
            if (window.scrollY > 100) {
                menu.classList.add('menuScroll');
            } else {
                menu.classList.remove('menuScroll');
            }
            if (window.scrollY > 1317) {
                event__section.classList.add('fadeIn');
            } else {
                event__section.classList.remove('fadeIn');
            }
        });
    },
    iconBar: function() {
        var iconBar = document.querySelector('.iconRes');
        var nav = document.querySelector('.menu__top__right');
        var li = document.querySelectorAll('ul.nav__top li.nav__link');
        var nav__sub = document.querySelectorAll('ul.nav__top__submenu');

        iconBar.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        li.forEach((item, i) => {
            item.addEventListener('click', () => {
                nav__sub.forEach(function(it, index) {
                    nav__sub[i].classList.add('active');
                });

            });
        })

    },
    loadpage: function() {
        var load = document.querySelector('.load');

        function loading() {
            load.classList.add('loading');
        }
        setInterval(loading, 1000);
    },

    scrollTop: function() {
        var backtop = document.querySelector('.backtop');
        var block__parallax = document.querySelector('.block__parallax__content');
        var photo__section = document.querySelector('.photo__section');
        var event__list = document.querySelector('.event__list');
        console.log(event__list);
        var status = 'true';
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1380) {
                backtop.style.display = 'block';
            } else {
                backtop.style.display = 'none';
            }
            if (window.scrollY > 760) {
                if (status == 'true') {
                    block__parallax.classList.add('fadeIn');
                    status = 'false';
                }
            }
            if (window.scrollY > 850) {
                if (status == 'true') {
                    photo__section.classList.add('fadeIn');
                    status = 'false';
                }
            }
            if (window.scrollY > 1250) {

                if (status == 'true') {
                    event__list.classList.add('fadeIn');
                    status = 'false';
                }
            }
        });
        backtop.addEventListener('click', function() {
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });


    },
    setting: function() {
        const setting__right = document.querySelector('.setting__right');
        var icon = document.querySelector('.setting__right i');

        const setting__div = document.querySelector('.setting');
        const setting__content = document.querySelector('.setting__left');
        setting__right.addEventListener('click', () => {
            setting__div.classList.toggle('active');

            icon.classList.toggle('fa-times');
            icon.style.animation = 'none';

        });
    },

    countdown: function() {
        function count() {
            var countdownDate = new Date('Oct 3, 2020 10:00:00').getTime();
            var now = new Date().getTime();
            var distance = countdownDate - now;
            var month = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
            var day = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);

            document.getElementById('month').innerHTML = month;
            document.getElementById('day').innerHTML = day;
            document.getElementById('hours').innerHTML = hour;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
            document.getElementById('a').innerHTML = month + 'm' + day + 'd' + hour + 'h' + minutes + 'm' + seconds + 's';
        }
        setInterval(count, 1000);
    }


}
allEffect.init();