const categories = [
    {
        id: '1',
        name: '商业',
        options:
            [
                '咨询和教练',
                '服务与维护',
                '技术与应用程式'
            ]
    },
    {
        id: '2',
        name: '网络商店',
        option: '时尚及服饰',
        option: '珠宝与饰品',
        option: '艺术及工艺',
    },
    {
        id: '3',
        name: '摄影',
        option: '活动及描绘',
        option: '商业及社论',
        option: '旅游纪录片',
    },
    {
        id: '4',
        name: '影片',
        option: "电影",
    },
    {
        id: '5',
        name: '音乐',
        option: '独奏音乐家',
        option: '乐团',
        option: '音乐推广',
    },
    {
        id: '6',
        name: '设计',
        option: '设计师',
        option: '代理商',
        option: '作品集',
    },
    {
        id: '7',
        name: '餐厅及食物',
        option: '餐饮及厨师',
        option: '餐厅',
        option: '咖啡及面包',
    },
    {
        id: '8',
        name: '旅游观光',
        option: '旅馆及民宿',
        option: '露营及背包客栈',
    },
    {
        id: '9',
        name: '活动'
    },
    {
        id: '10',
        name: '作品集及简介'
    },
    {
        id: '11',
        name: '部落格'
    },
    {
        id: '12',
        name: '健康与保健'
    },
    {
        id: '13',
        name: '美容美发'
    },
    {
        id: '14',
        name: '时尚风格'
    },
    {
        id: '15',
        name: '社群和教育'
    },
    {
        id: '16',
        name: '创意艺术'
    },
    {
        id: '17',
        name: '登录页面'
    },

]

export async function getCategories() {
    return categories;
}