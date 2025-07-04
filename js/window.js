const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const con1 = get('.main-con1');
const con2 = get('.main-con2');
const con3 = get('.main-con3');
const scrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= 300) {
        con1.classList.add('on');
    }

    if (scrollY >= 800) {
        con2.classList.add('on');
    }
    if (scrollY >= 1300) {
        con3.classList.add('on');
    }
});
