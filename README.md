# Code sample for recruitment

Exercise reference: https://gist.github.com/warpech/f607480c6a0f14452d8bde3cb1f0cd84

Overview of steps taken to complete the task:
1. Set up an array of elements based on all the nodes of the body element.
2. Create a function called `backgroundChange` with a single parameter - `target`. This parameter represents the element that is being watched.
3. Within the function body set up a new instance of `IntersectionObserver` with two parameters: `entries`, `observer`. 
4. The following instance is used to run a `forEach` loop that adds a new `className` to all the above elements (`entries`) while they fully appear in the viewport. The defined `className`, as required, adds a dark half-transparent background and does not remove it upon element disappearance. 
