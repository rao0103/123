<template>
  <div>
    <h1>{{ area }}</h1>
    <h2>{{ sum }}</h2>
    <button @click="sum = 1000">sum=1000</button>
  </div>
</template>
<script lang="ts" setup>
//定义setup属性的script标签内部相当于setup函数体
//需要定义在setup函数中的组合式API可以直接使用,并且会自动返回其中定义的所有变量和函数
// import { computed, reactive } from "vue";
// defineOptions({});
const data = reactive({ a: 1, b: 2 });
//求a和b的平方和
const area = computed(() => Math.pow(data.a, 2) + Math.pow(data.b, 2));
//求a和b的和
const sum = computed({
  //取计算属性sum的值
  get() {
    return data.a + data.b;
  },
  //设置计算属性sum的值
  set(value) {
    //给谁赋值
    data.a = value * 0.3;
    data.b = value * 0.7;
  },
});
// 组合式API的入口在setup函数中
// export default defineComponent({
//   name: "view-feat-0724",
//   setup() {
//     // const data = reactive< a: number; b: number >({a:1,b:2});

//     return { area, sum };
//   },
// });
</script>
