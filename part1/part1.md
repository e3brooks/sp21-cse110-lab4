## Part 1a. A Quick Introduction...

**var declaration:**

1) Line 9 prints 'values added: 20'
2) Line 13 prints 'final result: 20'

**let declaration:**

3) Line 9 prints 'values added: 20'
4) Line 13 returns an error. This is because the variable ```result``` was declared with the ```let``` keyword and is therefore only defined within the scope of the block and not the whole function. 

**const declaration:**

5) The code returns an error. This is because the variable ```result``` was declared with the ```const``` keyword and is therefore its value cannot be redefined. Yet, line 7 attempts to reassign it which throws an error so line 9 is never reached.
6) The code returns an error. This is because the variable ```result``` was declared with the ```const``` keyword and is therefore its value cannot be redefined. Yet, line 7 attempts to reassign it which throws an error so line 13 is never reached.

## Part 1b. A Little More of a Challenge...

1) At line 12, the number '3' is printed. This is because the for-loop increments the variable ```i``` until it is no longer less than the length of the array ```prices```. In this case, the array has a length of 3. Therefore, once ```i``` is incremented to equal 3, we break out of the for-loop and since line 12 prints ```i```, it prints the number '3'.
   
2) At line 13, the number '150' is printed. This is because the value of the variable ```discountedPrice``` gets reassigned with each iteration of the for-loop. During the last iteration of the for-loop where ```i=2```, ```discountedPrice``` gets set to ```prices[2]*(1-0.5)``` and this simplifies to 150. Since line 12 prints ```discountedPrice```, it prints the number '150'.
   
3) At line 14, the number '150' is printed. This is because the value of the variable ```finalPrice``` gets reassigned with each iteration of the for-loop. During the last iteration of the for-loop where ```discountedPrice=150```, ```finalPrice``` gets set to ```Math.round(discountedPrice*100)/100``` and this simplifies to 150. Since line 12 prints ```finalPrice```, it prints the number '150'.  
   
4) This function will return the array [50,100,150]. This is because for each iteration of the for-loop, ```finalPrice``` gets pushed into the array and ```finalPrice``` is just half of the price in the ```prices``` array at index ```i```. So, when running the for-loop, '50' is pushed into ```discounted```, then '100' and '150' and after the loop, ```discounted``` is returned. 
   
5) An error will happen at line 12. This is because the variable ```i``` was declared with the ```let``` keyword and is therefore only defined within the scope of the for-loop and not the whole function. So when we attempt to print ```i``` at line 12, it throws an error because ```i``` cannot be accessed.  
   
6) An error will happen at line 13. This is because the variable ```discountedPrice``` was declared with the ```let``` keyword and is therefore only defined within the scope of the for-loop and not the whole function. So when we attempt to print ```discountedPrice``` at line 13, it throws an error because ```discountedPrice``` cannot be accessed.   
   
7) At line 14, the number '150' will be printed. This is because the value of the variable ```finalPrice``` gets reassigned with each iteration of the for-loop. During the last iteration of the for-loop where ```discountedPrice=150```, ```finalPrice``` gets set to ```Math.round(discountedPrice*100)/100``` and this simplifies to 150. Since line 12 prints ```finalPrice``` and ```finalPrice``` was initialized using ```let``` in the same block, it is able to access ```finalprice``` and print the number '150'.
   
8) This function will return the array [50,100,150]. This is because for each iteration of the for-loop, ```finalPrice``` gets pushed into the array and ```finalPrice``` is just half of the price in the ```prices``` array at index ```i```. So, when running the for-loop, '50' is pushed into ```discounted```, then '100' and '150' and after the loop, ```discounted``` is returned. Since ```discounted``` was initialized using ```let``` outside of the for-loop, it is still able to access it.
   
9)  An error will happen at line 11. This is because the variable ```i``` was declared with the ```let``` keyword and is therefore only defined within the scope of the for-loop and not the whole function. So when we attempt to print ```i``` at line 11, it throws an error because ```i``` cannot be accessed.    
    
10) At line 12, the number '3' will be printed. This is because the variable ```length``` is initialized as the length of the array ```prices```. In this case, ```prices=[100,200,300]``` so it has a length of 3 since it contains 3 items. Since ```length``` is initialized at line 4 with ```const```, and line 14 and line 4 are within the same scope, line 14 can access the variable and print it.
    
11) This function will return the array [50,100,150]. This is because for each iteration of the for-loop, ```finalPrice``` gets pushed into the array and ```finalPrice``` is just half of the price in the ```prices``` array at index ```i```. So, when running the for-loop, '50' is pushed into ```discounted```, then '100' and '150' and after the loop, ```discounted``` is returned. Since ```discounted``` was initialized using ```const``` outside of the for-loop, it is still able to access it.
    
12) A) student.name
    
    B) student['Grad Year']

    C) student.greeting()

    D) student['Favorite Teacher'].name

    E) student.courseLoad[0]

13) A) '32' because the integer 2 converts to its string representation of '2' and then the problem becomes adding two strings so we concatenate '2' to '3'
    
    B) 1 because you cannot substract strings so the string '3' becomes the integer 3 and the problem becomes 3-2=1

    C) 3 because null converts to 0 and 3+0=3

    D) '3null' because null converts to the string 'null' so the problem becomes adding two strings so we concatenate 'null' to '3'
    
    E) 4 because true converts to 1 and 1+3=4

    F) 0 because false converts to 0 and null also converts to 0 so 0+0=0

    G) '3undefined' because undefined converts to the string 'undefined' so the problem becomes adding two strings so we concatenate 'undefined' to '3'

    H) NaN because you cannot substract strings so the string '3' becomes the integer 3 and undefined converts to NaN and subtraction involving NaN equals NaN

14) A) true because '2' becomes 2 and 2>1 is true
    
    B) false because when converting the strings to integers, the comparison only looks at the first char so it does the comparison 2<1 which is false

    C) true because since the comparison ```==``` converts types when comparing, '2' becomes 2 and 2==2 is true

    D) false because the comparison ```===``` does not convert types when comparing and since 2 is an integer and '2' is a string, 2==='2' is false

    E) false because true converts to 1 and 1==2 is false

    F) true because Boolean(2) is true without conversion and true===true is true  

15) The difference is that ```==``` checks equality with type conversion and ```===``` checks equality without type conversion.
    
16) Refer to [part1b-question16.js](part1b-question16.js) 
    
17) The result will be the array [2,4,6]. This is because ```callback``` is referring to the function ```doSomething``` which doubles the number that is passed in. So, since ```modifyArray``` is creating an array ```newArr``` with values of the parameter array but doubled, the function returns [2,4,6].

18) Refer to part1b-question18.js](part1b-question18.js) 
19) The output is ```1 4 3 2```. This is because when the functions is called, line 2 runs immediately and prints 1. Then line 3 and 4 run with a 1 second and 0 second delay respectively. Because of these delays, line 5 prints 4 first. The 0 second delay with line 4 runs and prints 3 immediately after. Lastly, 2 is printed. 
