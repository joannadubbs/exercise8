$(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var url2 = '';
  var html = '';
  var data = '';
  var data2 = '';
  var coordinates = [];
  var country = [];
  //var position = {
  //  latitude: data.iss_position;
    //longitude: ;
//  }


// Get coordinates to show up

  $.ajax({
    type:'GET',
    url:url,
    dataType: 'json',
    async: true,
    data: data,
    success: function(data){
    console.log(data.iss_position);
    coordinates = data.iss_position;
    console.log(coordinates.latitude);
    console.log(coordinates.longitude);
    url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + coordinates.longitude + '&lon' + coordinates.latitude;

    (function(coordinates){
        console.log(data.iss_position);
        html += '<div class="coordinates-location flex">';
          html += '<div class="text">';
          html += '<a href="' + coordinates.url + '" target ="_blank">';
          html += '<h1 class="coordinates">The space station is currently at.. ' + data.iss_position + '</em></h1>';
          html += '</a></div>';
        html += '</div>';
      });

      $('#results').html(html);

    } //success

    //Declare URL for second ajax call

  }); //closes coordinates ajax request

  $.ajax({
    type:'GET',
    url:url2,
    dataType: 'json',
    async: true,
    data: data,
    success: function(data2){
    console.log(data2.address.country);
    place = data2.country;

    (function(place){
        console.log(data2.address.country);
        html += '<div class="coordinates-location flex">';
          html += '<div class="text">';
          html += '<a href="' + place.url2 + '" target ="_blank">';
          html += '<h1 class="byline">text here ' + data2.address.country + '</em></h1>';
          html += '</a></div>';
        html += '</div>';
      });

      $('#results').html(html);

    } //success

  }); //closes ajax request

  //Get function to refresh every 5 seconds

  //display error message

});
