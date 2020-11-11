<template>
  <div class="container">
    <month-card />
  </div>
</template>

<script>
import getData from '@/services';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { getNowDate } from '@/libs/utils';
import MonthCard from '@/components/MonthCard'
export default {
  name: 'MonthPage',
  components: {
    MonthCard
  },
  setup () {
    const store = useStore(),
          state = store.state;

    onMounted(() => {
      getData(store, 'month', getNowDate('month'));
    });
    // return {
    //   monthData: computed(() => state.monthData)
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
