var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

let arr = [];
for (const key in scoreObject) {
    if (scoreObject.hasOwnProperty(key)) {
        const element = scoreObject[key];
        let subarr=[];
        subarr.push(key)
        for(const iterator of Object.values(element)) {
            subarr.push(iterator)
        }
        arr.push(subarr);
        
    }
}

console.log(arr)