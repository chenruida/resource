<template>
  <el-row>
    <el-col
      :span="8"
      v-for="(o, index) in 2"
      :key="o"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span></span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>