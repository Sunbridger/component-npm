# component-npm
npm包发布的一个预设仓库

##npm install --save-dev安装所需依赖
```
"devDependencies": {
    "cheerio": "^1.0.0-rc.3",
    "request": "^2.88.0"
}
```

###形如下面方式编写即可
```
let pro = require('xxx');
pro.then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e)
})
```