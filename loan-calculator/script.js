document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan{
    
    const loanAmount = parseFloat(document.getElementById(loanAmountInput).value);
    const interestRate = parseFloat(document.getElementById(interestRateInput).value);
    const loanTerm = parseFloat(document.getElementById(loanTermInput).value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please Enter valid numbers for all the fields");
    }

    const monthlyInterest = (interestRate/100) / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    



}