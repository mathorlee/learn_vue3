<template>
  <!-- 各种类型的按钮 -->
  <p>Basic text button</p>
  <div class="mb-4">
    <el-button 
    v-for="button in buttons"
    :key="button.text"
    :type="button.type"
    size="large"
    >
    {{ button.text }}
    </el-button>
  </div>

  <p>Background color always on</p>
  <div class="mb-4">
    <el-button
    v-for="button in buttons"
    :type="button.type"
    size="medium"
    text
    bg
    >
    {{ button.text }}
    </el-button>
  </div>

  <p>Disabled text button</p>
  <div class="mb-4">
    <el-button
    v-for="button in buttons"
    :type="button.type"
    disabled
    text
    size="small"
    >
    {{ button.text }}
    </el-button>
  </div>

  <!-- icon按钮 -->
  <div class="mb-4">
    <el-button type="primary" :icon="Edit">Edit</el-button>
    <el-button type="primary" :icon="Share">Share</el-button>
    <el-button type="primary" :icon="Delete">Delete</el-button>
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary" :icon="Upload">Upload</el-button>
    <el-button type="primary">
      Upload
      <el-icon class="el-icon--right">
        <Upload/>
      </el-icon>
    </el-button>
  </div>

  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
    <el-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-button-group>

  <el-button-group class="ml-4">
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
  </el-button-group>



</template>

<script setup lang="ts">
import {Edit, Share, Delete, Search, Upload, ArrowLeft, ArrowRight} from "@element-plus/icons-vue"

const buttons = [
  {type: "plain", text: "plain"},
  {type: "primary", text: "primary"},
  {type: "success", text: "success"},
  {type: "info", text: "info"},
  {type: "warning", text: "warning"},
  {type: "danger", text: "danger"},
]
</script>