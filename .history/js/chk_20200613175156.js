var checkboxDeadline = document.getElementById("DeadlineContInp");
  var deadline = document.getElementById("input[deaDline]");

  // document.addEventListener("DOMContentLoaded", function (event) {
  checkboxDeadline.onclick( 'change', function() {
     if(checkboxDeadline.checked) {
        deaDline.setAttribute("disabled", "disabled");
       setSuccessFor(DeadlineCont);
     } else {
        deaDline.removeAttribute("disabled");
     }
 });
console.log ('checkboxDeadline',checkboxDeadline);
console.log ('checkboxDeadline.checked',checkboxDeadline.checked);
console.log ('deadline',deadline);
// });