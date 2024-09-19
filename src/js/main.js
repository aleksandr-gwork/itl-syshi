import '../styles/style.scss';
import { getMenuItems } from './menu-item';

const menu = [
    {
        title: 'Суши Нигири с угрем',
        desc: 'кунжут, нори, рис, соус терияки, угорь',
        weight: 34,
        price: '3,5',
        image: 'menu-item-1'
    },
    {
        title: 'Суши Нигири с лососем',
        desc: 'кунжут, нори, рис, соус терияки, угорь',
        weight: 32,
        price: '4,2',
        image: 'menu-item-2'
    },
    {
        title: 'Нигири с окунем опаленным',
        desc: 'орской окунь опаленный, майонез, орех кешью',
        weight: 35,
        price: '4,8',
        image: 'menu-item-3'
    },
    {
        title: 'Терияки хотто маки',
        desc: 'Рис, форель в соусе терияки, темпура, творожный сыр, базилик, нори, лимон',
        weight: 43,
        price: '3,5',
        image: 'menu-item-4'
    },
    {
        title: 'Дабл Фиш Фреш ролл',
        desc: 'Рис, форель свежая, форель слабосолёная, творожный сыр, японский майонез, нори',
        weight: 35,
        price: '3,2',
        image: 'menu-item-5'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
    {
        title: 'Бонито Ролл',
        desc: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
        weight: 40,
        price: '3,8',
        image: 'menu-item-6'
    },
];

let startSlides = 0;
let endSlides = 6;
let slidesMenu = [];
const menuList = document.getElementById('menu-list');

function sliderInit() {
    if (menu && menu.length > 0 && startSlides >= 0 && endSlides >= startSlides) {
        slidesMenu = menu.slice(startSlides, endSlides);
        getMenuItems(slidesMenu, menuList);
    }
}
sliderInit();

document.getElementById('next')?.addEventListener('click', () => {
    try {
        if (menuList && slidesMenu && startSlides !== null && endSlides !== null) {
            if (menu.length > endSlides) {
                menuList.innerHTML = '';
                startSlides = startSlides + 6;
                endSlides = endSlides + 6;
                slidesMenu = menu.slice(startSlides, endSlides);
                getMenuItems(slidesMenu, menuList);
            }
        }
    } catch (error) {
        console.error('Error: ', error);
    }
});

document.getElementById('prev')?.addEventListener('click', () => {
    try {
        if (menuList && slidesMenu && startSlides !== null && endSlides !== null) {
            if (startSlides > 0) {
                menuList.innerHTML = '';
                startSlides = startSlides - 6;
                endSlides = endSlides - 6;
                slidesMenu = menu.slice(startSlides, endSlides);
                getMenuItems(slidesMenu, menuList);
            }
        }
    } catch (error) {
        console.error('Error: ', error);
    }
});

