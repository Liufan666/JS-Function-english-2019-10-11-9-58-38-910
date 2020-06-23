function reverseString(message){
    var str1 = "";
    var len = message.length;
    for(var i=0;i<len;i++){
        str1 = message.substr(i,1) + str1;
    }
    return str1;
}
reverseString('hello');