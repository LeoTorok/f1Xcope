module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            dev: {
                src: ['./public/javascripts/**/*.ts'],
                watch: './public/javascripts',
                reference: "./public/javascripts/references.ts",
                options:
                {
                    target: 'es3',
                    module: 'amd',
                    sourcemap: true,
                    declaration: false,
                    comments: false
                }
            },
            server: {
                src: ['./server/**/*.ts'],
                watch: './server',
                reference: "./server/all_references.ts",
                out: './server/out',
                options:
                {
                    module: 'commonjs',
                    target: 'es3',
                    sourcemap: true,
                    declaration: false,
                    comments: false
                }
            }
        }
    });

    grunt.registerTask('default', ['ts:dev']);

};