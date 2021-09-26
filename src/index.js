/*
 * @Author: 李闪闪
 * @Date: 2021-09-26 10:57:30
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-26 13:55:50
 * @Description: 
 */
class FastCache {
    constructor() {
        this.list = {}
    }
    set(key, value) {
        this.list[key] = value;
    }
    get(key) {
        return this.list[key];
    }
}
window.FastCache = FastCache;