1. Line 9 prints "values added:  20".
2. Line 13 prints "final result:  20".
3. You should not use `var` because although it was intended to allow for scope restriction on local variables, it led to naming conflicts and scope breaks which would ultimately lead to many hours of confused debugging.

4. Line 9 prints "values added:  20".
5. Line 13 is never reached due to a scope error. `result` is defined as a variable within the `if (add)` block, and as such, is undefined in the containing block, the function,'s namespace. Thus, it throws `ReferenceError: result is not defined`.

6. Line 9 is never reached due to an assignment error. `result` is `const`, and assigned 0, so trying to assign a value to it, as expected, throws `Assignment to constant variable`.
7. Line 13 is also never triggered due to the error above for question 6.