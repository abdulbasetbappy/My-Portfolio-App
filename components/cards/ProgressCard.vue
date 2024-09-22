<template>
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <!--<p v-if="subtitle" class="mb-4 ">{{ subtitle }}</p>-->
    <div class="py-8 px-10">
      <div ref="progressContainer" class="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
        <!-- Loop through progress array -->
        <div v-for="(item, index) in dataProcess" :key="index"
             class="shadow-sm rounded-2xl bg-gradient-to-r from-transparent to-green-500 p-[1px]">
          <div class="flex items-center relative rounded-2xl px-2 flex-wrap bg-white dark:bg-zinc-950">
            <!-- Percentage -->
            <div class="flex items-center justify-center -m-4">
              <div class="w-24 h-24 bg-transparent rounded-full backdrop-blur-xl" :class="item.shadowColor">
                <svg class="transform -translate-x-3 -translate-y-3" aria-hidden="true">
                  <circle 
                    class="text-transparent" 
                    stroke-width="16" 
                    stroke="currentColor" 
                    fill="transparent"
                    r="40" cx="60" cy="60"
                  />
                  <circle 
                    class="shadow-lg"
                    :class="item.color"
                    stroke-width="16"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - animatedPercents[index] / 100 * circumference"
                    stroke-linecap="round" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="40" cx="60" cy="60" 
                  />
                </svg>
              </div>
              <div class="absolute flex items-center justify-center flex-col">
                <Icon :name="item.iconName" class="w-6 h-6" />
                <span class="text-base font-bold" :class="item.textColor">{{ animatedPercents[index] }}%</span>
              </div>
            </div>
            <!-- Title and Status -->
            <p class="font-bold text-gray-600 text-lg absolute top-0 left-[92px] bg-gradient-to-bl from-green-400 to-green-900 bg-clip-text text-transparent">{{ item.title }}</p>
            <p v-if="item.project" class="font-medium text-gray-600 text-sm absolute top-[23px] left-28 bg-gradient-to-bl from-zinc-400 to-zinc-700 bg-clip-text text-transparent">Project: {{ item.project }}+</p>
            <p v-if="item.status==='Experienced'" class="text-green-400 absolute top-0 right-2">
              <Icon name="material-symbols:workspace-premium-rounded" class=""/>
            </p>
            <span class="ml-auto text-xs font-medium absolute bottom-1 right-2" :class="item.color">{{ item.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    frontend: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: '',
    },
  });
  
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  const frontendData = [
    {
      title: 'JavaScript',
      percent: 90,
      status: 'Experienced',
      iconName: 'logos:javascript',
      color: 'text-green-500',
      project: 25,
    },
    { 
      title: 'Vue.Js', 
      percent: 85, 
      status: 'Experienced', 
      iconName: 'devicon:vuejs', 
      color: 'text-green-500', 
      project: 2,
    },
    { 
      title: 'Nuxt.Js', 
      percent: 83, 
      status: 'Experienced', 
      iconName: 'logos:nuxt-icon', 
      color: 'text-yellow-500', 
      project: 15,
    },
    { 
      title: 'React.js', 
      percent: 70, 
      status: 'Intermediate', 
      iconName: 'logos:react', 
      color: 'text-yellow-500', 
      project: 3,
    },
    { 
      title: 'Next.Js', 
      percent: 55, 
      status: 'Intermediate', 
      iconName: 'logos:nextjs-icon', 
      color: 'text-red-500', 
      project: 1,
    }
  ];
  
  const backendOrOthersData = [
    {
      title: 'NodeJs',
      percent: 90,
      status: 'Experienced',
      iconName: 'logos:nodejs',
      color: 'text-green-500',
      project: 2,
    },
    { 
      title: 'ExpressJs', 
      percent: 85, 
      status: 'Experienced', 
      iconName: 'devicon:vuejs', 
      color: 'text-green-500', 
      project: 2,
    },
    { 
      title: 'MongoDB', 
      percent: 85, 
      status: 'Experienced', 
      iconName: 'devicon:vuejs', 
      color: 'text-green-500', 
      project: 2,
    },
  ];
  
  const dataProcess = computed(() => props.frontend ? frontendData : backendOrOthersData);
  
  // Animated percentages for each item
  const animatedPercents = ref(dataProcess.value.map(() => 0));
  
  // Function to animate the percentage and progress
  const animatePercent = (index, targetPercent) => {
    const duration = 1500; // 1.5 seconds
    const frameRate = 60; // 60 frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;
  
    const animate = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      animatedPercents.value[index] = Math.round(progress * targetPercent);
  
      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  };
  
  // Intersection Observer to trigger animations when scrolled into view
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dataProcess.value.forEach((item, index) => {
            animatePercent(index, item.percent);
          });
          observer.disconnect(); // Stop observing once animation is triggered
        }
      });
    });
  
    const progressContainer = document.querySelector('.grid');
    observer.observe(progressContainer);
  });
  </script>
  