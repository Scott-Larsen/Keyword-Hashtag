function myFunction() {
  var xx = document.getElementById("myInput").value;
  var x = xx.trim();
  var text = ""

if (x.indexOf("#") == 0) {
  text = x.split(' #')
    .join(', ')
    .slice(1, x.length);
  text = text.split(/(?=[A-Z])/)
    .join(" ");
}

else {
  text = '#' + x.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('')
    .split(',')
    .join(' #');
}
  
  document.getElementById("output").innerHTML = text;
  
}

// from https://codepen.io/Ishan_Mahajan_bst/pen/dRaOoX
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}