"use strict"
// Stack class 
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 

    // push(item) 
    push(element){ 
        this.items.push(element); 
    } 

    // pop() 
    pop(){  
        if (this.items.length == 0)  //empty
            return "Underflow"; 
        return this.items.pop(); 
    } 

    // peek() 
    peek(){
        return this.items[this.items.length - 1]; 
    }

    // isEmpty() 
    isEmpty(){
        return this.items.length == 0;
    }

    // printStack() 
    printStack(){
        document.getElementById("pila").innerHTML = ""; //Para refrescar la pila
        var str = "<h2>Pila:</h2><ul>"; 
        for (var i = this.items.length-1; i >= 0; i--) 
            str += "<li>"+ this.items[i] + "</li>"; 
        str += "</ul>";
        document.getElementById("pila").insertAdjacentHTML("beforeend",str);
    }
} 

class CalculadoraRPN {
    constructor(){
        this.stack = new Stack();
    }

    erase(){
        document.getElementById("pantalla").innerHTML = "";
    }

    digito(numero){
        document.getElementById("pantalla").insertAdjacentHTML("beforeend",numero);
    } 

    dot(){    
        document.getElementById("pantalla").insertAdjacentHTML("beforeend",".");
        document.getElementById("dot").disabled = true;
    }

    clear(){
        this.stack = new Stack();
        document.getElementById("pantalla").innerHTML = "";
        document.getElementById("pila").innerHTML = "";
        this.disabledFunctions(true);
        this.disabledSpecialFunctions(true);
        document.getElementById("dot").disabled = false;
    }

    enter(value){
        value = parseFloat(document.getElementById("pantalla").innerHTML);
        if (this.isNumeric(value)){ 
            this.stack.push(value);                          //Meter en la pila
            this.stack.printStack();
            document.getElementById("pantalla").innerHTML = "";
            document.getElementById("pantalla").innerHTML = "";
            if (document.getElementById("dot").disabled == true)
                document.getElementById("dot").disabled = false;
        }
        else {
            alert("Valor "+ document.getElementById("pantalla").innerHTML + " no válido");
            document.getElementById("pantalla").innerHTML = "";
            this.disabledFunctions(true);
        }
        if (this.stack.items.length >= 2)
            this.disabledFunctions(false); 
        if (this.stack.items.length >= 1){
            this.disabledSpecialFunctions(false);
        }
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    disabledDigits(value){
        document.getElementById("0").disabled = value;
        document.getElementById("1").disabled = value;
        document.getElementById("2").disabled = value;
        document.getElementById("3").disabled = value;
        document.getElementById("4").disabled = value;
        document.getElementById("5").disabled = value;
        document.getElementById("6").disabled = value;
        document.getElementById("7").disabled = value;
        document.getElementById("8").disabled = value;
        document.getElementById("9").disabled = value;
    }

    disabledFunctions(value){
        document.getElementById("plus").disabled = value;
        document.getElementById("minus").disabled = value;
        document.getElementById("times").disabled = value;
        document.getElementById("by").disabled = value;
    }

    disabledSpecialFunctions(value){
        document.getElementById("sqrt").disabled = value;
        document.getElementById("pow2").disabled = value;
        document.getElementById("pow").disabled = value;
        document.getElementById("ln").disabled = value;
        document.getElementById("sin").disabled = value;
        document.getElementById("cos").disabled = value;
        document.getElementById("tan").disabled = value;
        document.getElementById("x10").disabled = value;
        document.getElementById("factorial").disabled = value;
        document.getElementById("log").disabled = value;
        document.getElementById("mod").disabled = value;
        document.getElementById("erase").disabled = value;
    }

    add(){
        var result = this.stack.pop() + this.stack.pop();
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.items.length < 2)
            this.disabledFunctions(true);
        this.stack.printStack();
    }

    sub(){
        var aux = this.stack.pop();
        var result = this.stack.pop() - aux;
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.items.length < 2)
            this.disabledFunctions(true);
        this.stack.printStack();
    }

    multiply(){
        var result = this.stack.pop() * this.stack.pop();
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.items.length < 2)
            this.disabledFunctions(true);
        this.stack.printStack();
    }

    divide(){
        var aux = this.stack.pop();
        var result = this.stack.pop() / aux;
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.items.length < 2)
            this.disabledFunctions(true);
        this.stack.printStack();
    }

    sqrt(){
        var result = Math.sqrt(this.stack.pop());
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    square(){
        var aux = this.stack.pop();
        var result = aux * aux;
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    power(){
        var aux = this.stack.pop();
        var result = Math.pow(this.stack.pop(),aux);
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    ln(){
        var result = Math.log2(this.stack.pop());
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    sin(){
        var result = Math.sin(this.stack.pop()); 
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    cos(){
        var result = Math.cos(this.stack.pop()); 
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    tan(){
        var result = Math.tan(this.stack.pop()); 
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }

    ten(){
        var result = Math.pow(this.stack.pop(),10);
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }
    
    log(){
        var result = Math.log10(this.stack.pop()); 
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }
    factorial(){
        try { 
            var result = this.stack.pop();
            result = this.fact(result); 
            this.stack.push(result);
            this.stack.printStack();
            document.getElementById("pantalla").innerHTML = result;
        }
        catch(err) {
            alert(err);
            document.getElementById("pantalla").innerHTML = "";
        }
    }
    fact(n) {
        var total = 1; 
        var j = 1;
        for (j=1; j<=n; j++) {
            total = total * j; 
        }
        return total; 
    }

    mod(){
        var aux = this.stack.pop();
        var result = this.stack.pop() % aux;
        document.getElementById("pantalla").innerHTML = result;
        this.stack.push(result);
        this.stack.printStack();
        if (this.stack.isEmpty())
            this.disabledSpecialFunctions(true);
        this.stack.printStack();
    }
}

var calc = new CalculadoraRPN();

document.addEventListener('DOMContentLoaded', function() {
    calc.disabledFunctions(true);
    calc.disabledSpecialFunctions(true);
 }, false);

