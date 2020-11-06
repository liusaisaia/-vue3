<template>
  <div class="container">
    Month pages
  </div>
</template>

<script>
import getData from '@/services';
import { onMounted } from 'vue';
export default {
  name: 'MonthPage',
  setup () {
    onMounted(() => {
      getData('month', '2012-1')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
