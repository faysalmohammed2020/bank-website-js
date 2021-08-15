//Handle the Deposit Handler Event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposit balance
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    //update total balance
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = newTotalBalance; 
    //clear the deposit input field
    depositInput.value = '';
});

//Handle the withdraw Handler Event

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set withdraw total

    const withdrawTotal = document.getElementById('witdraw');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const newwithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;
    //update Total Balance
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalance.innerText = newTotalBalance;

    //clear the withdraw input field
    withdrawInput.value = '';

});

document.getElementById('logout-btn').addEventListener('click' ,function(){
    window.location.href='index.html';
})