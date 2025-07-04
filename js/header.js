const menubar = () => {
    const gnblis = document.querySelectorAll('#header .nav .gnb > li');
    const sublis = document.querySelectorAll('#header .nav .gnb > li ul');
    const header = document.querySelector('#header');
    gnblis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            sublis.forEach((item, idx) => {
                item.classList.remove('on');
            });
            sublis[idx].classList.add('on');
            header.classList.add('on');
        });
        header.addEventListener('mouseleave', (e) => {
            sublis[idx].classList.remove('on');
            header.classList.remove('on');
        });
    });
};
menubar();
