
document.getElementById("quiz").onsubmit = function(){ 
    let checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let title = "";
    if (checks < 5) {
        title = "damn you are not jady chan"
    } else if (checks >5 && checks < 11) {
        title = "i see why we're friends"
    } else if (checks >10 && checks < 16) {
        title = "i love ur energy ;)"
    } else if (checks >14 && checks < 21) {
        title = "okay BESTIE I LOVE U!!!"
    } else if (checks >20 && checks < 26) {
        title = "wowie u can be my partner in crime B)"
    } else if (checks >25 && checks < 31) {
        title = "tell my sister we have another sibling.. :0"
    } else if (checks >30 && checks < 49) {
        title = "omg u are jady chan... hello :0"
    } else if (checks > 50) {
        title = "u can have my passport"
    }

    document.getElementById("quiz").innerHTML = `${checks} <br> ${title}`;
    
    return false;
 }