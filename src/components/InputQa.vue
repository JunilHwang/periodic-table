<template>
  <div>
    <PeriodicTable :select="select" />
    <InputField />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PeriodicTable from './PeriodicTable.vue'
import InputField from './InputField.vue'

export default Vue.extend({
  components: { PeriodicTable },
  created () {
    this.$store.commit('setMsg', null)
  },
})
</script>
