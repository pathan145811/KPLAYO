export const authConfig = {
  session: {
    strategy: "database",
    maxAgeDays: 30,
  },

  providers: {
    email: true,
    google: true,
  },

  routes: {
    login: "/login",
    signup: "/signup",
    forgotPassword: "/forgot-password",
  },
} as const;
