$(document).ready(function(){
  doIntro();
  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function(){
    //play hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $('.hadouken').hide();
        $('.hadouken').css('left', '520px');
  })
    //animate hadouken to the right of the screen
  })
  .mouseup(function(){
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
  });

});

$(document).keydown(function(e) {
  if (e.which == 88) {
    playCool();
    $('#theme-song')[0].pause();
    $('#theme-song')[0].load();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }
  })
.keyup(function(e) {
  if (e.which == 88) {
    $('#theme-song')[0].play();
    $('#cool')[0].pause();
    $('#cool')[0].load();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  }
  });

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool() {
  $('#cool')[0].volume = 0.5;
  $('#cool')[0].play();
}

function doIntro() {
  $('#theme-song')[0].volume = 0.5;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $('.sf-logo').fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $('.brought-by').fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $('.jquery-logo').fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
