<template>
    <div id="cards" @mousemove="handleMouseMove">
      <div
        v-for="(profile, index) in profiles"
        :key="index"
        class="card bg-gradient-to-b from-lime-600 to-transparent"
        :style="profile.style"
      >
        <div class="card-content p-1 bg-gray-200 dark:bg-gray-800">
          <Icon :name="profile.icon" class="w-12 h-12"/>
          <h2 class="font-bold text-xl">{{ profile.title }}</h2>
          <p class="text-gray-500">
            Followers: <span>{{ profile.followers }}</span>
          </p>
          <NuxtLink :to="profile.link" target="_blank">
            <Icon name="solar:rocket-2-bold-duotone" />
            <span>Follow me</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>  
  const profiles = ref([
    {
      icon: "line-md:github-loop",
      title: "GitHub",
      followers: "4",
      link: "https://github.com/abdulbasetbappy",
      style: "--color: 348 80% 60%;",
    },
    {
      icon: "fa6-brands:square-facebook",
      title: "Facebook",
      followers: "465",
      link: "https://www.facebook.com/abdulbasetbappy.fb",
      style: "--color: 0 0% 100%;",
    },
    {
      icon: "brandico:linkedin-rect",
      title: "LinkedIn",
      followers: "2.1k",
      link: "https://www.linkedin.com/in/abdulbasetbappy/",
      style: "--color: 220 100% 35%;",
    },
  ]);

  </script>
  
  <style scoped>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    color: white;
  }
  
  #cards {
    width: 100%;
    padding-inline: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .card {
    min-width: 150px;
    height: 220px;
    flex: 1 1 250px;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
  }
  
  .card-content {
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .card-content > i {
    font-size: 10rem;
    color: rgba(255, 255, 255, 0.5);
  }
  
  
  .card-content > a {
    width: 90%;
    padding-block: 0.8rem;
    background-color: rgba(255, 255, 255, 0.2);
    @apply dark:bg-transparent;
    border: 1px solid rgba(165, 165, 165, 0.2);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  
  .card-content > a:hover {
    background-color: rgba(91, 91, 91, 0.105);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  </style>
  