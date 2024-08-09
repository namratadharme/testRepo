const arr = [11, 13, 15, 18, 19, 20, 23, 26, 28, 31]

function midArr(start, end, search){
   let midIndex = Math.floor((start+end)/2);

    midElement = arr[midIndex];

    if(midElement==search){
   
        return midIndex;
    }
    else if(search<midElement){
        newStart =  start;
        newEnd = midIndex-1;
     return midArr(newStart, newEnd, search)
    }
    else if(search>midElement){
        newstart  = midIndex+1;
        newend   = end;
       return  midArr(newstart, newend, search)
    }

}
    console.log(midArr(0, 9, 20))