function shuffle() {
    var str="abcdefghijklmnopqrstuvwxyz";
    var oldArray=str.split("");
    var array=str.split("");
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    
    //assigning new array to string
    var newAl="";
    for(i=0;i<array.length;i++){
        newAl+=array[i];   
    }
    document.getElementById('newAl').value=newAl;
    
    //encrypting
    var text=document.getElementById('inputState').value;
    text=text.toLowerCase();
    var inputArray=text.split("");
    
    //making 2d Array
    var linkArray= new Array(26);
    for(i=0;i<26;i++){
        linkArray[i]=new Array(2);
    }
    
    //assining old Array values
    for(i=0;i<26;i++){
        linkArray[i][0]=oldArray[i];
    }
    
    //assining new values
    for(i=0;i<26;i++){
        linkArray[i][1]=array[i];
    }
    
    var outputState="";
    for(i=0;i<inputArray.length;i++){
        var count=0;
        for(j=0;j<26;j++){
            count++;
            if(inputArray[i]==linkArray[j][0]){
                outputState+=linkArray[j][1];
                count=0;
            }
        }
        if(count==26){
            outputState+=inputArray[i][0];
        }
    }
    
    //setting output to html
    document.getElementById('outputState').value=outputState;
}

function decrypt(){
    //creating array containing alphabet
    var str="abcdefghijklmnopqrstuvwxyz";
    var oldArray=str.split("");
    
    //creating temp array
    var temp=str.split("");
    
    //getting value of key
    var key=document.getElementById('key').value;
    key=key.toLowerCase();
    var keyArray=key.split("");
    
    //check for errors
    var error="";
    if(keyArray.length!=26){
        error="Key do not Contain all the letters in Alphabet";
        document.getElementById('deouState').value=error;
        return;
    }
    else{
        for(i=0;i<26;i++){
            for(j=0;j<temp.length;j++){
                if(keyArray[i]==temp[j]){
                    temp[j]=" ";
                }
            }
        }for(i=0;i<temp.length;i++){
            if(temp[i]!=" "){
                error="Key do not Contain all the letters in Alphabet";
                document.getElementById('deouState').value=error;
                return;
            }
        }
    }
    
    //link Array
    var linkArray= new Array(26);
    for(i=0;i<26;i++){
        linkArray[i]=new Array(2);
    }
    //assining old Array values
    for(i=0;i<26;i++){
        linkArray[i][0]=oldArray[i];
    }
    
    //assining new values
    for(i=0;i<26;i++){
        linkArray[i][1]=keyArray[i];
    }
    
    var deText=document.getElementById("deinState").value
    deText=deText.toLowerCase();
    var outputState="";
    for(i=0;i<deText.length;i++){
        var count=0;
        for(j=0;j<26;j++){
            count++;
            if(deText[i]==linkArray[j][1]){
                outputState+=linkArray[j][0];
                count=0;
            }
        }
        if(count==26){
            outputState+=deText[i];
        }
    }
    
    //setting output to html
    document.getElementById('deouState').value=outputState;
}
