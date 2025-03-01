<template>
  <div ref="targetRef">目标元素</div>
  <div></div>
  <span v-scrollTo="{ to: targetRef, duration: 1000, behavior: 'smooth' }">
    滚动到目标
  </span>
  <!-- <div v-resize="{ callback: onResize }"
    style="width: 100%; height: 200px; border: 1px solid #000; padding: 20px;">
    调整窗口大小试一试
  </div> -->
  <!-- <div v-resize="resizeOptions" style="width: 100%; height: 200px; border: 1px solid #000;">
    调整窗口大小试试
  </div>
  <button @click="toggleCallback">切换回调函数</button> -->
  <!-- <div v-resize="resizeOptions" style="width: 100%; height: 200px; border: 1px solid #000;">
    调整窗口大小试试
  </div> -->

  <!-- 使用 content-box -->
  <!-- <div v-resize="{ callback: onResize, box: 'content-box' }"
    style="width: 100%; height: 200px; padding: 20px; border: 10px solid #000;">
    调整窗口大小试试（content-box）
    <div v-resize="{ callback: onResize}" style="width: 50%; height: 100px; padding: 20px; border: 10px solid #000;"></div>
  </div> -->

  <!-- 使用 border-box -->
  <!-- <div v-resize="{ callback: onResize, box: 'border-box' }"
    style="width: 100%; height: 200px; padding: 20px; border: 10px solid #000;">
    调整窗口大小试试（border-box）
  </div> -->

  <div v-resize="{ callback: onResize }" style="width: 100%; height: 300px; overflow: hidden;">
    <img :src="imageUrl" :style="imageStyle" alt="自适应图片" />
  </div>

  <div v-resize="{ callback: onResize8, box: 'border-box' }" style="width: 100%; height: 300px; overflow: hidden;">
    <p :style="{ fontSize: fontSize + 'px' }">动态调整字体大小</p>
  </div>

  <div v-resize="{ callback: onResize9 }" style="width: 100%; overflow-x: auto;">
    <table style="width: 100%; border: 5px solid black;">
      <thead>
        <tr>
          <th :style="{ width: columnWidths[0] + 'px' }">列 1</th>
          <th :style="{ width: columnWidths[1] + 'px' }">列 2</th>
          <th :style="{ width: columnWidths[2] + 'px' }">列 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>数据 1</td>
          <td>数据 2</td>
          <td>数据 3</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-resize="{ callback: onResize7 }" style="width: 100%; height: 300px; border: 1px solid #000;">
    <div class="chart-container">
      <div v-for="(value, index) in data" :key="index" class="bar" :style="{ height: value * scale + 'px' }"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { vScrollTo, vResize } from "@cp-vuedir/core";

const data = ref([10, 20, 30, 40, 50]); // 柱状图数据
const scale = ref(1); // 缩放比例

const onResize7 = (rect: DOMRectReadOnly) => {
  // 根据容器宽度动态调整柱状图的缩放比例
  scale.value = rect.width / 500; // 假设基准宽度为 500px
  console.log('容器宽度:', rect.width, '缩放比例:', scale.value);
};



const targetRef = ref(null);
const imageUrl = 'https://picsum.photos/800/400?random=6';
const imageStyle = ref({});

const onResize = (rect: DOMRectReadOnly, box: string) => {
  console.log('回调函数:', rect.width, rect.height, box);
  if (rect.width < 400) {
    imageStyle.value = { width: '100%', height: 'auto' }; // 小屏：宽度 100%，高度自适应
    console.log(imageStyle.value);

  } else {
    imageStyle.value = { width: 'auto', height: '100%' }; // 大屏：高度 100%，宽度自适应
    console.log(imageStyle.value);

  }
};
const fontSize = ref(16);
const onResize8 = (rect: DOMRectReadOnly) => {
  fontSize.value = Math.max(12, rect.width / 20);
  console.log('元素宽度:', rect.width, '字体大小:', fontSize.value);
};

const columnWidths = ref([100, 150, 200]);
const onResize9 = (rect: DOMRectReadOnly) => {
  const totalWidth = rect.width;
  columnWidths.value = [totalWidth * 0.3, totalWidth * 0.4, totalWidth * 0.3]; // 动态调整列宽
};


const onResize1 = (rect: DOMRectReadOnly) => {
  console.log('回调函数 1:', rect.width, rect.height);
};

const onResize2 = (rect: DOMRectReadOnly) => {
  console.log('回调函数 2:', rect.width, rect.height);
};

const toggleCallback = () => {
  if (resizeOptions.value.callback === onResize1) {
    resizeOptions.value.callback = onResize2;
    console.log('切换到回调函数 2');
  } else {
    resizeOptions.value.callback = onResize1;
    console.log('切换到回调函数 1');
  }
};
const resizeOptions = ref({
  callback: onResize1,
  box: 'border-box',
});

// const resizeOptions = ref({
//   callback: [
//     (rect: DOMRectReadOnly) => {
//       console.log('回调函数 1:', rect.width, rect.height);
//     },
//     (rect: DOMRectReadOnly) => {
//       console.log('回调函数 2:', rect.width, rect.height);
//     },
//   ],
//   box: 'content-box',
// });
</script>

<style scoped>
/* div {
  height: 1000px;
  width: 100%;
  background-color: #f0f0f0;
} */
.chart-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 100%;
  padding: 10px;
  background-color: #f0f0f0;
}

.bar {
  width: 40px;
  background-color: #42b983;
  margin: 0 5px;
  transition: height 0.3s ease;
  /* 添加过渡效果 */
}
</style>
