<script>
import CustomComponent from "./CustomComponent.vue";

export default {
  name: "Myheader",
  components: {
    CustomComponent,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <h1>Create Tests Vue</h1>
  <h2>Count: {{ count }}</h2>
  <button class="btn btn-primary" @click="count++">+</button>
  <CustomComponent :result="count" />
</template>
