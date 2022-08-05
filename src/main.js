import { createApp } from 'vue'
import App from './App.vue'
import { Button, Dropdown, Input, Layout, Menu, Modal, PageHeader,
 Pagination, Select} from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/antd.css';
import store from './store/store'


createApp(App).use(router).use(store).use(Modal).use(Pagination).use(Layout).use(Menu).use(Input)
.use(Button).use(Dropdown).use(PageHeader).use(Select).mount('#app')
