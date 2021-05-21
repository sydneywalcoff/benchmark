const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

const bubbleSort = arr => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (let i=0; i < arr.length-1; i++) {
            let newFirstValue;
            if(arr[i] > arr[i+1]) {
                newFirstValue = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = newFirstValue;
                sorted= false;
            }
        }
    }
    return arr;
};

const quickSort = arr => {
    if(arr.length <= 1) {
        return arr;
    }

    // choose first array item as pivot point
    let pivot = arr[0];
    // empty left array
    const leftArr = [];
    // empty right array
    const rightArr = [];

    // for loop
    for(let i=1; i < arr.length; i++) {
        // if items[i] less than pivot
        if(arr[i] <= pivot){
            // push into left array
            leftArr.push(arr[i]);
        } 
        // else
        else {
            // push into right
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));

    // run same logic  again on left and right arrays
    // return sorted left array + pivot + sorted right array
};

module.exports = { bubbleSort, quickSort };
