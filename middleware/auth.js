import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies

    if (token.value) {
        // Token exists; consider verifying its validity before updating the state
        authenticated.value = true; // Update the state to authenticated
    }

    // If token exists and the user is navigating to the login page, redirect to the homepage
    if (token.value && to?.name === 'auth-login') {
        return navigateTo('/'); // Redirect to homepage
    }

    // If token doesn't exist and the user is not already on the login page, redirect to login
    if (!token.value && to?.name !== 'auth-login') {
        abortNavigation(); // Stop the current navigation
        return navigateTo('/login'); // Redirect to login
    }
});
