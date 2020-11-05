<template>
  <div class="container">
    Day pages
  </div>
</template>

<script>
import getData from '@/services';
import { onMounted } from 'vue';
export default {
  name: 'DayPage',
  setup () {

    onMounted(() => {
      getData('day', '2020-7-1');
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
