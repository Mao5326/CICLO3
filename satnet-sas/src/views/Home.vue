<template>
  <div>
    <topHead />
    <tab />
    <botFoot />
  </div>
</template>

<script>
import botFoot from '../components/Footer.vue'
import topHead from '../components/Head.vue'
import tab from '../components/Tab.vue'

  export default {
    name: 'Home',

    components: {
        topHead,
        tab,
        botFoot
    },
  }
</script>