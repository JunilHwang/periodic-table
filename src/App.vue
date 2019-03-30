<template>
  <div id="app">
    <div class="full-wrap">
      <span class="middle"></span><div>
        <Quesition v-if="$store.state.qaType === null" />
        <MatchingQa v-else-if="$store.state.qaType === 0" />
        <InputQa v-else-if="$store.state.qaType === 1" />
        <div class="msg-block alert alert-danger" v-if="$store.state.msg" v-html="eventBus.msg" role="alert" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Quesition from '@/components/Quesition.vue'
  import MatchingQa from '@/components/MatchingQa.vue'
  import InputQa from '@/components/InputQa.vue'
  import Vue from 'vue'
  export default  Vue.extend({
    components: { Quesition, MatchingQa, InputQa },
  })
</script>

<style lang="scss" src="@/assets/scss/common.scss"></style>
