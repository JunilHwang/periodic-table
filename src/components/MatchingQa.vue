<template>
  <div>
    <PeriodicTable :select="select" />
    <AnswerList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PeriodicTable from './PeriodicTable.vue'
import AnswerList from './AnswerList.vue'
export default Vue.extend({
  components: { PeriodicTable, AnswerList },
  methods: {
    select (num: number, answer: string) {
      const {state, commit} = this.$store
      if (state.listSelected === null) {
        let selected: number | null
        let msg: string | null
        if (state.selected === ~~num) {
          selected = null
          msg = ''
        } else {
          selected = ~~num
          msg = '주기율표와 원소를 같이 선택해주세요'
        }
        commit('matchSelect', {selected, msg})
      } else {
        commit('answerSelect', {num, answer})
      }
    },
  },
})
</script>
