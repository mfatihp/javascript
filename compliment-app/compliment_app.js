// Compliment list
var complist = [`You're beautiful`,
                `You're an awesome friend`,
                `You're a gift to those around you`,
                `You are awesome`,
                `You are enough`,
                `I'm grateful to know you`,
                `Thank you for being there for me`];

// Confirm button function
function confirm() {
    
    // Take the text from form-input
    var text_val =  document.getElementById("text1").value;
    
    // Take random integer for list index
    var rand;
    rand = Math.floor(Math.random() * complist.length);

    // Merge texts
    document.getElementById("text2").textContent = `${complist[rand]}` + ` ${text_val}`;
};