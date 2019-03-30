<template>
  <div>
    <h3>문제 유형을 선택해주세요</h3>
    <a href="#" class="btn btn-outline-primary" @click="$store.state.qaType = 0">매칭 문제</a>
    <a href="#" class="btn btn-outline-success" @click="$store.state.qaType = 1">입력 문제</a>
  </div>
</template>