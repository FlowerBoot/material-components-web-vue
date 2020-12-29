// 导入组件，组件必须声明 name
import TopAppBar from './TopAppBar.vue'

// 为组件提供 install 安装方法，供按需引入
TopAppBar.install = function (Vue) {
    Vue.component(TopAppBar.name, TopAppBar)
}

// 默认导出组件
export default TopAppBar

