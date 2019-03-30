<template>
  <section class="quesition mb-4">
    <b-button :variant="qaType === 1 ? 'primary' : 'outline-primary'" @click.prevent="$store.commit('setType', 1)">매칭 문제</b-button>
    <b-button :variant="qaType === 2 ? 'success' : 'outline-success'" @click.prevent="$store.commit('setType', 2)">입력 문제</b-button>
    <b-button :variant="showAnswer ? 'info' : 'outline-info'" @mousedown.prevent="$store.commit('showAnswerToggle')">답안 확인</b-button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    qaType (): number|null { return this.$store.state.qaType },
    showAnswer (): boolean { return this.$store.state.showAnswer },
  },
})
</script>

