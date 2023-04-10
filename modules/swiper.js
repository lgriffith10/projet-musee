import Swiper, { Pagination } from 'swiper';
import ready from '@ryanmorr/ready';

import 'swiper/css';
import 'swiper/css/pagination';

const selector = '.swiper';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(selector, {
        spaceBetween: 30,
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
        }
    });
});
