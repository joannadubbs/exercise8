$(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var url2 = '';
  var html = '';
  var data = '';
  var data2 = '';
  var coordinates = [];
  var country = [];
  var oceanmessage = 'The space station is currently over an ocean.'


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
    url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + coordinates.latitude + '&lon=' + coordinates.longitude;
    console.log(url2);

    html += coordinates.latitude;


      if (place = 'undefined'){
        $('#results').html(oceanmessage);
      }

      $.ajax({ //on success call second ajax
        type:'GET',
        url:url2,
        dataType: 'json',
        async: true,
        data: data2,
        success: function(data2){
        console.log(url2);
        console.log(data2.address);
        place = data2.address;
        console.log(place);
        console.log(data2);
        console.log(place.country)

        (function(place){
            console.log(data2.address.country);
            html += '<div class="coordinates-location flex">';
              html += '<div class="text">';
              html += '<h2 class="place-header">text here ' + place.country + '</h2>';
              html += '</div>';
            html += '</div>';
          });



        } //success

      }); //closes second ajax request

      $('#results').html(html);
      
    } //success of first ajax call

    //Declare URL for second ajax call

  }); //closes coordinates ajax request



  //Get function to refresh every 5 seconds

  //display error message

});
