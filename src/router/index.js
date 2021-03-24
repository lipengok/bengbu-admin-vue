import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 首页
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '蚌埠学院后台首页', icon: 'dashboard' }
  }]
},
    // 讲师管理
    {
      path: '/edu/teacher',
      component: Layout,
      redirect: '/edu/teacher/list',
      name: 'Teacher',
      meta: { title: '讲师管理', icon: 'people' },
      children: [
        {
          path: 'list',
          name: 'EduTeacherList',
          component: () => import('@/views/edu/teacher/list'),
          meta: { title: '讲师列表' }
        },
        {
          path: 'create',
          name: 'EduTeacherCreate',
          component: () => import('@/views/edu/teacher/form'),
          meta: { title: '添加讲师' }
        },
        {
          path: 'update',
          name: 'EduTeacherEdit',
          component: () => import('@/views/edu/teacher/update'),
          meta: { title: '编辑讲师', noCache: true },
          hidden: false
        },
        {
          path: 'load',
          name: 'EduTeacherupload',
          component: () => import('@/views/edu/teacher/upload'),
          meta: { title: '上传头像', noCache: true },
          hidden: false
        },
        {
          path: 'pic',
          name: 'Pic',
          component: () => import('@/views/edu/teacher/pic'),
          meta: { title: '图标统计', noCache: true },
          hidden: false
        },
        {
          path: 'pics',
          name: 'Pics',
          component: () => import('@/views/edu/teacher/pics'),
          meta: { title: '图片的懒加载', noCache: true },
          hidden: false
        },
        {
          path: 'talke',
          name: 'talke',
          component: () => import('@/views/edu/teacher/talke'),
          meta: { title: '选择对话框', noCache: true },
          hidden: false
        },
        {
          path: 'card',
          name: 'card',
          component: () => import('@/views/edu/teacher/card'),
          meta: { title: '卡片列表', noCache: true },
          hidden: false
        },
        {
          path: 'piclist',
          name: 'piclist',
          component: () => import('@/views/edu/teacher/piclist'),
          meta: { title: '轮播图展示', noCache: true },
          hidden: false
        },
        {
          path: 'zhedietable',
          name: 'zhedietable',
          component: () => import('@/views/edu/teacher/zhedietable'),
          meta: { title: '折叠面板', noCache: true },
          hidden: false
        },
        {
          path: 'date',
          name: 'date',
          component: () => import('@/views/edu/teacher/date'),
          meta: { title: '时间线展示', noCache: true },
          hidden: false
        },
        {
          path: 'dates',
          name: 'dates',
          component: () => import('@/views/edu/teacher/dates'),
          meta: { title: '日历的展示', noCache: true },
          hidden: false
        },
        {
          path: 'img',
          name: 'img',
          component: () => import('@/views/edu/teacher/img'),
          meta: { title: '图片的展示', noCache: true },
          hidden: false
        },
        {
          path: 'backtop',
          name: 'backtop',
          component: () => import('@/views/edu/teacher/backtop'),
          meta: { title: '返回顶部', noCache: true },
          hidden: false
        },
      ]
    },
    // 课程分类管理
    {
      path: '/edu/course',
      component: Layout,
      redirect: '/edu/course/list',
      name: 'Course',
      meta: { title: '课程分类管理', icon: 'nested' },
      children: [
        {
          path: 'list',
          name: 'EduCuorseList',
          component: () => import('@/views/edu/course/list'),
          meta: { title: '课程分类列表' }
        },
        {
          path: 'import',
          name: 'EduCuorseImport',
          component: () => import('@/views/edu/course/import'),
          meta: { title: '导入课程分类' }
        },
        {  
          path: 'info',
          name: 'EduCourseInfo',
          component: () => import('@/views/edu/course/info'),
          meta: { title: '课程基本信息' }
        }, 
        {
          path: 'info/:id',
          name: 'EduCourseInfoEdit',
          component: () => import('@/views/edu/course/info'),
          meta: { title: '编辑课程基本信息', noCache: true },
          hidden: true
        },
        {
          path: 'chapter/:id',
          name: 'EduCourseChapterEdit',
          component: () => import('@/views/edu/course/chapter'),
          meta: { title: '编辑课程大纲', noCache: true },
          hidden: true
         },
         {
          path: 'publish/:id',
          name: 'EduCoursePublishEdit',
          component: () => import('@/views/edu/course/publish'),
          meta: { title: '发布课程', noCache: true },
          hidden: true
          }
      ]
    },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
