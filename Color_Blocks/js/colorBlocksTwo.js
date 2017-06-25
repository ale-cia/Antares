$("document").ready(function(){


$('#red-button').on('click', function(){
    console.log('red button clicked');
    // Existing count
    var count = $('#redBlockCount').text();
    // Add one and set it back
    $('#redBlockCount').text(parseInt(count) + 1);
    $('.block-container').append('<div class="block red-block"></div>');
  });

  $('#blue-button').on('click', function(){
    console.log('blue button clicked');
    // Existing count
    var count = $('#blueBlockCount').text();
    // Add one and set it back
    $('#blueBlockCount').text(parseInt(count) + 1);
    $('.block-container').append('<div class="block blue-block"></div>');
  });

  $('#green-button').on('click', function(){
    console.log('green button clicked');
    // Existing count
    var count = $('#greenBlockCount').text();
    // Add one and set it back
    $('#greenBlockCount').text(parseInt(count) + 1);
    $('.block-container').append('<div class="block green-block"></div>');
  });

  $('#yellow-button').on('click', function(){
    console.log('yellow button clicked');
    // Existing count
    var count = $('#yellowBlockCount').text();
    // Add one and set it back
    $('#yellowBlockCount').text(parseInt(count) + 1);
    $('.block-container').append('<div class="block yellow-block"></div>');
  });

});
