import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "我的文章",
        icon: "fa-book",
        prefix: "/",
        children: [
            {
                text: "工具相关",
                icon: "fa-tools",
                prefix: "",
                link: "tools/vscode/基础配置.html",
            },
            {
                text: "数据库",
                icon: "fa-database",
                prefix: "",
                link: "database/mysql/mysql安装.html",
            },
        ],
    },
]);
