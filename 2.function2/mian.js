function palindrome(message){
    var str1 = "";
    var len = message.length;
    for(var i=0;i<len;i++){
        str1 = message.substr(i,1) + str1;
    }
    if(str1==message){
        return true;
    }
    else {
        return false;
    }
}
palindrome('hello'); 
palindrome('abcba'); 