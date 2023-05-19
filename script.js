//...................Adding Spinner Before DOM is Loaded.............//
$(window).on('load', function() {
  $('#spinner').hide();
  $('#spinner-container').removeClass('d-flex')
  $("header").addClass('content-visible');
  $("main").addClass('content-visible');
  $("footer").addClass('content-visible');
});
//...................................Volume Adjust ALert.....................................................//
    $('#popup').show();
    $('#popup-button').on('click', function() {
      $('#popup').hide();
    });
//......................................Love Calculator logic............................................//
//..................Calling CheckButton & Spinner.................//
const checkButton= document.getElementById("check");
const spinnerCalc=document.getElementById("spinner-calc")

//......................................Adding Event listner to Check Button..............................//
checkButton.addEventListener('click',()=>{
    //...........................Calling The Input Fields............//
    const ulama_name=document.getElementById("ulama-name").value;
    const ulama_list=document.getElementById("ulama-list").value;
    const person_name=document.getElementById("person-name").value;
    //........................Use of Spinner In CheckButton.............................//
    //............................Timer..................................................//
    const time= Math.floor(Math.random() * 7000) + 1;
    //.....................................................................................//
    function spin (){
    spinnerCalc.classList.remove("d-none");
    setTimeout(function(){
        spinnerCalc.classList.add("d-none")
    },time);
}
    //...................Test The names entered by User....................................//
    function testname(callback){
        const nameRegex = /^(?!.*\b(\w+)\b.*\b\1\b)[A-Za-z\s]+$/;
        if (nameRegex.test(person_name)) {
            callback()
          } else {
            Showalert("<strong>Error</strong> Characters are invalid.")
          }
    }
   //....................Managing the Selection Format.....................................//
   //.........Calling alert..........//
   const alertPopUp=document.getElementById('alert');
   //..........Creating Alert popover function...//
   function Showalert (message){
    alertPopUp.style.display='block'
    alertPopUp.innerHTML=message
     setTimeout(()=>{
      alertPopUp.style.display='none'
     },5000)
   }
   //....................Selection Format Function...............//
   //.....................Possible conditions................//
   const condition=person_name.length===0
   const condition1=ulama_name.length>0 && ulama_list.length!==0
   const condition2=ulama_name.length<=0 && ulama_list.length===0
   const condition3=person_name.length!==0
   const condition4=ulama_list.length!==0
   //....................Managing Possible conditions with conditional Statements(if,else)....//
   function selectionFormat(){
    if(condition && condition2){
      Showalert("<strong>Error</strong> Fill all the input fields.")
    }
    else if(condition){
      Showalert("<strong>Name Error</strong> Please Enter the name.")
    }
    else if(condition3 && condition1){
      Showalert("<strong>Selection Error</strong> Please select Ulama List or Type Ulama Name.")
     }
     else if(condition3 && condition2){
      Showalert("<strong>Selection Error</strong> Please select Ulama List or Type Ulama Name.")
     }
     //................................calculate love.........................//
   else{
    function  CalculateLove (showlove){
      let value=Math.floor(Math.random()*100) +1;
      let percentage;
      if(value===1){
        percentage=0+"%"
      }
      else{
        percentage=value+"%"
      }
      testname(spin)
      setTimeout(()=>{
       //....Adding head to the result..........//
        document.querySelector(".head-title").innerHTML="Hi, " +person_name;
        //.......calling the pargraph of result...//
        const message=document.querySelector(".message p")
        //....adding percentage to percentage ring...
        $('#demo').attr('data-percent',value);
        $('#demo').percircle({
          animate: true,
        });
        ///...Adding audio for diffrent love percentages...//
        let audio = $('#myAudio')[0];
        //Calling heart animation to use in conditional statement..//
        let heartAnimation=$("#heart-animation");
        Ashiq.innerHTML="Hi, " +person_name
        if(value>=50){
          message.innerHTML=`Divine Connection with <strong style="color:yellow;">${ulama_name}${ulama_list}</strong>`
          audio.src="love.mp3"
          audio.play();
          heartAnimation.removeClass("d-none")
        }
        else if(value>=30){
          message.innerHTML=`No Emotional Bond with <strong style="color:yellow;">${ulama_name}${ulama_list}</strong>`
          audio.src="khasnhi.mp3"
          audio.play();
          heartAnimation.addClass("d-none")
        }
        else if(value>=0){
          message.innerHTML=`Void of Love  with <strong style="color:yellow;">${ulama_name}${ulama_list}</strong>`
          audio.src="nafrat.mp3"
          audio.play();
          heartAnimation.addClass("d-none")
        }
        //........Opening & Closing of result...................//
        const closeButton=$(".remove");
        const result=$("#Result")
        result.fadeIn()     
        closeButton.click(function(){
        result.fadeOut()
        });
      },time)
     }
   CalculateLove()
   }
}
selectionFormat()
})








