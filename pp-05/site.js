

$(document).ready(function() {
$("#doorbell-sound").remove();

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

$("#doorbell").on("click", function() {
    ringDoorbell();
});

// if the user presses 'd' doorbell will ring
$(document).on("keypress", function(event) {
    if(event.key === "d") {
      ringDoorbell();
    }
  });
});
