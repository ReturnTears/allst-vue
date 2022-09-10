<template>
  <div>
      <button class="btn" @click="clickFile">click to</button>
      <div>
        <ul>
            <li v-for="(item, i) in dt" :key="i">{{ item.id }}</li>
        </ul>
        <p>{{ star }}</p>
      </div>
  </div>
</template>

<script>
var Mock = require('mockjs')
export default {
    data() {
        return {
            dt: '',
            star: ''
        }
    },
    methods: {
        clickFile() {
            console.log('11111111')
            var data = Mock.mock({
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1
                }],
                "string|1-10": "★"
            })
            this.dt = data.list
            this.star = data.string
            // 输出结果
            let result = JSON.stringify(data, null, 4)
            console.log(result)
        }
    }
}
</script>

<style>

</style>