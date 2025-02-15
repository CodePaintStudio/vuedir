import { defineConfig } from "vitepress";
import { resolve } from "path";

export default defineConfig({
  title: "CP-VueDir",
  description: "Vue 3 指令集合",
  vite: {
    resolve: {
      alias: {
        "@cp-vuedir/core": resolve(__dirname, "../../core/src"),
      },
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "指令", link: "/directives/" },
      { text: "Github", link: "https://github.com/CodePaintStudio/vuedir" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "贡献指南", link: "/guide/contributing" },
          ],
        },
      ],
      "/directives/": [
        {
          text: "指令",
          items: [
            { text: "v-focus", link: "/directives/focus" },
            { text: "v-copy", link: "/directives/copy" },
          ],
        },
      ],
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: () => false,
      },
    },
  },
});
