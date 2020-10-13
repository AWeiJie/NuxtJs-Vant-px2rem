/**
 *  动态计算rem值
 *  以尺寸750为基准
 */
import Vue from 'vue'
var countRem= {
    install(Vue){
        Vue.prototype.countRem = (val) => {
        		return `${val / 750 * 10}rem`
        };
    }
}
Vue.use(countRem);
