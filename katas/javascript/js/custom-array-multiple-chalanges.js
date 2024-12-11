class myArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push (item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }

    get (index){
        return this.data[index];
    }

    pop (){
        const lastItem = this.data[this.length -1]
        if (this.length > 0) {
            delete this.data[this.length - 1];
            this.length--
            return lastItem;
        }
        return undefined;
    }

    shift() {
        const firstItem = this.data[0];
        delete this.data[0]

        for (let i = 0; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index){
        let deletedItem = this.data[index]
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--
        return deletedItem;
    }

    reverseStr(str){
        return str.split('').reverse().join('');
    }

    palindrome(str){
        return str.split('').reverse().join('') === str;
    }

    reverseInt(int) {
        let res=   int.toString()
            .split('')
            .reverse()
            .join('');
        return parseInt(res) * Math.sign(int);
    }

    capitalizeSentence(str){
        return  str.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
    }

    fizzBuzz(int){

        for (let i = 1; i <= int; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz')
            } else if (i % 3 === 0) {
                console.log('Fizz')
            } else if (i % 5 === 0) {
                console.log('Buzz')
            } else {
                console.log(i)
            }
        }
    }
    maxProfit(arr){
    let minPrice = arr[0]
        let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        const currentPrice = arr[i]

        minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
    }
}

const myNewArray = new myArray();

console.log(myNewArray.maxProfit([7,1,5,3,6,4]));

