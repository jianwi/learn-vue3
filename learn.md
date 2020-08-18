## 学到的东西
### webpack 热更新

```
cnpm i webpack-dev-server -D
```
配置 webpack.config.js
```javascript
{
    devtool:"source-map",
    devServer:{
        contentBase:path.resolve(__dirname,"./dist)
    }
}
```
配置 package.json
```json
scripts:{
    "serve": "webpack-dev-server --open"
}
```
    // --open 会自动打开浏览器
