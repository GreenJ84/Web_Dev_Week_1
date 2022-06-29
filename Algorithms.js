var arr = ['a','b','c','d','e']

function reverse(){
    for (i=0; i<2; i++){
        arr[i] = arr[(arr.length-1)-i];
        return arr
    }
    console.log(arr);
}


