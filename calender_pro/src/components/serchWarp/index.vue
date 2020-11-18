<template>
  <div class="search_warp">
    <input type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      v-model="inputValue"
      @input="searchData($event)"
    >
    <svg @click="searchBtn" class="searchBtn" t="1605058715938"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3194" width="30" height="30"><path d="M768.1 505.8c-8.3 0-15-6.7-15-15 0-58.3-18.7-113.4-54.1-159.5-34.3-44.7-82.8-77.7-136.6-92.9-23.2-6.6-47.3-9.9-71.7-9.9-8.3 0-15-6.7-15-15s6.7-15 15-15c27.1 0 54 3.7 79.9 11 60 17 114.1 53.8 152.2 103.5 39.4 51.4 60.3 112.9 60.3 177.8 0 8.3-6.7 15-15 15z" fill="#ed4040" p-id="3195"></path><path d="M918.5 876.2l-144-144.6c-11.7-11.7-30.7-11.8-42.4-0.1-11.7 11.7-11.8 30.7-0.1 42.4l144 144.6c5.9 5.9 13.6 8.8 21.3 8.8 7.7 0 15.3-2.9 21.2-8.7 11.6-11.7 11.7-30.7 0-42.4z" fill="#ed4040" p-id="3196"></path><path d="M708.9 776.4c-16.3-5.2-33.5-4.4-49.1 2-1.8 0.6-3.5 1.4-5.2 2.3-0.2 0.1-0.4 0.2-0.7 0.4l-1.5 0.9c-49.2 27.3-105 41.8-161.6 41.8-88.9 0-172.5-34.6-235.4-97.5-62.9-62.9-97.5-146.5-97.5-235.4s34.6-172.5 97.5-235.4S401.9 158 490.8 158s172.5 34.6 235.4 97.5c62.9 62.9 97.5 146.5 97.5 235.4 0 57.3-14.8 113.7-42.7 163.3-1.3 2.3-2.2 4.7-2.9 7.1-6.3 17.1-5.9 35.7 1.2 52.6 7.4 17.8 21.3 31.5 39.2 38.8 8.9 3.6 18.1 5.4 27.2 5.4 28.4 0 55.4-16.9 66.8-44.7 9.1-22.2 6.6-47.3-6.7-67.2-9.2-13.8-27.8-17.5-41.6-8.4-13.8 9.2-17.5 27.8-8.4 41.6 2.2 3.4 2.7 7.6 1.1 11.3-2.5 6.1-9.6 9.1-15.7 6.6s-9.1-9.6-6.6-15.7c0.1-0.2 0.2-0.5 0.3-0.8 31.9-57.8 48.8-123.3 48.8-189.8 0-53-10.4-104.5-30.9-152.9-19.8-46.8-48.1-88.8-84.2-124.9-36.1-36.1-78.1-64.4-124.9-84.2-48.5-20.5-99.9-30.9-152.9-30.9S386.3 108.5 337.9 129C291 148.6 249 176.9 213 213c-36.1 36.1-64.4 78.1-84.2 124.9-20.5 48.5-30.9 99.9-30.9 152.9s10.4 104.5 30.9 152.9c19.8 46.8 48.1 88.8 84.2 124.9 36 36.1 78 64.4 124.8 84.2 48.5 20.5 99.9 30.9 152.9 30.9 66.9 0 132.9-17.1 191-49.5 5.8-2.8 12.9-0.5 15.9 5.3 2 3.9 1.3 7.4 0.8 9.2s-2.1 5.1-5.9 7c-3.6 1.8-7.8 1.8-11.3-0.1-14.6-7.9-32.8-2.5-40.7 12-7.9 14.6-2.5 32.8 12 40.7 10.8 5.9 22.6 8.8 34.5 8.8 11.3 0 22.7-2.7 33.1-8.1 17.1-8.8 29.7-23.8 35.6-42.1s4.2-37.9-4.7-55c-8.8-17-23.8-29.7-42.1-35.5z" fill="#ed4040" p-id="3197"></path></svg>
  </div>
</template>

<script>
import getData from '@/services';
import { useStore } from 'vuex';
import { ref, onMounted, computed, watch } from 'vue';
import { getNowDate, dayConversion } from '@/libs/utils';
import { useRouter } from "vue-router";
export default {
  name: 'searchInput',
  props: {
    placeholder: String,
    maxlength: Number,
    dateTime: String
  },
  setup (ctx) {
    const store = useStore(),
          router = useRouter(),
          state = store.state;
    const inputValue = ref('');
    const searchData = (e) => {
    }
    const searchBtn = () => {
      let time = '';
      console.log(ctx);
      if (ctx.dateTime === 'day') {
        time = inputValue.value;
        if (time.length < 8) return;
        getData(store, ctx.dateTime, dayConversion( ctx.dateTime, time));
      } else if (ctx.dateTime === 'month') {
        time = inputValue.value;
        if (time.length < 6) return;
        getData(store, ctx.dateTime, dayConversion( ctx.dateTime, time));
      } else if (ctx.dateTime === 'year') {
        time = inputValue.value;
        if (time.length < 4) return;
        getData(store, ctx.dateTime, dayConversion( ctx.dateTime, time));
      }
    }
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (val) => {
        inputValue.value = '';
      }
    )

    return {
      inputValue,
      searchData,
      searchBtn,
      dayData: computed(() => state.dayData)
    }
  }
}
</script>

<style lang="scss" scoped>
.search_warp {
  position: fixed;
  top: .44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .38rem;
  padding: .03rem .1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;

  input {
    width: 100%;
    height: 100%;
    font-size: .14rem;
    border: 1px solid #ddd;
    text-indent: .1rem;
    border-radius: .03rem;

    &.focus {
      border-color: #ed4040;
      box-shadow: 0 0 .02rem #ed4040;
      transition: all .3s;
    }
  }

  .searchBtn {
    position: absolute;
    right: 0.1rem;
    top: .06rem;

  }
}
</style>
