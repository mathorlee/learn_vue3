<template>
  <p>
  通过添加额外的类名 <b>is-loading</b>，你的图标就可以在 2 秒内旋转 360
  度，但让你也可以自己改写想要的动画。
</p>
<el-icon :size="20">
  <edit />
</el-icon>
<el-icon color="#409EFC" class="no-inherit">
  <share />
</el-icon>
<el-icon>
  <delete />
</el-icon>
<el-icon class="is-loading">
  <loading />
</el-icon>
<el-button type="primary">
  <el-icon style="vertical-align: middle;">
    <search />
  </el-icon>
  <span style="vertical-align: middle;"> 搜索 </span>
</el-button>
</template>