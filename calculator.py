#!/usr/bin/env python3
"""
A simple command-line calculator.
"""

def add(x, y):
    """Add two numbers."""
    return x + y

def subtract(x, y):
    """Subtract two numbers."""
    return x - y

def multiply(x, y):
    """Multiply two numbers."""
    return x * y

def divide(x, y):
    """Divide two numbers."""
    if y == 0:
        raise ValueError("Cannot divide by zero!")
    return x / y

def main():
    """Main calculator loop."""
    print("Simple Calculator")
    print("Operations: add (+), subtract (-), multiply (*), divide (/)")
    print("Type 'quit' to exit.")

    while True:
        try:
            user_input = input("\nEnter operation (e.g., '2 + 3') or 'quit': ").strip()

            if user_input.lower() == 'quit':
                print("Exiting calculator. Goodbye!")
                break

            # Parse the input string
            parts = user_input.split()
            if len(parts) != 3:
                print("Invalid input format. Please use the format: <number> <operator> <number>")
                continue

            num1_str, op, num2_str = parts

            num1 = float(num1_str)
            num2 = float(num2_str)

            if op == '+':
                result = add(num1, num2)
            elif op == '-':
                result = subtract(num1, num2)
            elif op == '*':
                result = multiply(num1, num2)
            elif op == '/':
                result = divide(num1, num2)
            else:
                print(f"Unknown operator '{op}'. Please use +, -, *, or /.")
                continue

            print(f"Result: {result}")

        except ValueError as e:
            print(f"Error: {e}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()