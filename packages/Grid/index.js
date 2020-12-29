// 导入组件，组件必须声明 name
import Grid from './Grid.vue'

// 为组件提供 install 安装方法，供按需引入
Grid.install = function (Vue) {
    Vue.component(Grid.name, Grid)
}

// 默认导出组件
export default Grid

