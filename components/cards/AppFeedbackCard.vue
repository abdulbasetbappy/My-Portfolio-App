<script setup>
  const emit = defineEmits(["closeFeedback"]);

  const props = defineProps({
    label: String,
    isSuccess: Boolean,
    visible: Boolean
  });

  const statusIcon = computed(() => {
    return props.isSuccess
      ? "line-md:check-all"
      : "line-md:alert-loop";
  });

  const close = () => {
    emit("closeFeedback");
  };

    // Automatically close the feedback after 3000ms
  watch(() => props.visible, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        close();
      }, 3000);
    }
  });
</script>

<!-- Link: Feedback Toast -->
<template>
  <section
    :class="`flex absolute top-20 right-6 items-center px-3 py-3 my-4 font-medium rounded-xl dark:text-zinc-100 text-zinc-800 text-sm md:text-base ${
      isSuccess
        ? 'bg-green-400 dark:bg-green-500 '
        : 'bg-red-400 dark:bg-red-500 ring-red-400'
    } ${
      visible
        ? 'visible translate-y-0 opacity-100'
        : 'invisible translate-y-1 opacity-0'
    }`"
  >
    <Icon :name="statusIcon" class="mr-2 w-7 h-7" />
    <span class="ml-2  mr-12">{{ label }}</span>
    <button
      type="button"
      @click="close"
      class="flex items-center justify-center w-6 h-6 ml-auto rounded-full focus-visible:global-focus focus-visible:ring-zinc-100"
      aria-label="Close Status Feedback"
    >
      <Icon name="line-md:close" class=" w-5 h-5"/>
    </button>
  </section>

</template>
