<template>
  <Layout>
    <!-- Background SVG Blobs -->
    <svg class="blob" v-for="(blob, index) in blobs" :key="'blob'+index" :width="blob[0]" :height="blob[1]">
      <path :d="blob[2]" />
    </svg>

    <div class="content-wrapper">
      <!-- Header -->
      <header>
        <!-- <img src="@/assets/signature.png" alt="Joe Winger" height="70" > -->
        <h1 data-aos="zoom-out" data-aos-duration="1000">Hi I'm Joe&nbsp;👋</h1>
        <p data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
          I'm a self-taught full-stack web developer with a passion for web3 &amp; the future of the internet, searching for a company I can make an impact with.
        </p>
      </header>

      <!-- About Me -->
      <section id="about">
        <h1 data-aos="fade-right" data-aos-anchor-placement="top-bottom" class="about-title">About</h1>
        <div class="about-text">
          <p class="about-previewtext" data-aos="fade-left" data-aos-anchor=".about-title">
            I enjoy getting down to the fundementals &amp; understanding what makes things tick. I'm very passionate about learning, so outside of work you'll usually find me researching and tinkering with new technologies.
          </p>
          <span class="about-expand" @click="aboutExpanded=!aboutExpanded" data-aos="zoom-in" data-aos-anchor=".about-title" data-aos-delay="400">{{ aboutExpanded ? 'See Less' : 'See More' }}</span>

          <transition name="verticalExpand">
            <p class="about-fulltext" v-if="aboutExpanded" data-aos="fade" data-aos-anchor=".about-title">
              My personal interests include investing (stonks, options, and crypto), reading, playing disc golf, and listening to music &amp; podcasts. My current favorite podcasts include <a href="https://www.acquired.fm/">Acquired</a>, <a href="http://podcast.banklesshq.com/">Bankless</a>, and <a href="https://lexfridman.com/podcast/">Lex Fridman Podcast</a>.
            </p>
          </transition>
        </div>
      </section>

      <!-- Projects & Experience -->
      <section id="projects">
        <h1 data-aos="fade-right" data-aos-anchor-placement="top-bottom">Projects &amp;&nbsp;Experience</h1>
        <div class="project" v-for="project in $page.projects.edges" :key="project.node.title" data-aos="fade-up"  data-aos-anchor-placement="top-bottom" data-aos-offset="60">
          <div class="project-title">
            <h3>{{ project.node.title }}</h3>
            <span class="dash">&mdash;&ndash;</span>
            <ol class="project-tags">
              <li class="project-tag" v-for="tag in project.node.tags" :key="project.node.title + tag.text" :style="{'--color': tag.color}">#{{ tag.text }}</li>
            </ol>
          </div>
          <a class="project-link" :href="project.node.link_url" v-if="project.node.link_url != ''">{{ project.node.link_text }}</a>
          <p class="project-description" v-html="project.node.description"></p>
          <a class="project-expand" :href="`/projects/${project.node.slug}`" v-if="project.node.blog_published">See more &gt;</a>
        </div>
      </section>
      
      <!-- Skills -->
      <section id="skills">
        <h1 data-aos="fade-right" data-aos-anchor-placement="top-bottom">Skills</h1>
        <div v-for="skillset in Object.keys(skills)" :key="skillset" class="skillset" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h2 class="skillset-title">{{ skillset }}</h2>
          <ol class="skills-list">
            <li class="skill" v-for="skill in skills[skillset]" :key="skill[0]" :style="{'--color': skill[1]}">{{ skill[0] }}</li>
          </ol>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact">
        <h1 data-aos="fade-right" class="contact-title" data-aos-anchor-placement="top-bottom">Contact</h1>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-anchor=".contact-title">Thanks for stopping by! If you want to touch base, you can reach me at <a href="mailto:contact@joewinger.com">contact@joewinger.com</a>.</p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-anchor=".contact-title" v-if="$settings.hireable">Want to give me a job? You can forward this site to the head honcho of hiring, or download my résumé below :)</p>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".contact-title" v-if="$settings.hireable"><a href="/resume-coming-soon.pdf" class="btn">Download&nbsp;Résumé</a></p>
        <p data-aos="fade-up" data-aos-delay="400" data-aos-anchor=".contact-title">Also, feel free to check out my public GitHub repos <i>(including this site!)</i> at <a href="https://github.com/joewinger">github.com/joewinger</a>.</p>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Project {
  projects: allProject(sortBy: "display_order", order: ASC, filter: { published: { eq: true } }) {
    edges {
      node {
        title
        link_text
        link_url
        tags {
          text
          color
        }
        description
        blog_published
        slug
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      blobs: [[129, 127, 'M127.5 70.3181C127.5 103.455 72.6371 125.318 39.5 125.318C6.36292 125.318 1 94.9552 1 61.8181C1 28.681 14 -4.68191 61 1.81809C95.5 6.58937 127.5 10.3181 127.5 70.3181Z'],
              [147, 152, 'M11.4061 70.0027C-26.5939 0.00273132 48.5728 -3.49728 90.9061 3.50272C139.406 11.5224 156.406 70.0027 139.406 121.003C122.406 172.003 58.9061 157.503 11.4061 70.0027Z'],
              [198, 204, 'M68.5682 37.4805C139.894 22.8987 181.302 94.0066 181.634 123.129C182.129 166.444 88.1755 160.23 43.1756 132.23C10.3594 111.811 15.2778 48.3752 68.5682 37.4805Z'],
              [149, 159, 'M49.3365 145.008C105.093 188.943 148 109.812 148 79.768C148 49.7239 101.461 -8.89961 49.3366 2.43472C-2.78742 13.7691 -26.3673 85.3539 49.3365 145.008Z'],
              [500, 500, 'M407,345.5Q402,441,302.5,448Q203,455,155,387Q107,319,72.5,233.5Q38,148,124,111Q210,74,277,103Q344,132,378,191Q412,250,407,345.5Z'],
              [164, 138, 'M74 135.793C139.5 145.793 183 90.2933 152.5 32.7932C122 -24.7068 91.624 12.6657 39.5 24C-12.624 35.3343 -21.2789 121.247 74 135.793Z'],
              [242, 212, 'M3.11799 131.503C-12.082 207.903 57.9806 216.499 103.118 209.502C160 200.686 212.575 161.5 233.618 112.503C267.118 34.5027 187.618 -17.9968 93.6182 7.50296C37.5 22.7264 13.2652 80.5 3.11799 131.503Z'],
              [164, 138, 'M74 135.793C139.5 145.793 183 90.2933 152.5 32.7932C122 -24.7068 91.624 12.6657 39.5 24C-12.624 35.3343 -21.2789 121.247 74 135.793Z'],
              [314, 166, 'M28.8514 43.7871C50.2313 17.9733 86.6871 2.38888 130.594 1.08838C174.488 -0.2117 225.753 12.7721 276.601 44.0031C293.77 54.5479 303.915 72.6125 308.706 94.2921C313.445 115.73 312.924 140.613 308.829 164.985H22.6455C9.5336 148.909 1.20318 130.678 1.00367 110.552C0.802691 90.2783 8.85085 67.9356 28.8514 43.7871Z']],
      aboutExpanded: false,
      skills: {
        'Languages': [
          ['JavaScript', 'hsla(43, 66%, 50%, 18%)'],
          ['Vue.JS', 'hsla(43, 66%, 50%, 18%)'],
          ['Node.JS', 'hsla(43, 66%, 50%, 18%)'],
          ['HTML', 'hsla(18, 71%, 60%, 21%)'],
          ['CSS', 'hsla(216, 82%, 57%, 21%)'],
          ['SCSS/Sass', 'hsla(216, 82%, 57%, 21%)']],
        'Tools & Technologies': [
          ['Git', 'hsla(18, 71%, 60%, 21%)'],
          ['Firebase', 'hsla(43, 66%, 50%, 18%)'],
          ['Vercel', 'hsla(43, 66%, 50%, 18%)'],
          ['Linux (Debian & Ubuntu)', 'hsla(101, 90%, 37%, 18%)'],
          ['Windows', 'hsla(101, 90%, 37%, 18%)'],
          ['MacOS', 'hsla(101, 90%, 37%, 18%)'],
          ['Command Line', 'hsla(101, 90%, 37%, 18%)'],
          ['SSH', 'hsla(101, 90%, 37%, 18%)'],
          ['Figma', 'hsla(281, 50%, 60%, 18%)'],
          ['Adobe Creative Cloud', 'hsla(281, 50%, 60%, 18%)'],
          ['Google Analytics', 'hsla(281, 50%, 60%, 18%)']
        ],
        'Industry Knowledge': [
          ['GraphQL', 'hsla(281, 50%, 60%, 18%)'],
          ['SQL', 'hsla(281, 50%, 60%, 18%)'],
          ['Relational Databases', 'hsla(281, 50%, 60%, 18%)'],
          ['NoSQL Databases', 'hsla(281, 50%, 60%, 18%)'],
          ['REST APIs', 'hsla(43, 66%, 50%, 18%)'],
          ['Graph APIs', 'hsla(43, 66%, 50%, 18%)'],
          ['Serverless Infrastructure', 'hsla(43, 66%, 50%, 18%)'],
          ['Mobile-First Design', 'hsla(101, 90%, 37%, 18%)'],
          ['DNS & Domain Management', 'hsla(216, 82%, 57%, 21%)'],
          ['Git Flow', 'hsla(18, 71%, 60%, 21%)'],
          ['Data Scraping', 'hsla(216, 82%, 57%, 21%)']
        ]
      }
    }
  }
}
</script>