<template>
  <div class="card-wrapper" v-for="item in date" :key="item.name">
    <div class="card">
      <h1 class="text lunar">{{ item.name }}</h1>
      <h2 class="text date">{{ item.startday }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: Object
  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    padding: 0.15rem;
    box-sizing:  border-box;

    .card {
      background:  url('~@/assets/image/logo.png') no-repeat center;
      border-radius: .15rem;
      overflow: hidden;
      border: 1px solid #ddd;
      color: #fff;

      .header {
        height:  .35rem;
        padding: .1rem;
        box-sizing: border-box;
        font-size: .1rem;
        background-color: rgba(0, 0, 0, .3);

      }
      .text {
        text-align: center;
        margin: .3rem 0;
        text-shadow: .02rem .05rem .05rem #666;

        &.lunar {
          color: #f75555;
          font-size: .5rem;
          font-weight: bold;
        }

        &date {
          font-size: .2rem;
        }
      }
    }
  }
</style>
