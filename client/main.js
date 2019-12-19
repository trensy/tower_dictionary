import Vue from 'vue'
import App from './App'
import Store from "./src/store"

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

App.mpType = 'app'

const app = new Vue({
	Store,
    ...App
})
app.$mount()
