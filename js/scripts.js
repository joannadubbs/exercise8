$(function(){
  console.log('scripts loaded');

  var myVar = setInterval(myTimer, 5000);

  function myTimer() { //refresh every 5 seconds

  var url = 'http://api.open-notify.org/iss-now.json';
  var url2 = '';
  var html = '';
  var data = '';
  var data2 = [];
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

    //html += 'The space station is currently at ' + coordinates.latitude;

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

        //if (place.country = undefined){
        if (url = data2.error){
          html += '<p> The space station is currently over the ocean. </p>';
       } else{
        html += '<p> The space station is currently in ' + place.state +  ', ' + place.country + '</p>';
       }

        $('#results').html(html);

        } //success

      }); //closes second ajax request


    } //success of first ajax call

    //Declare URL for second ajax call

  }); //closes coordinates ajax request

  }

});
