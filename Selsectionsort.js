
let arr = [29, 65, 78, 14, 31, 28]

let min

for (let i = 0; i < arr.length; i++) {

    min = i

    for (let j = i; j < arr.length; j++) {

        if (arr[min] > arr[j]) {

            min = j

        }
    }
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
}

console.log(arr);