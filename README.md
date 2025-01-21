# Nested Routes Not Working in React Router Dom v6

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The provided `bug.js` file shows a scenario where nested routes fail to render correctly, always displaying the default route instead of the expected nested component. The solution is provided in `bugSolution.js`

## Problem

Nested routes, crucial for building complex applications, unexpectedly default to the parent route's component rather than displaying the intended child component. This is a known issue often caused by incorrect route definitions or missing elements in the route hierarchy.

## Solution

The solution involves carefully reviewing the route definitions to ensure correct path specifications and the proper use of the `Outlet` component to render nested components. The `bugSolution.js` file offers a corrected implementation showcasing the use of `Outlet` in the parent route to properly display nested content.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary packages.
4. Run `npm start` to start the development server.