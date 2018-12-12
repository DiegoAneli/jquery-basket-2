$(document).ready(function(){

  var giocatori = [];

  $('#userinput').keypress(function(event){

    if(event.which == 13){
      var thisInput = $(this);
      var numeroGiocatoriRichiesti = thisInput.val();
      console.log(numeroGiocatoriRichiesti);
      $.ajax({
        url: 'https://www.boolean.careers/api/array/basket',
        method: 'GET',
        data: {
          n: userinput
        },
        success: function(data){
          console.log(data);
        },
        error: function(){
          alert("si è verificato un errore");
        },
      })
    }
  });
});
