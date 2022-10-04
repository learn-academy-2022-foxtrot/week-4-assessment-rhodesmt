# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming refers to a programming style that focuses on programming around objects consisting of key:value pairs. Functional programming refers to the utilization of programming with functions. Ruby is a OOP language, whereas JavaScript is a functional programming language.

Researched answer: OOP is a programming paradigm that was initially created to handle larger complex software systems. Objects act as containers that store and separate sections of code that handle specific procedures. This allows code to be more easily "blocked-off" from the code as a whole, and allow for quicker fixes and less unexpected change from any alterations within the code. 
Functional programming is a programming paradigm where programs are built by constructing and implementing programs to acheive the desired output. The ultimate goal of this is clean iteritable code with "mathematics" style functions to solve the problem.

2. What is the difference between a Float and an Integer in Ruby?

Your answer:An integer is any whole number, ie (1, 2, 3..) whereas a float is a decimal number, ie (1.3, 4.3, 6.5) When using integers for mathematical expressions, the return will be a whole number integer. For float however, it will return as a float value. Only one value within a mathematical expression needs to be a float value for the return to also be a float. 

Researched answer: If a non-whole number is the desired return, then a float must be passed into the initial equation.

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means that there is no need for a return statement, or in the case of Ruby, a puts statement within a function. Once the function has been initially declared, Ruby then automatically assumes that a return is expected and will output that.

Researched answer: In Ruby, if a return is the last expression in a path of execution, there's no need for a return keyword. Since Ruby reads from top to bottom, it already has the logic built in to expect that last statement to be a return. 

4. What is a block in Ruby?

Your answer: A block is almost like a function in Javascript, it is a separate line of code that is only initiated when called. Since everything in Ruby is an object and does not utilize functional programming, blocks are used to carry out similar processes in an Object-oriented programming language.

Researched answer: A Ruby block is an anonymous function that is passed to a method to determine a specific outcome. They are annotated in Ruby with do and end as the keywords. Blocks can be helpful when wanting to display all of the information contained within a range.

 (1..10).each do |value| 
    p value
 end 

Output: 1/2/3/4...

5. How do you extract a value in a Ruby hash?

Your answer: I believe you can use .map in Ruby to iterate over a hash to extract a specific value, but I'm not sure if it functions the same as in JavaScript where it will return the same number of values contained within the called upon array.

Researched answer: I was incorrect, you do not need to use .map to extract a single value from within a hash. It is simply by logging the name of the hash, along with the corresponding key that we are wanting to identify. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL, also known as Postgres is one type of SQL (Structured Query Language- a domain-specific language used for communicating with relational databases) that is an open-source object-relational database management system. The main difference between Postgres and SQL being that Postgres uses an object-oriented programming format when searching databases.

2. Ruby on Rails: Ruby on Rails is the full-stack programming language used for Ruby languages, much like React with JavaScript. Ruby on Rails follows a model, view, and controller architectural topography. Model meaning the database layer, view is the part the user sees (UI/UX), the controller filters the relevant data from the model which is then used to contruct the view

 (model)        (controller)         (view)
databases-----> Ruby on Rails -----> UI/UX

3. ORM: ORM stands for Object-relational mapping and is a programming technique used for converting data between incompatible systems using object-oriented programming languages. It is a very powerful tool that allows developers to write SQL queries using Rails.

4. Active Record: A type of ORM; Active record takes data which is stored in a database table and lets you interact with the data like a Ruby object.

5. Migrations: A tool that gives a developer the ability to manipulate the structure of a database overtime, and are executed by running SQL commands. Rails has a built-in feature that maintains a current running log of all migrations that have run, and those that have yet to be executed.
