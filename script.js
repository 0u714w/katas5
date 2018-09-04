const string = ["apples", "oranges", "banannas", "grapefruit", "peaches", "jackfruit"]

const sentence = "car is cool"

//kata 1

var reverse = string.reverse()
console.log(reverse)

function reverseString(string) {
    // var reverse = string.reverse()
    return string
}

console.log(reverseString)
console.assert(reverseString)

function testReverse() {

    let result = reverseString("string big")
    console.assert(result === "big string", {
        "function": 'string.reverse()',
        "expected": ["jackfruit", "peaches", "grapefruit", "banannas", "oranges", "apples"],
        "result": result
    })
}

function testReverse2() {

    let result = reverseString("string big")
    console.assert(result === "big string", {
        "function": 'string.reverse()',
        "expected": ["jackfruit", "peaches", "grapefruit", "banannas", "oranges", "apples"],
        "result": result
    })
}

testReverse()
testReverse2()

//kata 2

var backwards = sentence.split(" ").reverse("").join(" ")
console.log(backwards)