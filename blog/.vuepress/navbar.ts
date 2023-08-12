import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "我的文章",
        icon: "pen-to-square",
        prefix: "/",
        children: [
            {
                text: "工具相关",
                icon: "screwdriver-wrench",
                prefix: "",
                link: "tools/vscode/基础配置.html",
            },
        ],
    },
]);
