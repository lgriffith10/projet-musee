import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {
    const scrollTo = document.querySelectorAll( '[data-scroll-to]');

    Array.from(scrollTo).forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = item.getAttribute('data-scroll-to');
            gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
        });
    });
});

