// GALV DELIVERS NOTES

var cardContent = $('.card-content')
var newTable = '<tr><td>' + varName + '</td>'
subtotal +=  varPrice

$('#button').click(function() {
  if (no name or no phone or no address) {
    Materialize.toast('error message', 4000)
  }
})


$('#firstCol .card-action').click(function(event) {
  event.preventDefault();
  let closestCard = $(event.target /* or this? */ ).closest(".card")
  let price = closestCard.find("p")[0].innerHTML.slice(1);
  let item = closestCard.find("h5")[0].innerHTML
  debugger; // same as setting a break-point in chrome debugger
})
//make cards for every menu item

function price() {
  var tax = subtotal * .1
  var total = subtotal + tax
  $('#subtotal').text(subtotal)
  $('#tax').text(tax.toFixed(2));
  $('#total').text(total.toFixed(2))
}
//goal is to not repeat code

dataactivates=slideout ?? wtf is this?
