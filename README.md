- `npm install` // yarn error

# Project Technology

- React
- React Router Dom
- Tailwind CSS
- Redux Toolkit
- React Redux
- Daisy UI
- react-day-picker
- date-fns
- react-day-picker
- firebase
- react-firebase-hooks
- react-hook-form
- react-icons
- d3-scale-chromatic
- react-modern-calendar-datepicker

## Merge multiple objects inside the same array into one object [duplicate]

```sh

    var arrObj = [{a:1, b:2},{c:3, d:4},{e:5, f:6}];

    how can i merge this into one obj?

    //mergedObj = {a:1, b:2, c:3, d:4, e:5, f:6}

    //Answers

    const arrObj = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];

    console.log(arrObj.reduce(function(result, current) {
    return Object.assign(result, current);
    }, {}));

    // If you prefer arrow functions, you can make it a one-liner ;-)

    console.log(arrObj.reduce(((r, c) => Object.assign(r, c)), {}));

    // Thanks Spen from the comments. You can use the spread operator with assign
    
    console.log(Object.assign({}, ...arrObj));
```
