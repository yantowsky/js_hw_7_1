function getNewSum() {
    let sum = 0;
    return function calcSum(num) {
        sum += num;
        return sum;
    }
}

const firstSum = getNewSum();
console.log(firstSum(4)); // 4
console.log(firstSum(6)); // 10
console.log(firstSum(10)); // 20
console.log(firstSum(7)); // 27

const secondSum = getNewSum();
console.log(secondSum(1)); // 1
console.log(secondSum(2)); // 3
console.log(secondSum(-10)); // -7
console.log(secondSum(7)); // 0