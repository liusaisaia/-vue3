<template>
  <div class="container">
    <year-card :date="yearData" />
  </div>
</template>

<script>
import getData from '@/services';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { getNowDate } from '@/libs/utils';
import YearCard from '@/components/yearCard';
export default {
  name: 'YearPage',
  components: {
    YearCard
  },
  setup () {
    const store = useStore(),
      state = store.state;

    onMounted(() => {
      getData(store, 'year', getNowDate('year'));
      console.log(getData(store, 'year', getNowDate('year')));
    });
    return {
      yearData: computed(() => state.yearData)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: auto;
  padding-bottom: 1rem;
}
</style>
