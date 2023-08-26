import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/blog/",

    lang: "zh-CN",
    title: "学习笔记",
    description: "记录每一次成长",
    theme,
    dest: "dist",

    // Enable it with pwa
    // shouldPrefetch: false,
});
