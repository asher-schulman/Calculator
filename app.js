if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};
//MOVING COMMENTS TO BOTTOM FOR EASIER READING
$(() => {
    //declare global display value
    var $display = $('#display').val();
    //3 functions, buttonclicks, clearing, and solving
    //onclick - concatenates whatever button (except equals and clear) with the current display value
    function onClick() {
        $display += $(this).text();
        $('input:text').val($display);
        console.log($display);
    }
    //sets the display value to an emptry string
    function onClear() {
        $display = '';
        $('input:text').val($display);
        console.log($display);
    }
    //uses jQuery 'eval()' method to evauate a string as integers... 
    function solve() {
        $display = eval($display);
        $('input:text').val($display);
        console.log($display);
    }
    //listeners for said 3 functions
    $('.button').on('click', onClick);
    $('#clear').on('click', onClear);
    $('#equal').on('click', solve);
});

//put any jQuery code in here
//assign all buttons as a variable
//make functions for on('click', doFunction) for input and display?
//FUNCTIONIDEA display()
//listen to any button with the button CLASS
//use this.value? to paint this to the display, and concatenate these strings
//display.value gets a bunch of concatenated strings
//when equal is pressed, eval(the display.value) since passing the strings through eval should work as intended

//don't actually need to declare these
// const $0 = $('#0').val();
// const $1 = $('#1').val();
// const $2 = $('#2').val();
// const $3 = $('#3').val();
// const $4 = $('#4').val();
// const $5 = $('#5').val();
// const $6 = $('#6').val();
// const $7 = $('#7').val();
// const $8 = $('#8').val();
// const $9 = $('#9').val();
// const $plus = $('#plus').val();
// const $subtract = $('#minus').val();
// const $multiply = $('#multiply').val();
// const $divide = $('#divide').val();
// const $equal = $('#equal').val();
// const $clear = $('#clear').val();

// //this function is working in the console.log, but unable to get it to print to by display box...trying to concatenate the strings as buttons are pressed
// function buttonClick() {
//     $display += $(this).text();
//     console.log($display);
// }

// $('.button').on('click', buttonClick);
// function buttonClick() {
//     $test += $(this).text();
//     console.log($test);
// }

//this is the correct function, just unable to write this text into the value of my input element... i'm assuming I used the wrong element here, looking back i should just use a h2 element and set the .text or inner html to these