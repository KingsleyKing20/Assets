/***********************************

> 应用名称：Stay去除仓库广告
            
[rewrite_local]

# ～ Stay（2022-10-17）
^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://github.com/KingsleyKing/Cuttlefish/raw/master/Script/stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let KingsleyKing = JSON.parse($response.body);
if (KingsleyKing.biz) {
    KingsleyKing.biz = Object.values(KingsleyKing.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(KingsleyKing) });
