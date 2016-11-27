/**
 * Created by RonUA on 26.11.2016.
 */
//**********TASK-1
var arr1 = [3, 4, 51, 5, 2, 1, 4, 8];
//some
var doubles = arr1.map(function (num) {
    return num * 2;
});
console.log(doubles);
//every
function more(element) {
    return element >= 5;
}
arr1.every(more);
console.log(arr1.every(more));
//some
function tale(number) {
    return number <= 7;
}
arr1.some(tale);
console.log(arr1.some(tale));
//filter
function sorting(value) {
    return value >= 4;
}
arr1.filter(sorting);
console.log(arr1.filter(sorting));
//forEach
arr1.forEach(function (item, i, arr1) {
    console.log(i + ": " + item + " (массив:" + arr1 + ")");
});
//reduce
function reverse(a, b) {
    return a * b;
};
arr1.reduce(reverse);
console.log(arr1.reduce(reverse));
//**********TASK-2
function mass(min, max, k) {
    min = 0;
    max = 50000;
    k = 100000;
    var arr = [], a = [], b = 0;
    for (var i = 0; i <= (max + min); i++) {
        a[i] = i + min;
    }
    for (var i = 0; i < k; i++) {
        b = Math.random() * (a.length);
        arr[i] = a.splice(b, 1)[0];
    }
    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    console.log("mass=" + result);

    return arr;


}
function mass1(min, max, k) {
    min = 0;
    max = 50000;
    k = 100000;
    var start = new Date();
    var arr = [], a = [], b = 0;
    for (var i = 0; i <= (max + min); i++) {
        a[i] = i + min;
    }
    for (var i = 0; i < k; i++) {
        b = Math.random() * (a.length);
        arr[i] = a.splice(b, 1)[0];
    }

    function left(a, b) {
        return a - b;
    }


    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    console.log("mass1=" + result);
    var end = new Date();
    var res = end - start;
    console.log({"timeOfCreating": res + "ms"});
    arr.sort(left);
    return arr;

}

function mass2(min, max, k) {
    min = 0;
    max = 50000;
    k = 100000;
    var now = new Date();
    var arr = [], a = [], b = 0;
    var startCreateArr = new Date();
    for (var i = 0; i <= (max + min); i++) {
        a[i] = i + min;
    }

    for (var i = 0; i < k; i++) {
        b = Math.random() * (a.length);
        arr[i] = a.splice(b, 1)[0];
    }
    function right(a, b) {
        return b - a;
    }

    var endCreateArr = new Date();
    arr.sort(right);

    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    console.log("mass2=" + result);


    var finish = new Date();
    var difference = finish - now;
    console.log({"timeOfCreating": difference + "ms"});
    return arr;


}
console.log(mass());
console.log(mass1());
console.log(mass2());
//TASK-3
var matrixC = [[1, 3, 4, 2], [4, 5, 8, 3], [2, 3, 6, 7]];
var matrixA = [60, 80, 100];
var matrixB = [40, 60, 80, 60];
var matrixD = [];
for (var i = 0; i == matrixD; i++) {
    if (matrixA[0] > matrixB[0]) {
        matrixD[0] = matrixB[0];
        matrixD[1] = matrixA[0] - matrixB[0];
        matrixD[2] = 0;
        matrixD[3] = 0;
        matrixD[4] = 0;

        if (matrixA[1] > matrixB[1]) {
            matrixD[5] = matrixB[1] - matrixD[1];
            matrixD[6] = matrixA[1] - matrixD[5];
            matrixD[7] = 0;
            matrixD[8] = 0;
            matrixD[9] = 0;

            if (matrixA[2] > matrixB[2]) {
                matrixD[10] = matrixB[2] - matrixD[6];


                if (matrixA[2] > matrixB[3]) {
                    matrixD[11] = matrixA[2] - matrixD[10];
                }
            }
            else {
                matrixD[10] = matrixB[2] - matrixD[6];
            }
            matrixD[11] = matrixA[2] - matrixD[10];
        }
        else {
            matrixD[5] = matrixB[1] - matrixD[1];
        }

    }
    else {
        matrixD[0] = matrixA[0];
        b1 = matrixB[0] - matrixA[0];
        matrixD[4] = b1;
        if (matrixA[1] > matrixB[1]) {
            matrixD[5] = matrixB[1] - matrixD[1];
            matrixD[6] = matrixA[1] - matrixD[5];
            matrixD[2] = 0;
            matrixD[3] = 0;
            matrixD[4] = 0;

            if (matrixA[2] > matrixB[2]) {
                matrixD[10] = matrixB[2] - matrixD[6];
                matrixD[7] = 0;
                matrixD[8] = 0;
                matrixD[9] = 0;


                if (matrixA[2] > matrixB[3]) {
                    matrixD[11] = matrixA[2] - matrixD[10];
                }
            }
            else {
                matrixD[10] = matrixB[2] - matrixD[6];
            }
            matrixD[11] = matrixA[2] - matrixD[10];
        }
        else {
            matrixD[5] = matrixB[1] - matrixD[1];
        }
    }
}
console.log(matrixD);


