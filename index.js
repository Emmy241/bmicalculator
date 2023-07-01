

function getBmi() {
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;


//     if (isNaN(heightInput) || isNaN(weightInput)) {
//         result.innerHTML = "Please enter valid height and weight.";
//         return;
//    }
   

    const bmi = weightInput / Math.pow((heightInput/100), 2);

   
    var category = "";

    

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else if (!heightInput && !weightInput) {
      alert("Kindly fill in all fields")
    } else {
      category = "Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1) + "  (" + category + ").";

}





//incomplete jquery

// function getBmi() {

//     const heightInput = $("#height").value;
//     const weightInput = $("#weight").value;


//     console.log(heightInput, weightInput);
    
//     const bmi = weightInput / Math.pow((heightInput/100), 2);

//     $("#result").html("Your BMI is " + bmi + ".");

    
// }


// $(".btn").on("click", function(event) {

//     const heightInput = $("#height").value;
//     const weightInput = $("#weight").value;


//     console.log(heightInput, weightInput);
    
//     const bmi = weightInput / Math.pow((heightInput/100), 2);

//     $("#result").html("Your BMI is " + bmi + ".");
// })