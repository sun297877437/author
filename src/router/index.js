import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [{
        path: "/",
        name: "login",
        component: resolve => require(["@/pages/login"], resolve),
        meta: {
            title: "用户登录"
        }
    },
    {
        path: "/manage",
        name: "manage",
        component: resolve => require(["@/components/manage"], resolve),
        redirect: 'home',
        meta: {
            title: "后台"
        },
        children: [{
                path: "/home",
                name: "home",
                component: resolve => require(["@/pages/home"], resolve),
                meta: {
                    title: "主页"
                }
            }, {
                path: "/articlePub",
                name: "articlePub",
                component: resolve => require(["@/pages/articlePub"], resolve),
                meta: {
                    title: "发表文章"
                }
            },
            {
                path: "/videoPub",
                name: "videoPub",
                component: resolve => require(["@/pages/videoPub"], resolve),
                meta: {
                    title: "发表视频"
                }
            },
            {
                path: "/videoAdd",
                name: "videoAdd",
                component: resolve => require(["@/pages/videoAdd"], resolve),
                meta: {
                    title: "添加视频"
                }
            }, {
                path: "/articleList",
                name: "articleList",
                component: resolve => require(["@/pages/articleList"], resolve),
                meta: {
                    title: "美文列表"
                }
            },
            {
                path: "/videoList",
                name: "videoList",
                component: resolve => require(["@/pages/videoList"], resolve),
                meta: {
                    title: "课程列表"
                }
            },
            {
                path: "/userInfo",
                name: "userInfo",
                component: resolve => require(["@/pages/userInfo"], resolve),
                meta: {
                    title: "个人信息"
                }
            },
            {
                path: "/editInfo",
                name: "editInfo",
                component: resolve => require(["@/pages/editInfo"], resolve),
                meta: {
                    title: "信息修改"
                }
            },
            {
                path: "/editPassword",
                name: "editPassword",
                component: resolve => require(["@/pages/editPassword"], resolve),
                meta: {
                    title: "修改密码"
                }
            }
        ]
    }
];

const router = new Router({
    // mode: "history",
    base: "/www/",
    routes
});

export default router;