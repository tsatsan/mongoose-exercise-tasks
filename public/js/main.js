
$('.remove').on('click', function(e) {
    e.preventDefault();
    const $thisElement = $(this)
    const url = $thisElement.parents('a').attr("href")
    const method = 'DELETE'
    console.log(url)
    $.ajax({ url, method })
        .done(response => {
            $thisElement.parents('.list-unstyled').remove()
            // debug('Removed task')
        })
})

$('.doneButton').on('click', function(e){
    e.preventDefault()
    const $thisElement = $(this)
    const url = $thisElement.closest('a').attr('href')
    const method = 'PUT'
    console.log(url)
    $.ajax({ url, method})
      .done(response => {
        console.log(response)
        $thisElement.parents('.list-unstyled').remove()
      })
  })

$('.list-users .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parents('.list-group-item')
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find(".itemName")
        .addClass("hidden")
})

$(".edit-form").on("submit", function(e) {
  e.preventDefault();

  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const editedValue = $thisElement.find('input').val()
  const method = 'PUT'
console.log(url)
  $.ajax({
    url,
    method,
    data: { editedValue }
  })
  .done( response => {
    $thisElement
      .siblings(".itemName")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
  })
  .fail( () =>  alert("Try removing again champ!") );


})