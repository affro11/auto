const fetch = require('node-fetch');
const readline = require('readline-sync');
const uuid = require('uuid/v4');
const cheerio = require('cheerio');
var sessionnya = uuid();

const bikinunik = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const bikinnama = () => new Promise((resolve, reject) => {
	fetch('https://fakenametool.net/random-name-generator/random/id_ID/indonesia/1', {
		method: 'GET'
	})
	.then(res => res.text())
	.then(result => {
		const $ = cheerio.load(result);
		const resText = $('div[class=col-lg-10] span').text();
		resolve(resText);
	})
	.catch(err => {
		reject(err)
	})
});

const nomornya = readline.question('Masukan nomor HP (Format 62813xxxxxxxx atau 1360xxxxxxx): ')

const regis = (emailnya, namanya, nomornya, sessionnya, uniknya) => new Promise((resolve, reject) => {
    // emailnya, namanya, nomornya, sessionnya, uniknya
    const url = 'https://api.gojekapi.com/v5/customers';
    const badan = {
        "email": emailnya,
		"name": namanya,
		"phone": `+${nomornya}`, // (660) 209-2670
		"signed_up_country":"ID"
    }
    fetch(url, {
        method: 'POST',
        headers: { 
            'X-Session-ID': sessionnya,
			'X-Platform': 'Android',
			'X-UniqueId': uniknya,
			'X-AppVersion': '3.34.1',
			'X-AppId': 'com.gojek.app',
			'Accept': 'application/json',
			// 'D1': '03:25:1E:AE:CD:AF:35:FE:18:3C:15:B4:1F:94:6C:C2:0E:54:3D:84:3A:49:89:59:D9:90:EB:62:B8:AC:26:9C',
			'X-PhoneModel': 'Android,Custom',
			'X-PushTokenType': 'FCM',
			'X-DeviceOS': 'Android,6.0', 
			'Authorization': 'Bearer',
			'Accept-Language': 'en-ID',
			'X-User-Locale': 'en_ID',
			'Content-Type': 'application/json; charset=UTF-8',
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

const verify = (sessionnya, uniknya, otpnya, tokennya) => new Promise((resolve, reject) => {
        const url = 'https://api.gojekapi.com/v5/customers/phone/verify';
    
        const boday = {
            "client_name":"gojek:cons:android",
            "client_secret":"83415d06-ec4e-11e6-a41b-6c40088ab51e",
            "data":
            {
                "otp": otpnya,
                "otp_token": tokennya
            }
        };
    
        fetch (url, {
            method : 'POST',
            headers : {
                'X-Session-ID': sessionnya,
                'X-Platform': 'Android',
                'X-UniqueId': uniknya,
                'X-AppVersion': '3.34.1',
                'X-AppId': 'com.gojek.app',
                'Accept': 'application/json',
                // 'D1': '03:25:1E:AE:CD:AF:35:FE:18:3C:15:B4:1F:94:6C:C2:0E:54:3D:84:3A:49:89:59:D9:90:EB:62:B8:AC:26:9C',
                'X-PhoneModel': 'Android,Custom',
                'X-PushTokenType': 'FCM',
                'X-DeviceOS': 'Android,6.0', 
                'Authorization': 'Bearer',
                'Accept-Language': 'en-ID',
                'X-User-Locale': 'en_ID',
                'Content-Type': 'application/json; charset=UTF-8',
                'User-Agent': 'okhttp/3.12.1'
            },
            body: JSON.stringify(boday)
        })
        .then(res => res.json())
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(err)
        })
    });

const functionredeemvoc = (sessionnya, uniknya, aksesnya) => new Promise((resolve, reject) => {
    const url = 'https://api.gojekapi.com/go-promotions/v1/promotions/enrollments'
    const badan = {
        "promo_code": 'GOFOODNASGOR07'
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'X-Session-ID': sessionnya,
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
            'Authorization': `Bearer ${aksesnya}`,
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
        const acak = await bikinunik(11);
        const emailnya = `${acak}@gmail.com`;
        const namanya = await bikinnama();
        const register = await regis(emailnya, namanya, nomornya, sessionnya, uniknya);
        console.log(register)
        const otpnya = readline.question('Masukan OTP: ')
        const tokennya = register.data.otp_token
        const verifyOTP = await verify(sessionnya, uniknya, otpnya, tokennya);
        console.log(verifyOTP)
        // const kodepromonya = readline.question('Masukan kode voucher yang ingin kamu redeem: ')
        const aksesnya = verifyOTP.data.access_token
        console.log(aksesnya)
        const redeem = await functionredeemvoc(sessionnya, uniknya, aksesnya)
        console.log(redeem)

    }catch(e){
        console.log(e) 
    }

})();