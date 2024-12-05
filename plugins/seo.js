export default defineNuxtPlugin(() => {
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Rumdul` : 'Rumdul';
        }
    });
});
