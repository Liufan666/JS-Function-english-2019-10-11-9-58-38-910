function alphabetSort(message){
    ss1 = message.split('');
    var temp;
    for(var i=0;i<ss1.length-1;i++){
        for(var j=i;j<ss1.length;j++){
            if(ss1[i]>ss1[j]){
                temp = ss1[j];
                ss1[j] = ss1[i];
                ss1[i] = temp;
            }
        }
    }
    var str1 = ss1.join("");
    return str1;
}
alphabetSort('hello');