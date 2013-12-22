module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mocha_phantomjs: {
            all: ['tests/*.html']
        }
    });

    grunt.registerTask('test', ['mocha_phantomjs']);
};
