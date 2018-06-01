module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: 8585
            },
            css: {
                files: ['css/**/*.css']

            },
            html: {
                files: ['**/*.html']
            },
            js: {
                files: ['js/**/*.js']
            },

        },
        csso: {
            compress: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/main.min.js': ['js/main.js']
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['csso', 'uglify', 'watch']);



    /*grunt.registerTask('default', ['watch']); */
};
