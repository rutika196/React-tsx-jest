import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Counter } from "./Counter";

test("renders Couner component with initial value", () => {
    render(<Counter count={0} />);
    screen.debug();
    expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 0");
    // expect(screen.getByText(/Counter:\s*0/i)).toBeInTheDocument();
    
    });

test("increment by 1 when button is clicked", () => {
    render(<Counter count={0} />);
    fireEvent.click(screen.getByText("Increment"));
    waitFor(() => expect(screen.getByText("Counter: 1")).toBeInTheDocument());
    screen.debug();

});