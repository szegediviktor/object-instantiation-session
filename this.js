function logThis() {
    console.log(this);
}

// logThis();

const obj1 = {
    key1: "value1",
    key2: function () {
        return this.key1;
    },
};

console.log(obj1.key2());
