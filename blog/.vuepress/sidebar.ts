import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "文章",
            icon: "book",
            prefix: "posts/",
            children: "structure",
        },
        {
            text: "工具",
            icon: "screwdriver-wrench",
            prefix: "tools/",
            // 表示按照目录结构
            children: "structure",
        },
        "intro",
        "slides",
    ],
});
