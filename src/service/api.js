import fetch from './fetch'
import store from '../store'
var apiUrl = '';

var getIndexData = () => fetch('GET', apiUrl+'index.php?act=index_new&op=index', {});
var accountLogin = (params) => fetch('POST',apiUrl+'index.php?act=login',params);



export {
	getIndexData,
  accountLogin
}
