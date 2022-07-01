
document.getElementById("quiz").onsubmit = function(){ 
    let checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let title = "";
    if (checks > 3) {
        title = "you are jady chan"
    }

    document.getElementById("quiz").innerHTML = `${checks} <br> ${title}`;
    
    return false;
 }