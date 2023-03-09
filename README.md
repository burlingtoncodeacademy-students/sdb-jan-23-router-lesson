# React Router

A dependency which when implemented, will allow us to create endpoints within our application.

These endpoints will correspond to the endpoints within our server.

The endpoints will then render a particular component we wish them to display.

## Getting Started

1. Install React Router by using `npm i react-router-dom@6`
2. 

### React Router Components

    - Router
        - component that provdies clean URL's
        - a wrapper for all components that utilize the routing system
    - Routes (formerly Switch v5 & below)
        - container for a nested tree of elements that renders the branch that best matches the current location.
        - declare where each dynamic component will belong
    - Route
        - an individual route specifying component to be rendered when hit
        - consists of path and element props (there are more)
        - `path` specifies route definition
        - `element` specifies the component to be mounted when the route is hit
    - Link
        - history-aware anchor tag