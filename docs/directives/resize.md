# v-resize 指令

## 介绍

`v-resize` 指令主要作用是监听元素的尺寸变化，并在尺寸变化时触发回调函数。

## 使用方法

将 `v-resize` 指令添加到需要支持复制功能的元素上：

```vue
<template>
  <div v-resize="{ callback: handleResize }">Resize me!</div>
</template>
```

## 基本用法（响应式布局）

<ResizeDemo />

::: details 查看代码
<<< @/.vitepress/components/vResize/ResizeDemo.vue
:::

## 图表自适应

<ChartDemo />

::: details 查看代码
<<< @/.vitepress/components/vResize/ChartDemo.vue
:::

## 自适应图片

<AdaptiveImageDemo />

::: details 查看代码
<<< @/.vitepress/components/vResize/AdaptiveImageDemo.vue
:::

## 动态字体大小

<FontSizeDemo />

::: details 查看代码
<<< @/.vitepress/components/vResize/FontSizeDemo.vue
:::

## 表单自适应

<FormDemo />

::: details 查看代码
<<< @/.vitepress/components/vResize/FormDemo.vue
:::

## API

<ApiTable :data="apiTableDate" />

<script setup>
import ResizeDemo from '../.vitepress/components/vResize/ResizeDemo.vue';
import ChartDemo from '../.vitepress/components/vResize/ChartDemo.vue';
import AdaptiveImageDemo from '../.vitepress/components/vResize/AdaptiveImageDemo.vue';
import FontSizeDemo from '../.vitepress/components/vResize/FontSizeDemo.vue';
import FormDemo from '../.vitepress/components/vResize/FormDemo.vue';
import ApiTable from '../.vitepress/components/ApiTable.vue';

const apiTableDate = [
  {
    name: 'callback',
    type: '(rect: DOMRectReadOnly, box?: string) => void',
    default: 'null',
    description: '页面尺寸变化时的回调函数',
    required: true,
  },
  {
    name: 'box',
    type: 'string',
    default: 'content-box',
    description: '盒模型类型',
  },
];
</script>

## 注意事项

::: tip 提示

- `v-resize` 指令在页面加载时不会立即触发回调函数，只有在元素尺寸发生变化时才会触发。
- 上面示例中都需要改变浏览器窗口大小才能触发回调函数，看到具体效果。

:::

::: warning 注意浏览器兼容

- 需要浏览器支持 `ResizeObserver API`
- 对于`box`属性，不同浏览器对盒模型的支持可能有所不同，这里默认使用的是 `content-box`，如果需要使用其他盒模型，请根据实际情况添加`box API`。
- 可支持的盒模型类型有：`border-box` | `content-box` | `device-pixel-content-box`。

:::
