<script setup>
import AppFooter from '../components/AppFooter.vue';

  definePageMeta({
    title: "About",
    description: "Things About Me."
  });
</script>

<!-- About Page -->
<template>
  <article>
    <!-- Name  -->
    <h1 class="mb-4 text-2xl font-semibold">About Me</h1>
    <!-- Short Bio Summary -->
    <p>
      Hello! My name is Abdul Baset Bappy 👋. I craft systems that are
      <span class="highlight">Efficient</span> and
      <span class="highlight">User-Friendly</span>.
    </p>
    <p class="my-2 text-zinc-700 dark:text-zinc-300">
      I am
      <span class="subtle-highlight">currently seeking opportunities</span>
      to share my passion and expertise.
    </p>
    <app-divider class="md:my-6" />
    <p>
      My interest in software development started back in 2022 when I came
      across the developer community on LinkedIn. I became deeply fascinated by
      it and started to learn more from sources like <span class="highlight">Codecademy</span> and <span class="highlight">W3Schools</span>.
    </p>
    <figure class="my-4">
      <picture>
        <source
          media="(max-width: 1023px)"
          srcset="/certificate.png"
        />
        <source media="(min-width: 1024px)" srcset="/certificate.png" />
        <nuxt-img
          loading="lazy"
          preload
          placeholder
          format="png"
          height="100"
          src="/certificate.png"
          alt="A Clear Picture of Vue.Js Developer Certificate from Ostad.com"
          class="object-cover w-full mb-1 text-center border rounded-lg border-zinc-200 dark:border-transparent"
        />
      </picture>
      <figcaption class="text-sm text-center text-zinc-500">
        One of First Achievements in Web Development
      </figcaption>
    </figure>
    <p>
      This ultimately influenced my decision to pursue a Course in <span class="highlight">Ostad.com</span>.
    </p>
    <p>
      While building a strong technical foundation in Course, I dedicated a lot
      of my free time teaching myself web development and building things out.
    </p>
    <app-divider class="md:my-6" />
    <p>
      Over the past year, I have been diligently working on several projects, including <span class="highlight">e-commerce</span> platforms and <span class="highlight">point-of-sale (POS)</span> software. Additionally, I have experience working with <span class="highlight">Node.js APIs</span> and <span class="highlight">Laravel APIs</span>, which has significantly enhanced my skills and knowledge in backend development.
    </p>
    <p>
      Working on these projects has deepened my understanding of creating <span class="highlight">scalable</span> and <span class="highlight">maintainable</span> applications, covering the entire development lifecycle from design to deployment. Additionally, I've gained valuable <span class="highlight">communication skills</span> and <span class="highlight">teamwork</span> experience, both in-person and remotely.
    </p>
    <app-divider class="md:my-6" />
    <AppFooter />
  </article>
</template>

<style scoped>
  p {
    @apply text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed;
  }
</style>
