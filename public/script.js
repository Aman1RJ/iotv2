var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 )
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();
client.get('http://103.53.83.212/', function(response) {
    var ele=document.getElementsByClassName("sta");
    if(response[2]==0)
    ele[0].style.backgroundColor = "green";
    else
    ele[0].style.backgroundColor = "red";
    if(response[6]==0)
    ele[1].style.backgroundColor = "green";
    else
    ele[1].style.backgroundColor = "red";
    if(response[10]==0)
    ele[2].style.backgroundColor = "green";
    else
    ele[2].style.backgroundColor = "red";
    if(response[14]==0)
    ele[3].style.backgroundColor = "green";
    else
    ele[3].style.backgroundColor = "red";
    if(response[18]==0)
    ele[4].style.backgroundColor = "green";
    else
    ele[4].style.backgroundColor = "red";
    if(response[22]==0)
    ele[5].style.backgroundColor = "green";
    else
    ele[5].style.backgroundColor = "red";
    if(response[26]==0)
    ele[6].style.backgroundColor = "green";
    else
    ele[6].style.backgroundColor = "red";




});



function ledhandel(x){


  var client = new HttpClient();
  client.get('http://103.53.83.212/add/'+x, function(response) {
      ress=response;

});



}
