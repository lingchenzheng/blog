import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "文章",
            icon: "fa-book",
            prefix: "posts/",
            children: "structure",
            collapsible: true,
        },
        {
            text: "工具相关",
            icon: "fa-screwdriver-wrench",
            prefix: "tools/",
            // 表示按照目录结构
            children: "structure",
            collapsible: true,
        },
        {
            text: "数据库",
            icon: "fa-database",
            prefix: "database/",
            children: "structure",
            collapsible: true,
        },
        "intro",
        "slides",
    ],
});
