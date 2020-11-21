<template>
  <div class="frame">
    <el-container>
      <el-header>
        <frame-nav />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import FrameNav from './nav.vue'

  export default {
    components: { FrameNav },
  }
</script>

<style src="./frame.styl"></style>
