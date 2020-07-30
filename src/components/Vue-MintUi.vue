<template>
  <div class="VueMintUI">
      <p>{{ msg }}</p>
      <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
      <button @click.native="clickBtn">按钮</button>
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
    },
    clickBtn: function () {
      console.log('hei')
    }
  }
}
</script>

<style scoped>

</style>
