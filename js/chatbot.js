const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const chatbot = () => {
    const chat = get('#header .inner .openchat h2 > span');
    const btns = getAll('#header .inner .openchat .chatbtn ul li ');
    const chatroom = get('#header .inner .openchat');
    const close = get('#header .inner .openchat > i');
    const open = get('#header .inner .chat');

    open.addEventListener('click', (e) => {
        chatroom.classList.add('on');
    });

    close.addEventListener('click', (e) => {
        chatroom.classList.remove('on');
    });

    const texts = [
        '서울, 덕수궁 운영시간은 월,화,목,금,일 10:00–18:00 수,토 야간개장 10:00–21:00 과천, 청주 운영시간은 화요일–일요일(월요일 휴관), 10:00–18:00 입니다.',
        '상담번호는 아래와 같습니다. (서울) 02‒3701‒9500, (과천) 02‒2188‒6000,(덕수궁) 02‒2022‒0600,(청주) 043‒261‒1400 ',
        '현재 인기전시는 "Ron Mueck"전시 입니다.',
    ];

    btns.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            btns.forEach((el, idx) => {
                el.classList.remove('on');
            });
            item.classList.add('on');
            chat.textContent = texts[idx];
        });
    });
};

chatbot();
