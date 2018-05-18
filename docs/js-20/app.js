/*
        去掉字符串str中，连续重复的地方
        */
function removeRepetition(str) {
    var result = "";

    // do something
    str = str.split('');
    var flag = '';
    var arr = [];
    str.map(ele =>{
        if(ele!=flag){
            arr.push(ele);
            flag = ele;
        }
    })

    return result = arr.join('');
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc