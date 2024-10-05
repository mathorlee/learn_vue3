<script setup lang="ts">
import { Delete, Edit, Loading, Search, Share } from '@element-plus/icons-vue';
</script>

<template>
  <p>
  通过添加额外的类名 <b>is-loading</b>，你的图标就可以在 2 秒内旋转 360
  度，但让你也可以自己改写想要的动画。
</p>
<el-icon :size="20">
  <Edit />
</el-icon>
<el-icon color="#409EFC" class="no-inherit">
  <Share />
</el-icon>
<el-icon>
  <Delete />
</el-icon>
<el-icon class="is-loading">
  <Loading />
</el-icon>
<el-button type="primary">
  <el-icon style="vertical-align: middle;">
    <Search />
  </el-icon>
  <span style="vertical-align: middle;"> 搜索 </span>
</el-button>
</template>