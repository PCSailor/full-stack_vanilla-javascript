
  $( document ).ready(function(){
  console.log(new Date().getFullYear() + " jQuery sourced");

  $('#nameButton').on('click', function(){
  console.log('nameButton clicked');
  var ownerObject = {};
  ownerObject.firstName = $('#firstName').val();
  ownerObject.lastName = $('#lastName').val();
  console.log(ownerObject.firstName);
  console.log(ownerObject.lastName);
$.ajax({
  type: 'POST',
  url: '/ownerData',
  data: ownerObject,
  success: function(response){
    console.log('server response: ', response);
  } // NOTE: FOR: success: function
}); // NOTE: FOR: ajax
});


}) // NOTE: FOR: $(document).ready(function(){
