export const publicRoutes = ['/'];

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
];

/**
 * The prefix of all API Authentication routes.
 * Routes that start with this prefix are used for API purposes.
 */
export const apiRoutePrefix: string = '/api/auth';

/**
 * Default redirect path after login.
 * This path will be used if no redirect path is provided
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard';
