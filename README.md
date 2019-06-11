# sunbridger-api-mv 
npm包发布的一个预设仓库
## Git地址 ： https://github.com/Sunbridger/component-npm 

### npm install sunbridger-api-mv  --save-dev

```
"devDependencies": {
    "sunbridger-api-mv": "1.0.0"
}
```

#### 形如下面方式编写即可
```
let pro = require('xxx');
pro.then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e)
})
```