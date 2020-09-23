<!--
 * @LastEditors: liusaisai
 * @LastEditTime: 2020-09-23 10:14:06
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    姓名: {{obj.name}}<br>
    年龄: {{obj.age}}<br>
    变更名字: {{obj2.name}}<br>
    变更数字: {{num}}<br>
    再次变更: {{num2.value}}<br>
  </p>
</template>

<script>
import { ref, reactive, readonly, computed, watch } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);
    const obj = reactive({
      name: "lss",
      age: 18,
    });
    // readonly参数可以是一个响应式或者普通对象或者是ref，返回是只读代理，不可以改变
    const obj2 = readonly(obj);
    obj2.name = '李四';
    // computed是一个函数，他需要传一个getter函数，返回值是一个不能手动修改的ref对象
    const num = computed(() => count.value + 1);
    // 想要修改就需要传递一个有get和set函数的对象、
    const num2 = computed({
      get: () => num,
      set: value => num.value = value
    })
    num.value = 3;

    // 监听  第一参除了可以是上面那种有返回值的getter函数，也可以是一个ref对象
    // 也可以监听多个
    watch(
      // () => obj.name,
      // (name, perName) => {
      //   console.log(`new ${name}---old ${perName}`);
      // },
      [num, ()=>obj.name], ([newNum, newName], [oldNum, oldName]) => {
        console.log(`new ${(newNum)},${(newName)}---old ${(oldNum)},${oldName}`);
      }
    );
    setTimeout(() => {
      num2.value = 9;
      obj.name = '变更';
    }, 1000)
    return { count, obj, obj2, num, num2 };
  },
};
</script>
