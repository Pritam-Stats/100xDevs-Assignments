// Write a function that accepts another function and a time (in milliseconds) as inputs, and runs the function after the given time.
// Type the function parameters appropriately.
// Example Input: runLater(() => console.log("Hello!"), 2000)
// Example Output: Prints "Hello!" after 2 seconds.

type Callback = () => void;
type Time = number;


//these are called JSDoc
/**
 * @param action - A callback function to run after the delay;     
 * @param delay - a whole number in milliseconds;
 */

export function runLater(action: Callback, delay: number) : ReturnType<typeof setTimeout> {
    if (! Number.isInteger(delay)) throw new Error("delay must be a whole number");     //use console warn and return to stop here only

    return setTimeout(action, delay);
}

try {
    runLater(() => {console.log("Pritam")}, 2.220);
} catch(err) {
    console.log(err);
}
