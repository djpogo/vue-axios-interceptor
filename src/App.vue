<template>
  <div id="app">
    Three random dogs: <button @click="loadDogs">Load Dogs</button>
    <ul style="list-style: none">
      <li
        :key="dog"
        v-for="dog in dogs"
      >
        <img :src="dog" alt="Dog" style="max-width: 100%; height: auto" >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dogs: null,
    };
  },
  components: {
  },
  mounted() {
    this.loadDogs();
  },
  methods: {
    loadDogs() {
      this.axios.get(
        'https://dog.ceo/api/breeds/image/random/3',
        {
          config: {
            showToast: true,
            requestToast: {
              title: 'Loading Dogs 🐾',
            },
            responseToast: {
              title: '🐾 Dogs loaded',
            },
          },
        },
      )
        .then(({ data }) => {
          this.dogs = data.message;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
