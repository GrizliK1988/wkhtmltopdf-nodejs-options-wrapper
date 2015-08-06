var CreateRequestEntity = require('./src/entity/CreateRequest');
var PageClass = require('./src/entity/request_parts/Page');

var request = new CreateRequestEntity();
var yaRuPage = new PageClass('http://ya.ru'),
    vkRuPage = new PageClass('http://vk.ru');

yaRuPage.getOptions()
    .setZoom(2)
    .enableDebugJavascript()
    .setJavascriptDelay(200)
    .addAllow('ya.ru')
    .addAllow('google.com')
    .addCookie('1', '2')
    .addCookie('3', '4')
    .addCustomHeader('hh1', 'vv1')
    .addCustomHeader('hh2', 'vv2')
    .addPost('hh2', 'vv2')
    .addPost('hh1', 'vv2')
    .addPostFile('hh1', 'vv2')
;

vkRuPage.getOptions().setZoom(1).enableNoDebugJavascript().setJavascriptDelay(0).addRunScript('1.js').addRunScript('2.js');

request.getHeadersAndFooterOptions().enableFooterLine().setHeaderLeft("Hi!").addReplace('111', '222');
request.addPage(yaRuPage);
request.addPage(vkRuPage);

request.getGlobalOptions().setPageSize('A4').setMarginTop('1in');
request.getTOCOptions().setTocHeaderText('Text');

console.log(request.toString());
