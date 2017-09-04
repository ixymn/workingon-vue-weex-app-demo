const stream = weex.requireModule('stream')
export default function fetch (type , url , data ) {
  type = type.toUpperCase();
  if(type == 'GET'){
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      if(typeof data[key] == "string"){
        data[key] = data[key].replace(/\+/g, "%2B");
        data[key] = data[key].replace(/\&/g, "%26");
      }
      dataStr += key + '=' + data[key] + '&';
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      if(url.indexOf('?')>-1){
        url = url + '&' + dataStr;
      }else{
        url = url + '?' + dataStr;
      }
    }

    return new Promise((resolve, reject) => {
      stream.fetch({
        method: type,
        url: url,
        type: 'json'
      }, (response) => {
        if (response.status == 200) {
          resolve(response.data)
        }
        else {
          reject(response)
        }
      }, () => {})
    })
  } // GET end

  else if(type == 'POST'){
    let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			if(typeof data[key] == "string"){
				data[key] = data[key].replace(/\+/g, "%2B");
				data[key] = data[key].replace(/\&/g, "%26");
			}
			dataStr += key + '=' + data[key] + '&';
		})
    return new Promise((resolve, reject) => {
      stream.fetch({
        method: type,
        url: url,
        type: 'json',
        body:dataStr,
        headers:{
        				'Accept': 'application/json',
        				"Content-type": "application/x-www-form-urlencoded"
        			}
        }, (response) => {
        if (response.status == 200) {
          resolve(response.data)
        }
        else {
          reject(response)
        }
      },
      (response)=>{
         console.log("bytes received:"+response.length);
      })
    })
  }


}
