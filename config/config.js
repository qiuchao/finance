import mineMenu from "./mineMenu";

// let index = function () {
//     let host = '192.168.1.7';// 图片服务器地址
//     let uploadPort = '5000';//图片服务器端口
//     return {
//         appid: 'wx6eb3b827a5e4c084',
//         secret: '389ca73ce363500cd97bcff684e367cb',
//         TEL_REGEXP: /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
//         PWD_REGEXP: /^ (?=.* [a - zA - Z])(?=.* [0 - 9])[A - Za - z0 - 9]{ 8, 18 } $/,
//         host: host + ":" + uploadPort
//     };
// }

class Config {}
Config.API_HOST = 'http://localhost:5900/jex'
Config.IMG_HOST = 'http://139.159.201.22:9878/finance/images'
Config.APP_ID = ''
Config.SECRET = ''
Config.WHITE_LIST = []
Config.TOKEN_STORAGE_KEY = 'FINANCE_KEY'
Config.MINE_MENUS = mineMenu

export default Config
module.exports = Config