# jQuery advanced
Level up your web development expertise by mastering jQuery. Explore CDN integration, dynamic DOM manipulation, click handling, AJAX queries, and pagination. Elevate your skills for creating dynamic, interactive web applications.

## Learning Objectives
- Learn how to load jQuery from a CDN in a page
- Learn the different ways to create DOM elements with jQuery
- Learn how to modify elements
- Learn how to add new elements to a page with different positions
- Learn how to add a click handler on an element
- Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
- Learn how to create a pagination

## Tasks
0. [Setup your dev environment](#Setup-your-dev-environment)
1. [Creating a DOM element](#Creating-a-DOM-element)
2. [Creating multiple DOM elements at once](#Creating-multiple-DOM-elements-at-once)
3. [Chain DOM elements](#Chain-DOM-elements)
4. [HTML function](#HTML-function)
5. [Click attribute and remove function](#Click-attribute-and-remove-function)
6. [Val, before, and prepend functions](#val-before)
7. [Query - Setup your dev environment](#query-setup)
8. [Pagination](#Pagination)
9. [Wrap/unwrap](#Wrap/unwrap)
10. [Another Get API](#Another-Get-API)
11. [Post query](#Post-query)
12. [Delete query](#Delete-query)

### Setup your dev environment
You are given this starter HTML for this task:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>
    </head>
    <body>
    </body>
</html>
```

In a file 0-index.html:
- Load the latest version of jQuery using their code.jquery.com CDN
- Use the Slim & minified version of jQuery
- When the page is being loaded, verify that jQuery is loaded correctly
- If jQuery is ready to be used, log to the console jQuery has been loaded correctly
- If jQuery has not been loaded properly, log to the console jQuery has not been loaded correctly

Requirements
- Make sure your code is in a script of type application/javascript

### Creating a DOM element
- In a file 1-index.html, reuse the template you created previously.
- Remove the code that verifies jQuery loaded and logs messages to the console
- Create a function named createTextElement:
    - Within the function, create a p HTML element
    - The paragraph should display Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    - Add the paragraph to the body of the page
- Call the createTextElement function

Requirements:
- You must use jQuery only to generate the HTML tag and attach it to the page
- Use the keyword append to attach the element to the page

### Creating multiple DOM elements at once
In a file 2-index.html, reuse the template you created previously.
- Remove the function createTextElement
- Create a function named createFamilyTree:
    - It should create a table element
        - The head of the table should display Firstname and Lastname in two cells
        - The body of the table should three rows
        - The first row should contain two cells with Guillaume and Salva
        - The second row should contain two cells with Paulette and Salva
        - The third row should contain two cells with Antoine and Salva
    - Use the keyword append only once to attach all the elements of the table to the page
- Call the createFamilyTree function

Requirements:
- You must use jQuery only to generate the HTML tag and attach it to the page
- The entire table code should be contained in one string

The table created by your script should look like this:

![task2-image](images/task-2.png)

### Chain DOM elements
In a file 3-index.html, reuse the template you created previously. Reuse also the function named createFamilyTree:
- The table is containing the exact same values as the previous task
- This time, create each element one by one
- Use the keywords append for each element and text for the cells
- Do not create any intermediate variable
- Call the createFamilyTree function

Tips:
- You can append multiple elements at once, by separating the elements with a comma

Requirements:
- You must use jQuery only to generate the HTML tag and attach it to the page

The table created by your script should look like this:

![task2-image](images/task-2.png)

### HTML function
In a file 4-index.html, reuse the template you created in the previous task. Reuse also the function named createFamilyTree.
- Create a new function replaceFamilyTree:
    - It should replace the childrens of the tbody elements with a new tr
    - The tr element should contain two cells with Gerard and Bonissa in each
- Make sure createFamilyTree and replaceFamilyTree are called

Requirements:
- You must use the keyword html to replace the content of the table

The table created by your script should look like this

![task4-image](images/task4.png)

### Click attribute and remove function