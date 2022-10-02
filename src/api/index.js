/**
 * 请求方法
 */
import axios from 'axios'
import base from './base'
const api = {
    /**
     * 获取文案列表
     */
    getArticleList(params) {//{page:xx}
        return axios.get(base.articleList, {
            params
        })
    },
    /**
     * 搜索文案数据
     */
    getSearch(params) {//{search:xx}
        return axios.get(base.search, {
            params
        })
    },
}

export default api