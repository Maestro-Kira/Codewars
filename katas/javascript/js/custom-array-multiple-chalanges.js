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

}

const myNewArray = new myArray();

console.log(myNewArray.reverseInt(-4456))
console.log(myNewArray);