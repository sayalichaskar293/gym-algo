'use-strict';

const fees = document.querySelector("#fees");
const trainerFees = document.querySelector("#trainerFees");
const proDays = document.querySelector("#proDays");

const modalOne = document.querySelector(".one");
const modalTwo = document.querySelector(".two");

const submitButton = document.querySelector(".submit");

const final = document.querySelector("#finalAnswer");

let finalAnswer = 0;

function calcMoney (totalFees, totalTrainerFees, totalProDays) {
    totalMoney = totalFees + totalTrainerFees;
    finalAnswer = totalMoney / totalProDays;
};

submitButton.addEventListener(
    'click', function () {
        calcMoney(Number(fees.value), Number(trainerFees.value), Number(proDays.value))
        final.value = finalAnswer;
        modalOne.classList.toggle('hidden');
        modalTwo.classList.toggle('hidden');
    }
)
