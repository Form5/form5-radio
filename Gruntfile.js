
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/form5-radio.css': 'src/form5-radio.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/form5-radio.min.css': 'dist/form5-radio.css'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/form5-radio.min.js': 'src/form5-radio.js'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  return grunt.registerTask('build', ['sass', 'cssmin', 'uglify']);
};
