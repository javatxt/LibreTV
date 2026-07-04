// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置（内置全部影视源，开箱即用）
const API_SITES = {
    hongniu: {
        api: "http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8",
        name: "红牛资源",
        adult: false
    },
    hongniu2: {
        api: "https://www.hongniuzy2.com/api.php/provide/vod/",
        name: "红牛点播",
        adult: false
    },
    liangzi: {
        api: "http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8",
        name: "量子资源",
        adult: false
    },
    liangzi2: {
        api: "https://cj.lziapi.com/api.php/provide/vod/",
        name: "量子点播",
        adult: false
    },
    hhzy: {
        api: "https://hhzyapi.com/api.php/provide/vod",
        name: "豪华点播",
        adult: false
    },
    xinlang: {
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod/",
        name: "新浪点播",
        adult: false
    },
    kuaiyun: {
        api: "https://www.kuaiyunzy.com/api.php/provide/vod/",
        name: "快云点播",
        adult: false
    },
    haiwaikan: {
        api: "http://haiwaikan.com/api.php/provide/vod",
        name: "海外看资源",
        adult: false
    },
    haiwaikan2: {
        api: "https://haiwaikan.com/api.php/provide/vod/",
        name: "海外看点播",
        adult: false
    },
    "360zy": {
        api: "https://360zy.com/api.php/provide/vod/",
        name: "360点播",
        adult: false
    },
    heimuer: {
        api: "https://www.heimuer.tv/api.php/provide/vod",
        name: "黑木耳点播",
        adult: false
    },
    niuniu: {
        api: "https://api.niuniuzy.me/api.php/provide/vod/",
        name: "牛牛点播",
        adult: false
    },
    yaya: {
        api: "https://cj.yayazy.net/api.php/provide/vod/",
        name: "丫丫点播",
        adult: false
    },
    uku: {
        api: "https://api.ukuapi.com/api.php/provide/vod/",
        name: "U酷点播",
        adult: false
    },
    jisu: {
        api: "https://jszyapi.com/api.php/provide/vod/",
        name: "极速点播",
        adult: false
    },
    sijiu: {
        api: "https://49zyw.com/api.php/provide/vod/",
        name: "四九点播",
        adult: false
    },
    suoni: {
        api: "https://suoniapi.com/api.php/provide/vod/",
        name: "索尼点播",
        adult: false
    },
    ikun: {
        api: "https://ikunzyapi.com/api.php/provide/vod/",
        name: "ikun点播",
        adult: false
    },
    feifan: {
        api: "http://cj.ffzyapi.com/api.php/provide/vod/",
        name: "非凡点播",
        adult: false
    },
    baofeng: {
        api: "https://bfzyapi.com/api.php/provide/vod/",
        name: "暴风点播",
        adult: false
    },
    feisu: {
        api: "https://www.feisuzyapi.com/api.php/provide/vod/",
        name: "飞速点播",
        adult: false
    },
    kuaikan: {
        api: "https://www.kuaikan-api.com/api.php/provide/vod/",
        name: "快看点播",
        adult: false
    },
    xiongzhang: {
        api: "https://xzcjz.com/api.php/provide/vod/",
        name: "熊掌点播",
        adult: false
    },
    kuaiche: {
        api: "https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/",
        name: "快车资源",
        adult: false
    },
    shandian: {
        api: "http://sdzyapi.com/api.php/provide/vod/from/sdm3u8",
        name: "闪电资源",
        adult: false
    },
    jinying: {
        api: "http://jyzyapi.com/provide/vod/from/jinyingm3u8",
        name: "金鹰资源",
        adult: false
    },
    tiankong: {
        api: "http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8",
        name: "天空资源",
        adult: false
    },
    huya: {
        api: "https://www.huyaapi.com/api.php/provide/vod/",
        name: "虎牙点播",
        adult: false
    },
    baidu: {
        api: "https://api.apibdzy.com/api.php/provide/vod/",
        name: "百度点播",
        adult: false
    },
    piaoling: {
        api: "https://p2100.net/api.php/provide/vod/",
        name: "飘零点播",
        adult: false
    },
    wujin: {
        api: "https://api.wujinapi.com/api.php/provide/vod/",
        name: "无尽点播",
        adult: false
    },
    subo: {
        api: "https://subocaiji.com/api.php/provide/vod/",
        name: "速博点播",
        adult: false
    },
    modu: {
        api: "https://caiji.moduapi.cc/api.php/provide/vod/",
        name: "魔都点播",
        adult: false
    },
    qihu: {
        api: "https://caiji.qhzyapi.com/api.php/provide/vod/",
        name: "奇虎点播",
        adult: false
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 内置播放解析接口（全部jx解析，自动加载）
const DEFAULT_JX_LIST = [
    "https://yparse.ik9.cc/index.php?url=",
    "https://jx.m3u8.tv/jiexi/?url=",
    "http://82.156.40.118:1234/jx/?url=",
    "https://jx.oftens.top/player/?url=",
    "https://jx.xmflv.com/?url=",
    "https://jx.yangtu.top/?url=",
    "https://dmjx.m3u8.tv/?url=",
    "https://jx.jsonplayer.com/player/?url=",
    "https://www.ckplayer.vip/jiexi/?url=",
    "https://jx.haokantv.cyou/player/?url=",
    "https://jx.playerjy.com/?url=",
    "https://www.pangujiexi.com/jiexi/?url=",
    "https://www.8090.la/8090/?url=",
    "http://43.240.74.102:4433/?url="
];

// 暴露全局解析列表，程序初始化自动读取
window.DEFAULT_JX_LIST = DEFAULT_JX_LIST;

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false
