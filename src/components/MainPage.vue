<template>
    <div class="mainPage">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: '该页面是大屏展示主页, 用于挂载其他页面'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
