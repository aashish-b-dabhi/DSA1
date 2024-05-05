   
    let arr = [234, 43, 55, 63, 5, 6, 235, 547];

    for (let i = 0; i < arr.length; i++) {

        let swap = "2"

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                swap = "3"
            }
        }
        if (!swap){
            break
        }
    }

  
    console.log(arr);

