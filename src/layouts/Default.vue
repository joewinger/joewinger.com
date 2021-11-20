<template>
  <div class="layout">
    <nav data-aos="fade-down">
      <a class="nav-logo" href="/"><img src="@/favicon.png" alt=""></a>
      <svg class="menu-button" xmlns="http://www.w3.org/2000/svg" @click="menuVisible = !menuVisible">
        <line x1=20% y1=25% x2=80% y2=25% />
        <line x1=20% y1=50% x2=80% y2=50% />
        <line x1=20% y1=75% x2=80% y2=75% />
      </svg>
      <ol class="nav-links" :class="{'menu-visible': menuVisible}">
        <svg class="menu-button-close" xmlns="http://www.w3.org/2000/svg" v-if="menuVisible" @click="menuVisible = false">
          <line x1=25% y1=25% x2=75% y2=75% />
          <line x1=25% y1=75% x2=75% y2=25% />
        </svg>
        <li class="nav-link"><a href="/#about" @click="menuVisible = false">About</a></li>
        <li class="nav-link"><a href="/#projects" @click="menuVisible = false">Projects</a></li>
        <li class="nav-link"><a href="/#skills" @click="menuVisible = false">Skills</a></li>
        <li class="nav-link"><a href="/#contact" @click="menuVisible = false">Contact</a></li>
        <li class="nav-link"><a href="/resume-coming-soon.pdf" class="btn" @click="menuVisible = false">Download&nbsp;Résumé</a></li>
      </ol>
    </nav>

    <slot />

    <footer>
      <div class="copyright">&copy; 2021 Joe Winger. Pretty much all rights reserved.</div>
      <ol class="footer-links">
        <li class="footer-link"><a href="https://github.com/joewinger/">GitHub</a></li>
      </ol>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      menuVisible: false
    }
  }
}
</script>