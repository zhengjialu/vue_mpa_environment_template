<template>
  <layout-frame>
    <div class="page-hello">
      <p>{{ gethelloContent }} World! {{ greeting }}</p>
      <el-button @click="changeStore"> store 测试 </el-button>
      <el-button @click="testIo"> IO 测试 </el-button>
    </div>
  </layout-frame>
</template>

<script>
  import io from './io'
  import LayoutFrame from '../../layout/frame'

  export default {
    data: function () {
      return {
        greeting: 'xxxx',
      }
    },
    components: { LayoutFrame },
    computed: {
      gethelloContent() {
        return this.$store.state.helloContent
      },
    },
    methods: {
      changeStore() {
        this.$store.commit('increment')
      },
      async testIo() {
        try {
          const { content } = await io.testIo({
            ':id': 11,
          })

          this.greeting = content.name
        } catch (e) {
          this.$message.error(e.message)
        }
      },
    },
  }
</script>

<style src="./hello.styl"></style>
