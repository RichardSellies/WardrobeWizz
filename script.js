$(document).ready(function(){
    $(".lineInput").click(function(){
      $(this).prev(".cursor").hide();
    });
  });



  $(document).ready(function () { 
    // On button click, get value 
    // of input control 
    $("#getValBtnID").click(function () { 
      let inputContentStart = $("#feelingInput").text(); 
      let inputStyleInput = $("#styleInput").text(); 
      console.log(inputContentStart); 
      console.log(inputStyleInput); 
      console.log("click");
    });
}); 


