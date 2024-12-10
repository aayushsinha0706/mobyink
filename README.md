# React + Vite Project

## Overview

This is a minimal setup for a React application using Vite, with Hot Module Replacement (HMR) and ESLint rules.

## Prerequisites

- Node.js (version 14.18+ or 16+)
- npm (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

- Starts the Vite development server
- Open http://localhost:5173 in your browser

### 4. Python Solution
```py
def perform_operation(num_array,operation,operand):
    
    number = 0
    for digit in num_array:
        number = number * 10 + digit
    
    if operation == "+":
        number = number + operand
    elif operation == "-":
        number = number - operand
    elif operation == "*":
        number = number * operand
    elif operation == "/":
        if operand == 0:
            return "Error: division by zero"
        number = number//operand
    else:
        return "Not valid operation"
    
    result_array = []
    for char in str(number):
        result_array.append(int(char))
    return result_array
print(perform_operation([1, 2, 3], '+', 1))  # Output: [1, 2, 4]
print(perform_operation([9, 9, 9], '+', 1))  # Output: [1, 0, 0, 0]
print(perform_operation([1, 0, 0, 0], '-', 1))  # Output: [9, 9, 9]
```

