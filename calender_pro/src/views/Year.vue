<template>
  <div class="container">
    Year pages
  </div>
</template>

<script>
import getData from '@/services';
import { onMounted } from 'vue';
export default {
  name: 'YearPage',
  setup () {
    onMounted(() => {
      getData('year', '2020');
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
