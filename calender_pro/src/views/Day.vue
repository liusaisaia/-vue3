<template>
  <div class="container">
    <day-card :date="dayData" />
    <day-list :data="dayData"/>
  </div>
</template>

<script>
import getData from '@/services';
import DayCard from '@/components/Daypage/Card';
import DayList from '@/components/Daypage/list';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { getNowDate } from '@/libs/utils';
export default {
  name: 'DayPage',
  components: {
    DayCard,
    DayList
  },
  setup () {
    const store = useStore(),
          state = store.state;

    onMounted(() => {
      getData(store, 'day', getNowDate('day'));
    });
    console.log(state.dayData);
    return {
      dayData: computed(() => state.dayData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
