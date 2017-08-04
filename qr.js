var title = ''
var url = ''
chrome.tabs.getSelected(null, function(tab) {
  title = tab.title
  url = tab.url
  $('#title').text(title);
  $('#url').val(url);
})
// js
$('#qrcode').qrcode({width: 176,height: 176,text: url});

$('#updateBtn').on('click',function(){
  console.log('update' + $('#url').val())
  var newUrl = $('#url').val()
  $('#qrcode').html('')
  $('#qrcode').qrcode({width: 176,height: 176,text: newUrl});
});


$('#resetBtn').on('click',function(){
  $('#qrcode').html('')
  $('#url').val(url);
  $('#qrcode').qrcode({width: 176,height: 176,text: url});
});

function updateCode(){

}
