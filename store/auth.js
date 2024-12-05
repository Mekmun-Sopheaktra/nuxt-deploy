import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser(payload) {
      const { username, password } = payload;
      this.loading = true;
      try {
        const data = await $fetch('https://dummyjson.com/auth/login', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
          },
        });

        if (data) {
          const token = useCookie('token'); // Nuxt 3 cookie handling
          token.value = data.accessToken; // set token to cookie
          this.authenticated = true; // set authenticated state to true
        }
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null; // clear the token cookie
    },
    hydrate() {
      const token = useCookie('token');
      this.authenticated = Boolean(token.value); // set authenticated to true if token exists
    },
  },
});
