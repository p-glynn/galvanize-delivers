$(document).ready(function() {
  // console.log('READY');
  var subtotal = 0;
  var tax, total;
  var convenience = 0;
  var delivery = 0;
  var counter = 0;

  $('.section .addItem').click(function(event) {
    event.preventDefault();
    let closestCard = $(event.target).closest(".card-content");
    let price = closestCard.find("p")[0].innerHTML.slice(1);
    subtotal += parseInt(price);
    tax = subtotal * .08;
    counter++;
    delivery += (counter*.763*Math.random());
    convenience += Math.random() * 2;
    total = subtotal + tax + delivery + convenience;

    $('#subtotal').text('$ ' + subtotal+'.00');
    $('#tax').text('$ ' + tax.toFixed(2));
    $('#delivery').text('$ ' + delivery.toFixed(2));
    $('#convenience').text('$ ' + convenience.toFixed(2));
    $('#total').text('$ ' + total.toFixed(2));
    $('button').removeClass();
    $('button').addClass("waves-effect waves-light");
  });
  $("select[required]").css({display: "inline", height: 0, padding: 0, width: 0});


});
