"use strict";

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error = document.querySelector(".error");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error3a = document.querySelector("#error3a");
const error4 = document.querySelector("#error4");
const form = document.querySelector("form");
const input = document.querySelector(".input");

const errorArr = [error1, error2, error3, error4];

function showError(input, error) {
  input.style.border = "1.8px solid hsl(0, 100%, 74%)";
  input.style.background = "url(images/icon-error.svg)";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundPosition = "94%";
  error.classList.remove("hide");
  input.style.color = "hsl(0, 100%, 74%)";
}

function showErrorEmail(input, error) {
  input.style.border = "1.8px solid hsl(0, 100%, 74%)";
  input.style.background = "url(images/icon-error.svg)";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundPosition = "94%";
  error3.classList.remove("none");
  error3a.classList.add("none");
  input.style.color = "hsl(0, 100%, 74%)";
}

function checkFn(input, error) {
  input.value === "" ? showError(firstName, error1) : "";
}

function checkLn(input, error) {
  input.value === "" ? showError(lastName, error2) : "";
}

function checkEmail(input, error) {
  input.value === "" ? showError(email, error3a) : "";
}

function checkPw(input, error) {
  input.value === "" ? showError(password, error4) : "";
}

function validateEmail(input) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!re.test(input.value.trim()) && email.value.trim() !== "") {
    showErrorEmail(email, error3);
  } else {
    ("");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkFn(firstName, error1);
  checkLn(lastName, error2);
  checkEmail(email, error3);
  checkPw(password, error4);
  validateEmail(email);
});
