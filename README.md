# useRef-_Form_Ex_w-Reduce_Method

In this repo, I take advantage of uncontrolled componenets. Althgough it is recommended to use controlled components while creating a Form, I prefer to exercise uncontrolled components. 

To check the validity of the values I have coded a for loop.

Instead of giving a ref attribute to all inputs, I give ref to the form element and create an array of inputs by filter method.

I create an object using reduce method since I have the array of inputs whose name attributes are different than each other.

By creating a form with useRef, the numbers of unnecessary rerenders are diminished significantly, which is one of the most important feature of it.
