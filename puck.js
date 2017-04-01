var controls = require("ble_hid_controls");

NRF.setServices(undefined, { hid : controls.report });

function takePic(){
  controls.volumeDown();
  LED1.set();
  setTimeout("LED1.reset()",1000);
}

// debounce set to 50 to prevent unintended mechanical "bounce" triggers
setWatch(function(e) {
  takePic();
}, BTN, {edge:"falling", debounce:50, repeat:true});
