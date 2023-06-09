//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'
import nProgress from '../hooks/userNprogress'
const NProgress = nProgress()
//创建路由器
const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
router.beforeEach((to, from, next) => {
  // 开启进度条动画
  NProgress.start()
  // if()
  next()
})

router.afterEach(() => {
  // 关闭进度条动画
  NProgress.done()
})
export default router
