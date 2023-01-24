/***********************************************
> 应用名称：12306去广告
> 更新时间：2023-01-17
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://raw.githubusercontent.com/KingsleyKing20/Assets/master/QuantumultX/Script/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/













const version = 'V1.0.18';

var ddgksf2013=JSON.parse($response.body);ddgksf2013.materialsList&&(1==ddgksf2013.materialsList.length?(ddgksf2013.materialsList[0].filePath="https://api.dujin.org/bing/m.php",ddgksf2013.advertParam.skipTime=1,delete ddgksf2013.materialsList[0].billId,ddgksf2013.materialsList[0].billMaterialsId="6491"):ddgksf2013.materialsList.length>1&&(ddgksf2013.materialsList=[{}])),$done({body:JSON.stringify(ddgksf2013)});
