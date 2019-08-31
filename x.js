//// LOGIN GOJEK WITH BEARER ATAU ACCESS TOKEN -> REDEEM VOUCHER ////

const fetch = require('node-fetch');
const readline = require('readline-sync');
const uuidv4 = require('uuid/v4');
var uuid = uuidv4();

// const nomornya = readline.question('Masukan nomor HP: ');
const aksestokennya = readline.question('Masukan akses tokennya: ');

const bikinunik = length => new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const functionsendotp = (uuid, uniknya) => new Promise((resolve, reject) => {
    const url = 'https://api.gojekapi.com/v4/customers/login_with_phone'
    const badan =  {
        "phone": nomornya
    }
    fetch(url, {
        method: 'POST',
        headers: { 
            'X-Session-ID': uuid,
            'X-Platform': 'Android',
            'X-UniqueId': uniknya,
            'X-AppVersion': '3.34.1',
            'X-AppId': 'com.gojek.apn',
            // D1: 9E:7B:05:A1:39:3E:15:9C:B5:3D:85:E5:0A:6D:9B:3B:61:0F:50:6A:3A:EB:67:35:73:7B:EB:5F:6E:80:B1:2B 
            'Accept': 'application/json',
            'X-PhoneModel': 'Xiaomi,Redmi Note 4',
            'X-PushTokenType': 'FCM',
            'X-DeviceOS': 'Android,6.0',
            // 'User-uuid': '289028939',
            'X-DeviceToken': 'dEThVxynoKw:APA91bGaRm71ebDIFW-UZu4FDnRA-EqYUIVbZEKgFcdjR0yBTNZeQcFjsG1BQ4RYLS1NtaDy45q6GravAZOnRI9aC4bZYpwyocwhjLB2V0vRv5JcoHgrruUPK01OtlCKNGH8_Ti-FA5U',
            'Authorization': 'Bearer',
            'Accept-Language': 'en-ID',
            'X-User-Locale': 'en_ID',
            'X-Location': '-6.2178388,106.8953128',
            'X-Location-Accuracy': '4.433',
            'X-M1': '1:__9de1deadafae46bbbb6703b54a521a40,2:794723806,3:1566304446377-7239558093263557724,4:54335,5:mt6797|1391|10,6:02:00:00:00:00:00,7:".",8:1080x1920,9:passive\,gps\,network,10:1,11:ZkRNSG5FVHNvb0pGe2FiaFpld0ZlZFdUd1FURFFlUQA=',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '24',
            'Host': 'api.gojekapi.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.1'
        },
        body: JSON.stringify(badan)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result) // console.log(result) PENTING
    })
    .catch(err => {
        reject(err) // console.log(err) PENTING
    })

});

const functionverify = (tokennya, otpnya, uuid, uniknya) => new Promise((resolve, reject) => {
    const url = 'https://api.gojekapi.com/v4/customers/login/verify'
    const badan = {
        "client_name":"gojek:cons:android",
        "client_secret":"83415d06-ec4e-11e6-a41b-6c40088ab51e",
        "data":{
            "otp": otpnya,
            "otp_token": tokennya
            },
            "grant_type":"otp",
            "scopes":"gojek:customer:transaction gojek:customer:readonly"
        }
    fetch(url, {
        method: 'POST',
        headers: { 
            'X-Session-ID': uuid,
            'X-Platform': 'Android',
            'X-UniqueId': uniknya,
            'X-AppVersion': '3.34.1',
            'X-AppId': 'com.gojek.apn',
            // D1: 9E:7B:05:A1:39:3E:15:9C:B5:3D:85:E5:0A:6D:9B:3B:61:0F:50:6A:3A:EB:67:35:73:7B:EB:5F:6E:80:B1:2B 
            'Accept': 'application/json',
            'X-PhoneModel': 'Xiaomi,Redmi Note 4',
            'X-PushTokenType': 'FCM',
            'X-DeviceOS': 'Android,6.0',
            // 'User-uuid': '289028939',
            'X-DeviceToken': 'dEThVxynoKw:APA91bGaRm71ebDIFW-UZu4FDnRA-EqYUIVbZEKgFcdjR0yBTNZeQcFjsG1BQ4RYLS1NtaDy45q6GravAZOnRI9aC4bZYpwyocwhjLB2V0vRv5JcoHgrruUPK01OtlCKNGH8_Ti-FA5U',
            'Authorization': 'Bearer',
            'Accept-Language': 'en-ID',
            'X-User-Locale': 'en_ID',
            'X-Location': '-6.2178388,106.8953128',
            'X-Location-Accuracy': '4.433',
            'X-M1': '1:__9de1deadafae46bbbb6703b54a521a40,2:794723806,3:1566304446377-7239558093263557724,4:54335,5:mt6797|1391|10,6:02:00:00:00:00:00,7:".",8:1080x1920,9:passive\,gps\,network,10:1,11:ZkRNSG5FVHNvb0pGe2FiaFpld0ZlZFdUd1FURFFlUQA=',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '24',
            'Host': 'api.gojekapi.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.1'
        },
        body: JSON.stringify(badan)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result) // console.log(result) PENTING
    })
    .catch(err => {
        reject(err) // console.log(err) PENTING
    })

});

const functionredeemvoc = (uuid, uniknya, aksestokennya, kodepromonya) => new Promise((resolve, reject) => {
    const url = 'https://api.gojekapi.com/go-promotions/v1/promotions/enrollments'
    const badan = {
        "promo_code": kodepromonya
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'X-Session-ID': uuid,
            'X-Platform': 'Android',
            'X-UniqueId': uniknya,
            'X-AppVersion': '3.34.1',
            'X-AppId': 'com.gojek.apn',
            // D1: 9E:7B:05:A1:39:3E:15:9C:B5:3D:85:E5:0A:6D:9B:3B:61:0F:50:6A:3A:EB:67:35:73:7B:EB:5F:6E:80:B1:2B 
            'Accept': 'application/json',
            'X-PhoneModel': 'Xiaomi,Redmi Note 4',
            'X-PushTokenType': 'FCM',
            'X-DeviceOS': 'Android,6.0',
            // 'User-uuid': useridnya,
            'X-DeviceToken': 'dEThVxynoKw:APA91bGaRm71ebDIFW-UZu4FDnRA-EqYUIVbZEKgFcdjR0yBTNZeQcFjsG1BQ4RYLS1NtaDy45q6GravAZOnRI9aC4bZYpwyocwhjLB2V0vRv5JcoHgrruUPK01OtlCKNGH8_Ti-FA5U',
            'Authorization': `Bearer ${aksestokennya}`,
            'Accept-Language': 'en-ID',
            'X-User-Locale': 'en_ID',
            'X-Location': '-6.2178388,106.8953128',
            'X-Location-Accuracy': '4.433',
            'X-M1': '1:__9de1deadafae46bbbb6703b54a521a40,2:794723806,3:1566304446377-7239558093263557724,4:54335,5:mt6797|1391|10,6:02:00:00:00:00:00,7:".",8:1080x1920,9:passive\,gps\,network,10:1,11:ZkRNSG5FVHNvb0pGe2FiaFpld0ZlZFdUd1FURFFlUQA=',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '24',
            'Host': 'api.gojekapi.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.1'
        },
        body: JSON.stringify(badan)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result) // console.log(result) PENTING
    })
    .catch(err => {
        reject(err) // console.log(err) PENTING
    })

});


(async () => {
    try{
        const uniknya = bikinunik(16);
        // const sendotp = await functionsendotp();
        // console.log(sendotp);
        // const tokennya = sendotp.data.login_token;
        // const otpnya = await readline.question('Masukan OTP: ');
        // const verify = await functionverify(tokennya, otpnya, uuid, uniknya);
        // console.log(verify);
        // const aksestokennya = await verify.data.access_token;
        // const useridnya = await verify.data.resource_owner_id;
        // console.log(aksestokennya);
        // console.log(getdata);
        // const ambildata = await getdata(uuid, uniknya, useridnya, aksestokennya);
        // console.log(ambildata);
        const kodepromonya = await readline.question('Masukan Kode Voucher yang ingin kamu redeem: ')
        const redeemvoc = await functionredeemvoc(uuid, uniknya, aksestokennya, kodepromonya);
        console.log(redeemvoc);
        const notifnya = redeemvoc.data.message;
        console.log(notifnya);
        // const namanya = verify.data.customer.name;
        // const emailnya = verify.data.customer.email;
        // console.log('Success Login');
        // console.log('Nama: '+namanya);
        // console.log('Email: '+emailnya);

    }catch(e){
        console.log(e) 
    }

})();