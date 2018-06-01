module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: 8585
            },
            css: {
                files: ['css/**/*.scss'],
                /*   tasks: ['compass', 'csso'] */
                tasks: ['compass']
            },
            html: {
                files: ['**/*.html']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['uglify']
            }
        },
        /*
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "dist/style.css": "assets/css/main.less"
                }
            }
        },
        */
        compass: {
            dist: {
                options: {
                    sassDir: 'css',
                    cssDir: 'css'
                }
            }
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


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csso');
    /*grunt.loadNpmTasks('grunt-contrib-less');*/
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['compass', 'csso', 'uglify', 'watch']);
};
