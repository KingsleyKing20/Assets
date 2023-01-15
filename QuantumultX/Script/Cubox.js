/******************************

脚本功能：Cubox-收藏阅读+解锁VIP
下载地址：http://mtw.so/5IpOxH
软件版本：7.1.1
更新时间：2022-9-19
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/KingsleyKing20/Assets/master/QuantumultX/Script/Cubox.js


[mitm] 

hostname = cubox.pro

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';


if (url.indexOf(vip) != -1) {
    obj.data.level = 1;
    obj.data.expireTime = "2099-09-12T23:50:23+08:00";
    obj.data.nickName = "KingsleyKing";
    obj.data.thirdNickName = "KingsleyKing";
    obj.data.isExpire = false;
    obj.data.active = true;
    obj.data.payTime = 1660006006;

	body = JSON.stringify(obj);
}


$done({body});
