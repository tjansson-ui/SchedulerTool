// All text is wrapped to ensure html elements load first

$(document).ready(function () {
  // saves items on click 
  $('.saveBtn').on('click', function () {
    var userEntry = $(this).siblings('.description').val()
    var hourId = $(this).parent().attr('id')
    localStorage.setItem(hourId, userEntry)
  })

  //function calls
  localStorageReader()
  timeFinder()
  today()


// loops through slot descriptions and stores locally
function localStorageReader() {
  var schedBlocks = $('.container-lg').children()
  var firstSlot = parseInt(schedBlocks.attr('id').split('-')[1])
  for (var i = 0; i < 9; i++) {
    var nextSlot = firstSlot + i;
    var idSelect = `#hour-${nextSlot.toString()} .description`
    var storageValue = localStorage.getItem(`hour-${nextSlot.toString()}`)
    $(idSelect).val(storageValue)

  }
}

//sets the color for past, present and future times
function timeFinder() {
  var schedBlocks = $('.container-lg').children()
  var firstSlot = parseInt(schedBlocks.attr('id').split('-')[1])
  var currentHour = dayjs().hour()
  //9 is the hours available to schedule from 9-5
  for (var i = 0; i < 9; i++) {
    var nextSlot = firstSlot + i;
    var idSelect = `#hour-${nextSlot.toString()}`;
    if (nextSlot < currentHour) {
      $(idSelect).addClass('past');
    } else if (nextSlot === currentHour) {
      $(idSelect).addClass('present');
    } else {
      $(idSelect).addClass('future');
    }
  }
}

// code to display the current date in the header of the page.
function today() {
  var todayDate = dayjs().format('dddd MMM DD, YYYY')
  $('#currentDay').text("Today's Date is " + todayDate)
}


});

