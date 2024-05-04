/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
// preload.js
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('myIframe');
    function resizeIframe() {
        const { innerWidth, innerHeight } = window;
        iframe.style.width = `${innerWidth}px`;
        iframe.style.height = `${innerHeight}px`;
    }
    window.addEventListener('resize', resizeIframe);
    resizeIframe();
});
