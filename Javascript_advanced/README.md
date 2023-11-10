# JavaScript advanced
This project hones in on mastering JavaScript closures for modular and efficient code. Participants learn to chain closures, simulate private methods, and grasp execution stack order, binding, and callbacks. By project completion, a strong foundation in these advanced concepts is established for creating more resilient and maintainable JavaScript code.
## Learning Objectives
- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks
## Tasks
0. [Lexical scoping and welcome message](#Lexical-scoping-and-welcome-message)
1. [Closure Scope Chain](#Closure-Scope-Chain)

### Lexical scoping and welcome message
Create a function named welcome:
- It takes two arguments: firstName (string) and lastName (string)
- It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
- Within the welcome function, write a function named displayFullName:
- It should display an alert with the message Welcome + the variable fullName + and exclamation mark.
- Call the function displayFullName at the end of the function welcome

How to test
- Open your web inspector in the tab “Console”
- Copy paste your code
- Run welcome('Holberton', 'School'); should prompt an alert with this content: Welcome Holberton School!
- alert(fullName), should return a reference error fullName is not defined

### Closure Scope Chain
- Create a variable named globalVariable with value Welcome
- Create a function outer that:
    - alerts the content of the variable globalVariable
    - creates a variable named course with value Holberton
    - creates a function inner that:
        - alerts the content of the variable globalVariable and course (concatenated)
        - creates a variable named exclamation with value !
        - creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
        - calls the function inception
    - calls the function inner
- Call the function outer

Compose the code:
- Write the function inception within inner
- Write the function inner within outer
- Call the function outer in the main code (outside any function)
- Call the function inner within outer
- Call the function inception within inner

Requirements:
- Running the script should display three popups one by one with the text Welcome, Welcome Holberton, and Welcome Holberton!