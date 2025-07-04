import data from './collectData.js';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const searchbtn = get('#header .inner .utill-left ');
const overay = get('.overay');
const searchbox = get('#header .inner .search ');
const exit = get('#header .inner .search i:nth-of-type(2) ');
const like = get('#header .inner .search .liked');

searchbtn.addEventListener('click', (e) => {
    searchbox.classList.add('on');
    overay.classList.add('on');
});
exit.addEventListener('click', (e) => {
    searchbox.classList.remove('on');
    overay.classList.remove('on');
    like.classList.remove('on');
});

// ----------------------------------------------------------------

const pic = () => {
    const upbtn = get('.main-con2 .inner .next i:nth-of-type(1)');
    const downbtn = get('.main-con2 .inner .next i:nth-of-type(2)');
    const img = getAll('.main-con2 .inner .collection img');
    const title = getAll('.main-con2 .inner .collection p');
    const korname = getAll('.main-con2 .inner .collection h2');
    const years = getAll('.main-con2 .inner .collection strong ');

    let cnt = 0;
    upbtn.addEventListener('click', (e) => {
        cnt = (cnt - 4 + data.length) % data.length;
        img.forEach((el, idx) => {
            el.src = data[(cnt + idx) % data.length].imgurl;
        });
        korname.forEach((kor, idx) => {
            const korText = data[(cnt + idx) % data.length].kor;
            const engText = data[(cnt + idx) % data.length].eng;
            kor.innerHTML = `${korText} <span>${engText}</span>`;
        });
        years.forEach((year, idx) => {
            year.textContent = data[(cnt + idx) % data.length].year;
        });
        title.forEach((item, idx) => {
            item.textContent = data[(cnt + idx) % data.length].title;
        });
    });
    downbtn.addEventListener('click', (e) => {
        cnt = cnt >= data.length - 1 ? 0 : cnt + 4;
        img.forEach((el, idx) => {
            el.src = data[(cnt + idx) % data.length].imgurl;
        });
        korname.forEach((kor, idx) => {
            const korText = data[(cnt + idx) % data.length].kor;
            const engText = data[(cnt + idx) % data.length].eng;
            kor.innerHTML = `${korText} <span>${engText}</span>`;
        });
        years.forEach((year, idx) => {
            year.textContent = data[(cnt + idx) % data.length].year;
        });
        title.forEach((item, idx) => {
            item.textContent = data[(cnt + idx) % data.length].title;
        });
    });
};
// ---------------------------------------------------------------------
const search = () => {
    const btn1 = document.querySelector('#header .inner .search .btn');
    const result = document.querySelector('#header .inner .search .liked');
    const searchInput = document.querySelector('#header .inner .search input');

    const render = (items) => {
        if (items.length === 0) {
            result.innerHTML =
                '<p>검색 결과가 없습니다<br/><span>Search results not found</span></p>';
        } else {
            result.innerHTML = items
                .map(
                    (item) =>
                        `<div class="searh-item">
                 <img src="${item.imgurl}"  alt="" />
                    <h3>${item.title}</h3>
                    <p>${item.kor} / ${item.eng}</p>
                  </div>`
                )
                .join('');
        }
    };
    btn1.addEventListener('click', () => {
        result.classList.add('on');
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        const filtered = data.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.kor.toLowerCase().includes(query) ||
                item.eng.toLowerCase().includes(query)
        );

        render(filtered);
    });
};

pic();
search();
