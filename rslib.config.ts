import { defineConfig } from '@rslib/core';

export default defineConfig({
    lib: [
        {
            format: 'esm',
            syntax: 'es6',
            dts: true,
        },
    ],
    output: {
        minify: {
            jsOptions: {
                minimizerOptions: {
                    mangle: true,
                    minify: true,
                },
            },
        },
    }
});
