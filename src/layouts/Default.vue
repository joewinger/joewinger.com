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
        <li class="nav-link"><a href="/Resume%20-%20Joe%20Winger.pdf" class="btn" @click="menuVisible = false" v-if="$settings.hireable">Download&nbsp;Résumé</a></li>
      </ol>
    </nav>

    <slot />

    <footer>
      <div class="footer-left">
        <div>&copy; 2021 Joe Winger. Pretty much all rights reserved.</div>
        <div>Made with code &amp; hosted on Vercel.</div>
      </div>
      <ol class="footer-links">
        <li class="footer-link"><a href="https://github.com/joewinger/">GitHub</a></li>
        <li class="footer-link" v-if="$settings.resume_in_footer"><a href="/Resume%20-%20Joe%20Winger.pdf">Résumé</a></li>
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

<style lang="scss">
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 52px;
  width: var(--content-width);
  margin: 10px auto 10px auto;

  a:not(.btn) {
    border-bottom: none;
  }

  .nav-logo {
    font-weight: 700;
    font-size: 32px;
    height: 52px;

    img {
      height: 52px;
      margin: auto;
    }
  }

  .menu-button {
    display: none;

    width: 32px;
    height: 32px;

    stroke-width: 2px;
    stroke-linecap: round;
    stroke: var(--secondary-text-color);

    border: solid 2px var(--secondary-text-color);
    border-radius: 6px;

    cursor: pointer;

    box-sizing: border-box;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;
    list-style: none;

    // gap: 30px;

    .menu-button-close {
      display: none;
    }

    .nav-link {
      &:not(:last-of-type) {
        padding-right: 30px;
      }
      a {
        font: italic 18px var(--font-mono);
        color: var(--secondary-text-color);
      }
    }
  }
}

// Mobile Menu
@media screen and (max-width: 1000px) {
  nav {
    .menu-button {
      display: inline-block;
    }
    .nav-links {
      position: fixed;
      top: 0;
      left: 100vw;
      flex-direction: column;

      width: 100vw;
      height: 100vh;

      background-color: var(--text-color);
      z-index: 5;

      transition: transform 0.5s ease-out;

      &.menu-visible {
        transform: translateX(-100%);
      }

      .menu-button-close {
        display: inline-block;
        position: fixed;
        top: 15px;
        right: 15px;

        width: 32px;
        height: 32px;
    
        stroke-width: 2px;
        stroke-linecap: round;
        stroke: var(--light-text-color);
    
        border: solid 2px var(--light-text-color);
        border-radius: 8px;
    
        cursor: pointer;
    
        box-sizing: border-box;
        transition: transform 0.2s ease;
        z-index: 6;
    
        &:hover {
          transform: scale(1.1);
        }
      }
      
      .nav-link {
        width: 100%;
        &:not(:last-of-type) { padding: 0 0 10px 0; }

        text-align: center; // For .btn

        a {
          text-align: center;
          color: var(--light-text-color);
          display: inline-block;

          &:not(.btn) {
            
            width: 100%;
            height: 100%;
            padding: 10px 0;
            font-size: 1.5rem;
            
          }
          &.btn {
            margin-top: 50px;
            border-color: var(--light-text-color);

            &:hover {
              background-color: var(--light-text-color);
              color: var(--text-color) !important;
            }
          }
        }
      }
    }
  }
}


footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  box-sizing: border-box;
  padding: 35px 10vw;
  @media screen and (max-width: 750px) {
    padding: 35px 5vw;
  }

  background-color: var(--text-color);

  font: 13px var(--font-mono);
  font-weight: 500;
  color: var(--light-text-color);

  .footer-left {
    margin-right: 25px;
    div:not(:first-of-type) {
      margin-top: 5px;
    }
  }

  .footer-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;
    list-style: none;

    .footer-link {
      &:not(:last-of-type) {
        margin-right: 10px;
      }

      a {
        color: var(--light-text-color);
        border-color: var(--light-text-color);
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;

    .footer-left {
      margin-right: 0;
      margin-top: 25px;
    }
  }
}
</style>