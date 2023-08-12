import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "文章",
            icon: "book",
            prefix: "posts/",
            children: "structure",
            collapsible: true,
        },
        {
            text: "工具相关",
            icon: "screwdriver-wrench",
            prefix: "tools/",
            // 表示按照目录结构
            children: "structure",
            collapsible: true,
        },
        "intro",
        "slides",
    ],
});
