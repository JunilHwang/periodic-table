<template>
  <section class="quesition mb-4">
    <h3>문제 유형을 선택해주세요</h3>
    <b-button variant="outline-primary" @click.prevent="$store.commit('setType', 1)">매칭 문제</b-button>
    <b-button variant="outline-success" @click.prevent="$store.commit('setType', 2)">입력 문제</b-button>
  </section>
</template>