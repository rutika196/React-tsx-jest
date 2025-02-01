import { useState } from "react";

interface CounterProps {
    count?: number;
}

export const Counter = ({count = 0}: CounterProps) => {
    const [countState, setCountState] = useState(count);
    return (
        <div>
            <h1 data-testid="counter-value">Count: {countState}</h1>
            <button onClick={() => setCountState(count +1)}>Increment</button>
            <button onClick={() => setCountState(count -1)}>Decrement</button>
            <button onClick={() => setCountState(0)}>Reset</button>

        </div>
    );
};  // This is a functional component, it does not have a constructor, so we don't