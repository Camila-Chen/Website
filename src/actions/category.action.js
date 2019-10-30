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
        options:
            [
                '时尚及服饰',
                '珠宝与饰品',
                '艺术及工艺',
            ]
    },
    {
        id: '3',
        name: '摄影',
        options: [
            '活动及描绘',
            '商业及社论',
            '旅游纪录片',
        ]
    },
    {
        id: '4',
        name: '影片',
        options: [
            "电影",
        ]
    },
    {
        id: '5',
        name: '音乐',
        options: [
            '独奏音乐家',
            '乐团',
            '音乐推广',
        ]
    },
    {
        id: '6',
        name: '设计',
        options: [
            '设计师',
            '代理商',
            '作品集',
        ]
    },
    {
        id: '7',
        name: '餐厅及食物',
        options: [
            '餐饮及厨师',
            '餐厅',
            '咖啡及面包',
        ]
    },
    {
        id: '8',
        name: '旅游观光',
        options: [
            '旅馆及民宿',
            '露营及背包客栈',
        ]
    },
    {
        id: '9',
        name: '活动',
        options: [
            "婚礼",
            "假日庆典",
            "会议和聚会"
        ]
    },
    {
        id: '10',
        name: '作品集及简介',
        options: [
            "作品集",
            "简历",
            "个人"
        ]
    },
    {
        id: '11',
        name: '部落格',
        options: [
            "时尚和美容",
            "生活方式",
            "艺术及文化"
        ]
    },
    {
        id: '12',
        name: '健康与保健',
        options: [
            "健康",
            "运动与体能",
        ]
    },
    {
        id: '13',
        name: '美容美发',
        options: [
            "美妆",
            "头发",
        ]
    },
    {
        id: '14',
        name: '时尚风格',
        options: [
            "时尚",
            "配件",
        ]
    },
    {
        id: '15',
        name: '社群和教育',
        options: [
            "社群",
            "教育",
        ]
    },
    {
        id: '16',
        name: '创意艺术',
        options: [
            "表演艺术",
            "文学艺术",
            "视觉艺术",
        ]
    },
    {
        id: '17',
        name: '登录页面',
        options: [
            "敬请期待",
            "促销页面",
        ]
    },

]

export async function getCategories() {
    return categories;
}