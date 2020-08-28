// TODO: Add compliment list and random picker
function confirm() {
    // Get text1
    var text_val =  document.getElementById("text1").value;
    // Change text2 value with text1
    document.getElementById("text2").textContent = `You're beautiful ${text_val}`;
};