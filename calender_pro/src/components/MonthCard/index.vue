<template>
  <div class="card-wrapper" v-for="item in date" :key="item.name">
    <div class="card">
      <h1 class="text lunar">{{ item.name }}</h1>
      <h2 class="text date">{{ item.festival }}</h2>
    </div>
    <p>{{ item.desc }}</p>
    <p>{{ item.rest }}</p>
  </div>
</template>

<script>
export default {
  name: 'monthCard',
  props: {
    date: Object
  },
  setup () {

  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    margin: 0.15rem;
    box-sizing:  border-box;
    box-shadow: .015rem .05rem .05rem #666;
    border-radius: .15rem;
    padding-bottom: .2rem;

    .card {
      background:  url('~@/assets/image/logo.png') no-repeat center;
      border-radius: .15rem .15rem 0 0;
      overflow: hidden;
      border: 1px solid #ddd;
      color: #fff;

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

    p {
      font-size: .15rem;
      margin-top: .05rem;
      padding: 0.1rem;
    }
  }
</style>
