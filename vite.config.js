const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
    base: "/",
    root: "src",
    plugins: [react()],
    build: {
        outDir: "../dist"
    },
});