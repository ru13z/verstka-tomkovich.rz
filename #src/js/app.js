import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

// слайдер
import Glide from '@glidejs/glide';

let glide = new Glide('#main-carousel', {
    perView: 1
})

glide.mount();