<template>
  <el-form label-width="100px" style="width: 600px;">
    <el-form-item label="活动名称">
      <el-input v-model="form_data.name"></el-input>
    </el-form-item>

    <el-form-item label="活动区域">
      <el-select v-model="form_data.region">
        <el-option label="区域1" value="区域1"></el-option>
        <el-option label="区域2" value="区域2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker v-model="form_data.start_dt" style="width: 100%;">
        </el-date-picker>
      </el-col>
      <el-col :span="2" style="text-align: center;">-</el-col>
      <el-col :span="11">
        <el-date-picker v-model="form_data.end_dt" style="width: 100%;">
        </el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="即时配送">
      <el-switch v-model="form_data.deliver_now"></el-switch>
    </el-form-item>

    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form_data.types">
        <el-checkbox value="美食/餐厅线上活动" label="美食/餐厅线上活动" name="types"></el-checkbox>
        <el-checkbox value="AA" label="AA" name="types"></el-checkbox>
        <el-checkbox value="BB" label="BB" name="types"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="特殊资源">
      <el-radio-group v-model="form_data.resource">
        <el-radio label="AA资源" value="A资源"></el-radio>
        <el-radio label="BB资源" value="B资源"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form_data.活动形式"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup>
import { ref } from 'vue'

const form_data = ref({
  name: "",
  region: "",
  start_dt: "",
  end_dt: "",
  deliver_now: true,
  types: ["AA", "BB"],
  resource: "A资源",
  活动形式: "",
})

function onSubmit() {
  console.log('submit!')
}

</script>
