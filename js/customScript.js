// For achievements : on hover, show modal
$(document).ready(function() {
  $('[data-toggle="modal"]').hover(function() {
    var modalId = $(this).data('target');
    $(modalId).modal('show');
	});
});

console.log("For hacktober");

const observer = lozad();
observer.observe();
