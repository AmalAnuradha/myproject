module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/file1.js", "js/file2.js"],
                "dest": "js/app.js"
            }
        },
        connect: {
            server: {
                options:{
                    port:9000,
                    hostname:'localhost',
                    base:['.'],
                    livereload:true,
                    open:true,
                    keepalive:true
                }
            }
        },
        watch: {
            options: {
                livereload:true,
                open:true,
                keepalive:true
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express');
    // grunt.loadNpmTasks('server',['grunt-express']);
    

    // Task definitions
    grunt.registerTask('default', ['concat','watch']);
    grunt.registerTask('server', ['connect']);
};