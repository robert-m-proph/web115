function loadMain(fileName){
    var mainContent = fileName;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("change_contents").innerHTML = this.responseText;
        }
    };

    xhttp.open("POST", mainContent, true);
    xhttp.send();
}