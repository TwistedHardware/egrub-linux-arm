
/*Only needed for the controls*/
phone  = document.getElementById("phone_1"),
iframe = document.getElementById("frame_1");


/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}

/*Controls*/
function updateIframe() {

  // preload front view
  document.getElementById('view-2').className = "selected";

  // preload first phone in the list"
  var key = Object.keys(phones)[0];
  document.getElementById('btn-' + key).className  = "selected";

  width  = phones[key].width;
  height = phones[key].height;

  phone.style.width = width + "px";
  phone.style.height = height + "px";

  /*Idea by /u/aerosole*/
  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1300px" : "none"
  );

}

/*Events*/
document.getElementById("controls").addEventListener("change", function() {
  updateIframe();
});

document.getElementById("views").addEventListener("click", function(evt) {
  updateView(evt.target.value);

  var buttons = document.getElementById('views').getElementsByTagName('button');
  n = buttons.length;
  for(var i = 0; i < n; i++) {
    buttons[i].className = "";
  }

  document.getElementById('view-' + evt.target.value).className = "selected";
});

document.getElementById("phones").addEventListener("click", function(evt) {

/*
    if(evt.target.value == 1){
      // samsung tab e 7"
      width = 600;
      height = 800;
    }

    if(evt.target.value == 2){
      // samsung tab 10"
      width = 768;
      height = 1024;
    }
*/

    width  = phones[evt.target.value].width;
    height = phones[evt.target.value].height;

    phone.style.width = width + "px";
    phone.style.height = height + "px";

    var buttons = document.getElementById('phones').getElementsByTagName('button');
    n = buttons.length;
    for(var i = 0; i < n; i++) {
        buttons[i].className = "";
    }

    document.getElementById('btn-' + evt.target.value).className = "selected";

});


iframe = document.getElementById('frame_1');

if (iframe.attachEvent){
  iframe.attachEvent("onload", function(){
      //afterLoading();
  });
} else {
  iframe.onload = function(){
      //afterLoading();
  };
}

function afterLoading(){
    // document.getElementById('loader').style.display = 'none';
    setTimeout(function() {
        phone.className = "phone view_1";

        setTimeout(function() {
            // do second thing
            // phone.className = "phone view_1 rotate";

        }, 1000);
    }, 1000);

}

function createPhones(phones) {

    var divPhones = document.getElementById('phones');

    phones.forEach(function(item, index) {
        btn = "<button id='btn-" + index + "' value='" + index + "' >" + item.name + "</button>"
        divPhones.innerHTML = divPhones.innerHTML + btn;
    })
}
