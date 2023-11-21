//Create a class StringBuilder that allows method chaining. 
// ---------------------
//It should have methods 
//append to add a string, 
//prepend to add a string at the beginning, and toString to return the final string.

class StringBuilder {
    constructor(string) {
        this.string = String(string || '');
    }

    append(str) {
        this.string = this.string.concat(str);
        return this;
    }

    prepend(str) {
        this.string = str.concat(this.string);
        return this;
    }
}

const builder = new StringBuilder();
console.log(builder);
const result = builder.append(' Hello').prepend("Good Morning").append(" Swastik");
console.log(result);
