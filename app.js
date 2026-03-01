    let operator1;
    let operator2;
    let operation;
    let isOperationPushed=false;
    let result;
    let expression=document.querySelector(".numeral");
    let allButtons=document.querySelectorAll(".button");

    function showResult()
    {
        result=Number(result);
        expression.textContent+=result;
    }
    function clear()
    {
        isOperationPushed=false;
        operator1="";
        operator2="";   
        operation="";
        result="";
        expression.textContent="";
    
    }

    function  multiply(a,b)
    {
        return a*b;
    }
    function divide(a,b)
    {
        return a/b;
    }


    function add(a,b)
    {
        return a+b;
    }

    function subtract(a,b)
    {
        return a-b;
    }
    function evaluate()
    {
        operator1=Number(operator1);
        operator2=Number(operator2);
        switch(operation)
        {
            
            case '+' : result=add(operator1,operator2);break;
            case '-' : result=subtract(operator1,operator2);break;
            case '/' : result=divide(operator1,operator2);break;
            case 'x' : result=multiply(operator1,operator2);break;

        }
        expression.textContent="";
        showResult();
        operator1=result.toString();
        operator2="";
        isOperationPushed=false;
   }



    let numberButtons=[];
    let operationButtons=[];
    let clearButton;   
    let equalButton;
    let operators=['x','/','+','-','%'];
    let numbers = "0123456789";
    numbers = numbers.split("");

    for(let button of allButtons)
    {
        if(numbers.includes(button.textContent))
        {
            button.addEventListener("click",(e)=>
                {
                    let currentNum=e.target.textContent;
                    if((isOperationPushed===false))
                    {

                        operator1+=currentNum;
                        
                        
                    }
                    else if(isOperationPushed===true)
                    {
                        operator2+=currentNum;
                        
                    }
                    expression.textContent+=currentNum;
                    
                }
        )
            numberButtons.push(button);
        }
        else if(operators.includes(button.textContent))
        {
            button.addEventListener("click",(e)=>
            {
                let currentOperation=e.target.textContent;
                if(isOperationPushed)
                {
                    evaluate();
                }
                else
                {
                    isOperationPushed=true;
                    operation=currentOperation;
                    expression.textContent+=currentOperation; 
                }      
            }
        )
            operationButtons.push(button);
        }
        else if(button.textContent==="C")
        {
        button.addEventListener("click",()=>
        {
            clear();
        })
            clearButton=button;
        }
        else if(button.textContent==="=")
        {
            button.addEventListener("click",()=>
            {
                evaluate();
            })
            equalButton=button;
        }
    }    





