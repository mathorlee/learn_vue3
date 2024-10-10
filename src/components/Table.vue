<template>
  <el-table 
  ref="tableView"
  :data="rows" 
  stripe 
  border 
  highlight-current-row 
  height="150"
  @current-change="onChange"
  :default-sort="{prop: 'date', order: 'descending'}"
  >
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column sortable fixed prop="date" width="200" label="日期"></el-table-column>
    <el-table-column sortable prop="name" width="200" label="姓名"></el-table-column>
    <el-table-column sortable prop="address" width="400" label="地址"></el-table-column>
  </el-table>

  <div style="margin-top: 20px;">
    <el-button @click="doSelect(rows[1])">选中第二行</el-button>
    <el-button @click="cancleSelect()">取消选择</el-button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

// vue3中获取当前组件的实例对象：https://blog.csdn.net/m0_62811051/article/details/128121082
const view = getCurrentInstance();

const rows = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-07-02',
    name: '张三',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-06-02',
    name: '李四',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-02',
    name: '王五',
    address: '上海市普陀区金沙江路 1518 弄',
  },
])

const currentRow = ref("")

function onChange(val) {
  currentRow.value = val
  console.log(currentRow.value)
}

function doSelect(val) {
  console.log(val)
  view.refs.tableView.setCurrentRow(val)
}

function cancleSelect() {
  view.refs.tableView.setCurrentRow(null)
}
</script>
