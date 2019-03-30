<template>
  <div>
    <PeriodicTable :select="select" />
    <InputField v-if="$store.state.fieldState !== null" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PeriodicTable from './PeriodicTable.vue'
import InputField from './InputField.vue'

export default Vue.extend({
  components: { PeriodicTable, InputField },
  methods: {
    select (num: number, answer: string): void {
      const { state, commit } = this.$store
      if (state.selected === ~~num) {
        commit('inputSelect', num)
      } else {
        commit('fieldSelect', {num, answer})
        this.$nextTick(() => {
          const target = document.querySelector<HTMLElement>('#field-focus')
          if (target) {
            target.focus()
          }
        })
      }
    },
  },
})
</script>
