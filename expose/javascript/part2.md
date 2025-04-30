1. `i` will be printed. It is defined not within the for loop scope, but within the function scope. This should be the value 3, as C-style for loops like this call the incrementor before the check, and the last pass must check the condition before exiting the loop.

2. It prints the last calculated price which was discounted. This is why function-scoped `var` is so confusing, it jumps past the `for` scope and up to the containing `function` scope, so it's visible to the log call. In this case, it prints `150`, ad `300` was the last value in the `prices[]` array.

3. `finalPrice` is declared both with var and outside of the for loop, so it prints out, as expected. There is no error, it simply prints `150`.

4. The function returns the discounted prices - in this case, each value times 0.5, then rounded to the nearest cent. This call returns `[ 50, 100, 150 ]`.

5. There will be a `ReferenceError` since `i` is not defined in the scope. Since `let` follows typical variable scope rules, it limits the scope to the immediate containing block, the `for` loop, and it becomes inaccessible outside that block within the function scope.

6. It will also return a `ReferenceError`, for the same reason as `i`. Per normal scoping rules, `discountedPrice` is within the `for` scope, which has exited by line 13.

7. It will print "150", the final price calculated. `let` is at the function level in this case, so even with normal scoping, this works fine.

8. `[ 50, 100, 150 ]` for the same reasons as \#4. Nothing goes wrong, the scopes are all accessible, and the calculation pans out exactly the same as before with `var`.

9. It exits as `i` is within the `for` loop block due to the `let` preceding its definition. Arrays in JS are references, so we can't change the object reference - but we can use that reference to change the object's contents. Previous `const` usages assigned values, but we simply access members of this one, which change its underlying value successfully. But, after all that, we still hit the out-of-scope `i`.

10. It successfully prints the length, 3. The length is const, and never reassigned, so it works out.

11. It will return `[ 50, 100, 150 ] `. This is the same calculation as earlier, but the rounding has been removed. The values, however, do not have any decimals on division by 2 (equivalent to multipying by 0.5=1/2), and as such do not have any change in value compared to the earlier operation.

12.
    a. `student.name`

    b. `student['Grad Year']`

    c. `student.greeting()`

    d. `student['Favorite Teacher'].name`

    e. `student.courseLoad[0]`

13.
    a. `'32'`. First object is a string, number maps to string, so as concatenation is addition for strings, they concatenate.

    b. `1`. First object is a string, second a number, there is no anti-concatenation operation so it looks at the other way around. Since the second object is a number, it tries to convert the first to a number, this works, so it subtracts them and returns the result.

    c. `3`. First object is a number, `null` maps to 0, add zero and get the original number.

    d. `'3null'`. First object is a string, `null` maps to `'null'`, concatenation is addition for strings, they concatenate.

    e. `4`. First object is a boolean, tries to add a number but this isn't valid, looks at the second value to see it's a number, tries to coerce `true` into a number, succeeds by turning it into `1`, they add and the value `4` is returned.

    f. `0`. `false` is a boolean, tries to coerce `null` into a boolean, fails, can't coerce anything into a `null` which includes false. Both types failed, so it tries to use number as an intermediate type. Both have the ability to convert to number, so they both convert to `0` successfully and add together to produce `0`.

    g. `'3undefined'`. Undefined can be coerced into a string, so it switches to concatenation and concatenates them.
    h. `NaN`. Subtraction is invalid for strings, so it tries to convert both to numbers, which succeeds. However, `'3'->3`, but `undefined->NaN` since NaN is the closest numerical representation to `undefined`. Thus, `3+NaN=NaN`, per floating point operation.

14.
    a. `true`. One operand is the string and the other is number, so it converts the string to a number, and `2>1`.

    b. `false`. JS String comparison goes character by character, so `'2'` > `<nothing>`.

    c. `true`. Loose comparison, converts the string to a number as with part a. These are equal as numbers.

    d. `false`. Strict comparison. No conversion applies, not the same type, not the same value.

    e. `false`. Loose comparison, coerces `true->1`, but still `1 != 2`.
    
    f. `true`. Strict comparison, right value must be true. `Boolean` converts 2 to a boolean, which for numbers means the value is nonzero (C-style booleans).

15. `==` is loose comparison, it can coerce types and change comparison methods is values can be made comparable. `===` is strict comparison, and doesn't coerce types. If the types are incomparable, it returns false.

17. I'm quite used to function references from Lua, nice to see them somewhere else. This function would pass the array to modifyArray, call the callback on each element, pushing them at the same index, then return that array. The end result will be the input values but each modified by 2, in a new array object.

19. `1(newline)4(newline)<returns to prompt>3(newline)2(newline)` It's a bit hard to represent the newlines and the return to prompt here but I tried to make it readable. Return to prompt just put "> " on the screen.