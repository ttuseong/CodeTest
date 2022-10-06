function solution(expression) {
    var answer = [];
    var priority = [['*', '+', '-'], ['*', '-', '+'], ['+', '*', '-'], ['+', '-', '*'], ['-', '+', '*'], ['-', '*', '+']]
    var temp = expression.split(/(\D)/);
    
    for(var i = 0; i < priority.length; i++){
        answer.push(Math.abs(compute(temp.slice(), priority[i])));
    }
    
    return Math.max(...answer)
}

function compute(expression, priority){
    for(var i = 0; i < priority.length; i++){   
        var val = 0;
        
        while(true){
            var index = expression.indexOf(priority[i]);
            
            if(index == -1){
                break;
            } 
            
            switch(priority[i]){
                case "*":
                    val = Number(expression[index - 1]) * Number(expression[index + 1]);
                    break;
                case "+":
                    val = Number(expression[index - 1]) + Number(expression[index + 1]);
                    break;
                case "-":
                    val = Number(expression[index - 1]) - Number(expression[index + 1]);
                    break;
            }
            
            expression.splice(index - 1, 3, val)       
        }      
    } 
    
    return expression[0]
} 