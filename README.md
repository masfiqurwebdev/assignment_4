1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementById = It's select a unique id, for one element . No other's element can't use the id by this name

getElementsByClassName = It's select multiple elements by class name. 

querySelector = It's select only the first matching element using CSS selectors (id,class,tag,etc.).

querySelectorAll = It's selects all matching elements using CSS selectors. Returns a static NodeList.

---------------------
2. How do you create and insert a new element into the DOM?

Ans:
First we have to take a variable and create a element like this.
--document.createElement("element name");
And set a inner content
Then we should be insert this element using [appendChild(), append() or prepend()]


---------------------
3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling is when an event starts on the target element and then propagates upward through its parent elements in the DOM.

If you click a button inside a div, the event fires in this order:
button > div > body > document


---------------------
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
It's a technique where you attach a single event listener to a parent element to handle events for its child elements using event bubbling.

It's Usefull for:
*Improves performance,
*Works for dynamically added elements,
*Cleaner and more maintainable code,


---------------------
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() Is stops the default browser behavior,

stopPropagation() Is Stops the event from bubbling up to parent elements
