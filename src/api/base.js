/***
 * 接口路径配置
 */

const base = {
    host:'http://localhost:9999',//基础域名

    articleList: '/api/articlemanager/list',//文案列表
    search: '/api/articlemanager/search',//文案搜索
    //语言
    languageAdd: '/api/articlemanager/languageadd',
    languageList: '/api/articlemanager/languagelist',
    languageDelete: '/api/articlemanager/languagedelete',
    //地区
    areaList: '/api/articlemanager/arealist',
    areaAdd: '/api/articlemanager/areaadd',
    areaDelete: '/api/articlemanager/areadelete',
    //分类
    classList: '/api/articlemanager/classlist',
    classAdd: '/api/articlemanager/classadd',
    classDelete: '/api/articlemanager/classdelete',

    //图片上传地址
    uploadUrl:'/api/articlemanager/uploadimage'
    
}
export default base;
