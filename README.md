
**Good practices**

1. **Separation of concerns**
- Route definitions should only wire paths to controllers, not contain business logic.
- Controllers should contain request/response logic, separated from routes.
- Cross-cutting concerns (like authentication) should be centralized in middleware.

2. **Centralized JWT middleware**
- Protected routes should use a reusable authentication middleware.
- The middleware should verify tokens, load users, and attach user data to requests.

3. **React Context for global state management**
- Global state (like authentication) should be provided via React Context.
- Components should access state through custom hooks instead of prop drilling.

4. **Input validation library**
- Request validation should use a dedicated validation library (e.g., `Joi`, `Zod`).
- Validation should be schema-based with reusable rules.
- Error messages should be consistent and well-formatted.

