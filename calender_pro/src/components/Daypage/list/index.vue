<template>
  <div class="day-list">
    <list-item
      title="当前年月"
      :content="data['year-month']"
    />
    <list-item
      title="今年属相"
      :content="data.animalsYear"
    />
    <list-item
      title="农历年份"
      :content="data.lunarYear"
    />
    <list-item
      title="适宜事件"
      :content="data.suit"
    />
    <list-item
      title="避免事件"
      :content="data.avoid"
    />
  </div>
</template>

<script>
import ListItem from './item';

export default {
  name: 'DayLsit',
  props: {
    data: Object,
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
  .day-list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>
