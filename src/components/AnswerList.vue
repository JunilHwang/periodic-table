<template>
  <ul class="answer-list">
    <li v-for="(v, k) in randed" :key="k" v-html="v" @click="listSelect(k, v)" :class="{active: listSelected == k, solved: listSolved[k]}" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    randed (): string[] { return this.$store.state.randed },
    listSelected (): number | null { return this.$store.state.listSelected },
    listSolved (): string[] { return this.$store.state.listSolved },
  },
  methods: {
    listSelect (listK: number, v: string): void {
      this.$store.commit('listSelect', {listK, v})
    },
  },
})
</script>

