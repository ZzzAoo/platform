/**
 * Created by wujietao on 2016/8/30.
 */
var oRet = document.querySelector('#ret');
var auto = function() {
    oRet.innerHTML = '浏览器像素宽度为：<b>' + window.innerWidth + 'px</b>';
}
auto();
window.onresize = auto;