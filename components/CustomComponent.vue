<script>
export default {
  name: "CustomComponent",
  props: ["result"],
  data() {
    return {
      text: "Text",
    };
  },
};
</script>

<template>
  <h1>Double Text</h1>
  <h2>Text: {{ text }}</h2>
  <button class="btn btn-primary" @click="text = text + text">Double</button>
  <h2>Props</h2>
  <h2>Prop: {{ result }}</h2>
</template>
