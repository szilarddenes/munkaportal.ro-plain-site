var checkboxDeadline = document.getElementById("DeadlineContInp");
  var deadline = document.getElementById("deaDline");

  // document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('DeadlineContInp').onclick = function() {
     if(checkboxDeadline.checked) {
        deaDline.setAttribute("disabled", "disabled");
       setSuccessFor(DeadlineCont);
     } else {
        deaDline.removeAttribute("disabled");
     }
 };
console.log ('checkboxDeadline',checkboxDeadline);
console.log ('checkboxDeadline.checked',checkboxDeadline.checked);
console.log ('deadline',deadline);
// });