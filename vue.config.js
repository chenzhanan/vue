module.exports={
    //每次改过都需要重新启动 npm run serve
    //这里相当于是一个小服务器
    devServer:{//开发服务器配置
        proxy:{//代理是从指定的target后面开始匹配的,
            "/api":{//axios访问/api/banner == https://uncle9.top/api/banner
                //target+/api
                target:"https://uncle9.top"
            }
        }
    }
}
// module.exports={
//     devServer:{ //开发服务器配置
//       proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
//         '/api':{//axios访问 /api/xx ==  target + /api/xx  
//           // target:'http://localhost:3000',
//           // target:'https://uncle9.top',
//           target:"https://uncle9.top",
//           changeOrigin:true,//创建虚拟服务器 
//           // ws:true,//websocket代理
//         },
//         '/douban':{// axios 访问 /douban == target + '/douban'
//           target:'https://douban.uieee.com',
//           changeOrigin:true,
//           pathRewrite:{//路径替换
//             '^/douban':'',// axios 访问/douban/v2/xx == target +'' + /v2
//           }
//         }
//       }
//     }
//   }