# Lifting State Up!?!?!
Check out the parent component: `InputDisplayer` and then look at its child component, `InputTester`

We pass down the `handleParentChange()` as a *prop* to the child component, and when you type in the input in the *child* component, you 'lift' the event up to the parent component which sets *its* state and renders in the H1!!

You don't have to pass just strings, objects, arrays, numbers, booleans!  You can pass down entire functions as props!

#### Wowza!