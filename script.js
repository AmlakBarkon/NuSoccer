console.log("javascript is working")
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })