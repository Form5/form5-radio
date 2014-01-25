
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/form5-radio.css': 'src/form5-radio.scss'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*!' +
          '\n  <%= pkg.name %> v<%= pkg.version %>' +
          '\n  Written by <%= pkg.author.name %>' +
          '\n  <%= pkg.author.url %>' +
          '\n  <%= pkg.author.email %>' +
          '\n  License: <%= pkg.license %>' +
          '\n*/'
      },
      combine: {
        files: {
          'dist/form5-radio.min.css': 'dist/form5-radio.css'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*!' +
          '\n  <%= pkg.name %> v<%= pkg.version %>' +
          '\n  Written by <%= pkg.author.name %>' +
          '\n  <%= pkg.author.url %>' +
          '\n  <%= pkg.author.email %>' +
          '\n  License: <%= pkg.license %>' +
          '\n*/\n'
      },
      dist: {
        files: {
          'dist/form5-radio.min.js': 'src/form5-radio.js'
        }
      }
    },
    jshint: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.js'],
            dest: 'dist/'
          }
        ],
        options: {
          jshintrc: '.jshintrc' // Read hinting options from .jshintrc
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  return grunt.registerTask('build', ['sass', 'cssmin', 'jshint', 'uglify']);
};
