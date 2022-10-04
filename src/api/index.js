/**
 * 请求方法
 */
import axios from 'axios'
import base from './base'
import Qs from 'qs'
const api = {
    /**
     * 获取文案列表
     */
    getArticleList(params) {//{page:xx}
        return axios.get(base.articleList, params,)
    },
    /**
     * 搜索文案数据
     */
    getSearch(params) {//{search:xx}
        return axios.get(base.search, params)
    },
    //地区
    getAreaList(params) {//{name:xx}
        return axios.get(base.areaList, params)
    },
    postAreaAdd(params) {//{name:xx}
        return axios.postForm(base.areaAdd, params)
    },
    postAreaDelete(params) {//{name:xx}
        return axios.postForm(base.areaDelete, params)
    },
    //分类
    getClassList(params) {//{name:xx}
        return axios.get(base.classList, params)
    },
    postClassAdd(params) {//{name:xx}
        return axios.postForm(base.classAdd, params)
    },
    postClassDelete(params) {//{name:xx}
        return axios.postForm(base.classDelete, params)
    },
    //语言
    getLanguageList(params) {
        return axios.get(base.languageList, params)
    },
    postLanguageAdd(params) {//{name:xx}
        return axios.postForm(base.languageAdd, params)
    },
    postLanguageDelete(params) {//{name:xx}
        return axios.postForm(base.languageDelete, params)
    },
}

export default api