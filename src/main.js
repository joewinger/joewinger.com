// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  Vue.prototype.$settings = {
    hireable: true,
    resume_in_footer: true
  }

  if (isClient){
    AOS.init({
      duration: 750,
      anchorPlacement: 'top-bottom' // This setting is not read for some reason.
    });
  }

  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return { selector: to.hash, offset: { x: 100 }, behavior: 'smooth' }
    }
    return { x: 0, y: 0 }
  };

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
  });
}