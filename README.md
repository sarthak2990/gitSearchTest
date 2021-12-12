# gitSearchTest

In this repo we have assignment tests written using cypress and integrated with cucumber
Cypress supports all the modern day browsers like chrome , firefox, safari and it supports all the OS

Setup I have followed: checkout repo: git clone https://github.com/sarthak2990/gitSearchTest

npm install

#Step1: Install Cypress if not:

I followed below mentioned doc to setup cypress: https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install

I have used Cypress package version: 9.1.1
NPM version  npm -v 6.14.8

Command to install Cypress: npm install cypress --save-dev

#Step 2: Once done we need to install cypress cucumber plugin Run this command: npm install --save-dev cypress-cucumber-preprocessor Doc followed for setup: https://www.npmjs.com/package/cypress-cucumber-preprocessor

Test Folder: feature file : cypress/integration/GitTest.feature step definations: cypress/integration/GitTest/steps.js

#Run Test: npx cypress run or cypress run

if you want to execute on chrome then: cypress run --browser chrome

For any Queries contact at sarthak2990@gmail.com or dm at https://www.linkedin.com/in/sarthak-srivastava-47908565/
