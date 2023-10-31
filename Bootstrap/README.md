# Bootstrap
In this project we learn the basics of Bootstrap, a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
## Learning Objectives
- Usage of Containers
- Usage of the Grid system
- Usage of Components
- Usage of Utilities
## Tasks
0. [Reboot Styling](#task-0)
1. [Blocks](#task-1)
2. [Table of chemical elements](#task-2)
3. [Task 3](#task-3)

0. ### Reboot Styling
    From this HTML:
    "0-index.html"

    Add Bootstrap to reset the CSS styling.

    Your final page must look like this:
![Task 0 image](images/0b67c90b07246a25d1f8.jpg)
1. ### Blocks
    From this HTML:
    "1-index.html"

    Build this responsive web page:
![Task 1 image](images/1-index.gif)

    Requirements:
    - You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
    - You can not change the HTML structure - only adding classes is allowed

    Behaviors/styles:
    - For all cells of all rows:
        - Padding at .5rem
        - Background color of the name of the cell
        - Text centered and white
    - First line:
        - Each cell has the same width
        - Screen >= 992px: display like 4 columns in one line
        - Screen < 992px: display like 4 lines in one column
    - Second line:
        - Each cell has the same width
        - Screen >= 576px: display like 4 columns in one line
        - Screen < 576px: display like 4 lines in one column
    - Third line:
        - The last cell is taking 50% of the width screen
        - The middle cell has 2 times the size of the first cell
        - Screen >= 992px: display like 3 columns in one line
        - Screen < 992px: display like 3 lines in one column
    - Fourth line:
        - Different order (from left to right) based on the size
        - Screen >= 1200px: Primary -> Success -> Danger -> Warning
        - Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger
        - Screen between 768px and 992px: Danger -> Warning -> Primary -> Success
        - Screen <= 768px: Success -> Danger -> Warning -> Primary
    - Fifth line:
        - Each cell has the same width (~16% of the screen)
        - Screen >= 768px: display like 2 columns on each side of the screen in one line
        - Screen < 768px: display like 2 lines in one column
    - Last line:
        - Each cell has the same width (~16% of the screen)
        - Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell
        - Screen < 768px: display like 3 lines in one column
2. ### Table of chemical elements
    From this HTML:
    "2-index.html"

    Build this responsive web page:
![Task 2 gif](images/2-index.gif)
    Requirements:
    - You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
    - You can not change the HTML structure - only adding classes is allowed

    Behaviors/styles:
    - Header:
        - With border bottom
        - Padding .5rem and margin bottom 1rem
        - Background color “light”
        - Horizontal listing, no margin bottom:
            - First item aligned on the left with a border rounded image
            - 2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary”
            - The link “Chemical elements” is active
    - The main block has full width, spanning the entire width of the viewport
    - The first section:
        - The div inside is an alert of style “info”:
            - h4 is the header of this alert
            - The last paragraph (containing the link) should not have any margin bottom
    - The second section:
        - h1 has a margin bottom at 1.5rem and margin top at 3rem
        - Inside the h1, “only 5” has a badge layout of type “info”
        - The div is able to make the table responsive with a break at 992px
        - The table has “dark” style and hover on rows
3. 