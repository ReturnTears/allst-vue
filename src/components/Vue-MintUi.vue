<template>
  <div class="VueMintUI">
      <p>{{ msg }}</p>
      <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
// import {Toast} from 'mint-ui'
export default {
  name: 'Vue-MintUi',
  data () {
    return {
      msg: 'Hello VueMintUi'
    }
  },
  mothods: {
    handleClick: function () {
      this.$toast('Hello world!')
    }
  }
}
</script>

<style scoped>

</style>
