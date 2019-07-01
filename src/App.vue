<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 添加VueMintUi组件 -->
    <VueMintUi></VueMintUi>
    <router-view/>
  </div>
</template>

<script>
import VueMintUi from './components/Vue-MintUi'
export default {
  name: 'App',
  components: {VueMintUi}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
