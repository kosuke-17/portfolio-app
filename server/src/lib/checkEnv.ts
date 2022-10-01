export const isDev = ['development', '', undefined, null].includes(
  process.env.NODE_ENV,
);
