
(function () {

var linksUpdated = false;

setInterval(function () {

var cookie = document.cookie.match('(^|;)\\s*trakdesk_cid\\s*=\\s*([^;]+)');

if (Array.isArray(cookie) && !linksUpdated) {

try {

var trakdeskCid = JSON.parse(cookie.pop());

var cid = trakdeskCid['cid'];

document.querySelectorAll('a[href^="https://buy.stripe.com/"]').forEach(function (a) {

var url = new URL(a.href);

url.searchParams.set('client_reference_id', cid);

a.href = url.href;

});

} catch (e) {

console.log(e);

} finally {

linksUpdated = true;

}

}

}, 100)

})();


