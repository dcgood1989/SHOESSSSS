// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(document).ready(function() {
//
//   $(".foo").on("click", function() {
//     $.ajax({
//       type: "POST",
//       url: "/shoes",
//       data: { "shoe": { "material": "leather" } },
//       success: function(data) {
//         var show_link = "<a href='/shoes' + data.id + "
//         $(".foo").append("<h1>" + data + "</h1>")
//       }
//     })
//   })
// });

$(document).ready(function() {
  $(".foo").on("click", function() {
  var material = ($("input").val());
    $.ajax({
      type: "POST",
      url: "/shoes",
      data: { "shoe": { "material": material } },
      success: function(data) {
        var show_link = "<a href ='/shoes/" + data.id + "'>Show</a>"
        var edit_link = "<a href = '/shoes/" + data.id + "'>Edit</a>"
        var destroy_link = "<a href = '/shoes/" + data.id + "'data-method='delete'>Destroy</a>"
        $("tbody").append("<tr>" + "<td>" + data.material + "<td>" + show_link + "<td>" + edit_link + "<td>" + destroy_link)
      }
    })
  })
});
