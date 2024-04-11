       
                                          // Practice Return Function
        //  Add Two Numbers
        // let a = 2;
        // let b = 3;
        let a = parseInt(prompt("Enter first number"));
        let b = parseInt(prompt("Enter second number"));
        function addTwoNumbers(a, b) {
            document.write(`${a} + ${b} = ${a + b} <br>`);
            let sum = a + b;
            return sum;
        }

        let sumNumber = addTwoNumbers(a, b);
        console.log(sumNumber);

        //   Multiply two Numbers
        let x = 4;
        function multiply(x) {
            document.write(`${x} x ${sumNumber} = ${x * sumNumber} <br>`)
            let mul = x * sumNumber;
            return mul;
        }
        let multiplyVal = multiply(x);
        console.log(multiplyVal);

        let y = multiplyVal;
        let z = sumNumber;

        // Divide Two Numbers
        function divideTwoNumbers(y,z) {
            document.write(`${multiplyVal} / ${sumNumber} = ${multiplyVal / sumNumber} <br>`)
            let divide = multiplyVal / sumNumber
            return divide;
        }
        let div = divideTwoNumbers(y,z);
        console.log(div);

        // Subtract Two Numbers
        let num1 = multiplyVal;
        let num2 = sumNumber;
        function SubtractTwoNumbers(num1,num2) {
            document.write(`${multiplyVal} - ${sumNumber} = ${multiplyVal - sumNumber}`)
            return multiplyVal - sumNumber;
        }
        let sub = SubtractTwoNumbers(num1,num2);
        console.log(sub);