/*global module*/
module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');

  var targetDir = 'public/wp-content/themes/' + pkg.name;

  grunt.initConfig({
    pkg: pkg,
    requirejs: {
      main: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: targetDir + '/js/' + pkg.main,
          baseUrl: targetDir + '/js',
          include: ['/libs/require.js'],
          name: 'main',
          out: targetDir + '/js/compiled.js'
          //optimize: 'none'
        }
      }
    },
    compass: {
      main: {
        options: {
          sassDir: 'src/_scss',
          cssDir: targetDir,
          environment: 'development'
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/backbone/js/**/*.js', '!src/backbone/js/libs/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          _: true,
          Backbone: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      js: {
        files: ['<%= jshint.files %>', 'src/backbone/php/*.php', 'src/backbone/partials/**/*.html'],
        tasks: ['copy:backbone']
      },
      php: {
        files: ['src/_php/*.php'],
        tasks: ['copy:theme', 'copy:backbone']
      },
      scss: {
        files: ['src/_scss/*.scss', 'src/_scss/**/*.scss'],
        tasks: ['compass' ]
      }
    },
    copy: {
      //theme assets
      assets: {
        files: [
          {
            expand: true,
            cwd: 'src/_assets/fonts/',
            src: ['**.*'],
            dest: targetDir + '/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'src/_assets/img/',
            src: ['**.*'],
            dest: targetDir + '/img/',
            filter: 'isFile'
          }
        ]
      },
      //files for wordpress theme
      theme: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: 'src/_php/',
            src: ['**.php'],
            dest: targetDir + '/',
            filter: 'isFile'
          }
        ]
      },
      //javascript files for a basic require architecture
      basic: {

        files: [
          //custom theme php files for basic wordpress
          {
            expand: true,
            cwd: 'src/basic/php/',
            src: ['**/*.php'],
            dest: targetDir + '/'
          },
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src/basic/js/',
            src: ['**/*.js'],
            dest: targetDir + '/js/'
          },

          //libs
          {
            src: [ 'node_modules/requirejs/require.js' ],
            dest: targetDir + '/js/libs/require.js'
          },
          {
            cwd: 'node_modules/jquery/dist/',
            src: [ 'jquery.*' ],
            dest: targetDir + '/js/libs/'
          }
        ]

      },
      //javascript files for a angular with require architecture
      backbone: {

        files: [
          //custom theme php files for angular
          {
            expand: true,
            cwd: 'src/backbone/php/',
            src: ['**/*.php'],
            dest: targetDir + '/'
          },

          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src/backbone/js/',
            src: ['**/*.js'],
            dest: targetDir + '/js/'
          },

          //html partial templates
          {
            expand: true,
            cwd: 'src/backbone/partials/',
            src: ['**/*.html'],
            dest: targetDir + '/js/templates/'
          },

          //libs
          {
            src: [ 'node_modules/requirejs/require.js' ],
            dest: targetDir + '/js/libs/require.js'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist/',
            src: [ '*.js', '*.map' ],
            dest: targetDir + '/js/libs/jquery/'
          },
          {
            expand: true,
            cwd: 'node_modules/backbone/',
            src: [ 'backbone*.js', '*.map' ],
            dest: targetDir + '/js/libs/backbone/'
          },
          {
            expand: true,
            cwd: 'node_modules/underscore/',
            src: [ 'underscore*.js' ],
            dest: targetDir + '/js/libs/underscore/'
          }
        ]

      }
    },
    clean: {
      main: [ targetDir ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint']);

  // the default task can be run just by typing "grunt" on the command line
  //grunt.registerTask('basic', ['clean', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:basic', 'requirejs']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['clean', 'compass', 'copy:assets', 'copy:theme', 'copy:backbone']);
  grunt.registerTask('backbone', ['clean', 'compass', 'copy:assets', 'copy:theme', 'copy:backbone']);
  grunt.registerTask('build', ['clean', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:backbone', 'requirejs']);

};
