<template>
  <form action="" method="post" @submit.prevent="answerCheck">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="원소기호" v-model="k" id="field-focus">
      <input type="text" class="form-control" placeholder="원소이름" v-model="v">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="submit">검사</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return { k: '', v: '' }
  },
  methods: {
    answerCheck (): void {
      const { state, commit } = this.$store
      const { num, answer } = state.fieldState
      const [k, v] = answer.split(' / ')
      if (k === this.k && v === this.v) {
        commit('listFilter', answer)
        commit('answerCheck', ~~num)
      } else {
        commit('setMsg', '틀렸습니다.')
      }
    },
  },
})
</script>
