<template>
    <h2>{{ count }}</h2>
    <button @click="inc">Increment</button>
</template>


<script>
export default {
  name: "App",  
  data: () => ({
    count: 0  
  }),
  methods: {
    inc() {
      this.count++;
    }
  }
};
</script>