var request = require("request");
const cheerio = require("cheerio");
const baseUrl = "https://www.pearvideo.com/popular";
const url_to = "https://www.pearvideo.com/";
let arr = []; //暂时用全局的变量承接；
function startReq(url = baseUrl) {
    let newUrlArr = [];
    //   let arr=[];
    let type = [10, 1, 2, 9, 5, 8, 4, 3, 31, 6, 59];
    let ranIndex = (Math.random() * 10) | 0;
    url = baseUrl + "_" + type[ranIndex];
    request(url, function (error, response, body) {
        const $ = cheerio.load(body);
        const data = $(".popularembd");
        data.map((el) => {
            newUrlArr.push(url_to + data[el].attribs.href);
        });
        newUrlArr = [...new Set(newUrlArr)];
        newUrlArr.map((newurl) => {
            request(newurl, (err, res, body) => {
                const videoURL= cheerio.load(body).html().split('srcUrl=')[1].split(',vdoUrl=srcUrl')[0];
                arr.push(videoURL);
            });
        });
    });
}
startReq();
module.exports = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (arr.length == 0) {
            reject({
                msg: "网络缓慢，请重试",
                status: -1,
                data: [],
            });
        } else {
            resolve({
                status: 1,
                data: arr,
            });
        }
    }, 2000);
});
