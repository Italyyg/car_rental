"use strict"
console.log("Hello I Work")
/*
    - Basic Car Rental is $29.99 per day
    - There is a 30% surcharge if you are under 25
    - Option costs
        - Electric Toll Tag $3.95
        - GPS $2.95
        - Roadside Assistance $2.95
    - Data to display
        - Car rental cost
        - Options cost
        - under 25 surcharge cost
        - Total due
*/

window.onload = function () {


    //we have called the form here
    let rentalFrom = document.querySelector("#rentalForm");

    //when we submit this will run the car rental function
    rentalFrom.addEventListener("submit", calcCarRentalfees);

}
function calcCarRentalfees(event) {


    //keeps the form from submitting and refreshing the page
    event.preventDefault();

    //lets get the form from the event and assign it to a variable
    //we have selected the form so now with target, we can select ID's easier
    let theForm = event.target

    //create a variable for the total car rental
    let totalCarPrice = 29.99 * Number(theForm.numDays.value);

    //handeling the options cost
    let optionsCost = 0;
    if (theForm.tollTag.checked) {
        //if checked then initial cost will have 3.95 added
        optionsCost += 3.95;

    } if (theForm.gps.checked) {

        //if checked then initial cost will have 2.95 added
        optionsCost += 2.95;

    } if (theForm.rsa.checked) {

        //if checked then initial cost will have 2.95 added
        optionsCost += 2.95;


    }
    //handle the age charge for under25(30% charge if under 25)
    let ageSurcharge = 0;

    //the whole form choosing the id=under25 and choosing its value
    if (theForm.under25.value === "yes") {

        ageSurcharge = totalCarPrice * (30 / 100);
    }

    //add all the things to get the total 
    let totalDue = totalCarPrice + optionsCost + ageSurcharge;

    let message = ` 
    <div> Car Rental Cost: ${totalCarPrice.toFixed(2)}</div>
    <div> Options Cost: ${optionsCost.toFixed(2)}</div>
    <div>Under 25 surcharge: ${ageSurcharge.toFixed(2)}</div>
    <div >Total Due: $${totalDue.toFixed(2)}</div>
    
    `;

    //put the message on the screen
    document.querySelector("#results").innerHTML = message;

}
