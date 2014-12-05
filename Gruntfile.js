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

    uglify: {

      angular_dev: {
        options: {
          beautify: {
            width: 80,
            beautify: true
          }
        },
        files: [{
          expand: true,
          cwd: 'src/angular/js/',
          src: ['**/*.js', '!**/*.min.js'],
          dest: targetDir + '/js/temp'
        }]
      },
      angular_prod: {
        options: {
          mangle: false,
          compress: {
            drop_console: true
          }
        },
        files: [{
          expand: true,
          cwd: 'src/angular/js/',
          src: ['**/*.js', '!**/*.min.js'],
          dest: targetDir + '/js/temp'
        }]
      }
    },

    concat: {
      angular_dev: {
        src: [targetDir + '/js/temp/app.js', targetDir + '/js/temp/lib/**/*.js', targetDir + '/js/temp/controllers/**/*.js', targetDir + '/js/temp/directives/**/*.js', targetDir + '/js/temp/filters/**/*.js', targetDir + '/js/temp/services/**/*.js', targetDir + '/js/temp/app.js'],
        dest: targetDir + '/js/ng-app.js'
      },
      angular_prod: {
        src: [targetDir + '/js/temp/app.js', targetDir + '/js/temp/lib/**/*.js', targetDir + '/js/temp/controllers/**/*.js', targetDir + '/js/temp/directives/**/*.js', targetDir + '/js/temp/filters/**/*.js', targetDir + '/js/temp/services/**/*.js', targetDir + '/js/temp/app.js'],
        dest: targetDir + '/js/ng-app.min.js'
      }
    },

    watch: {
      backbonejs: {
        files: ['<%= jshint.files %>', 'src/backbone/php/*.php', 'src/backbone/partials/**/*.html'],
        tasks: ['copy:backbone']
      },
      angularjs: {
        files: ['src/angular/js/**/*.js', '!src/angular/js/lib/**/*.js', 'src/angular/php/*.php', 'src/angular/partials/**/*.html'],
        tasks: ['copy:angular', 'uglify']
      },
      php: {
        files: ['src/_php/*.php'],
        tasks: ['copy:theme']
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
            cwd: 'src/_assets/',
            src: ['**/*.*'],
            dest: targetDir
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

      //javascript files for a basic native javascript require architecture
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
            src: [ 'bower_components/requirejs/require.js' ],
            dest: targetDir + '/js/libs/require.js'
          },
          {
            cwd: 'bower_components/jquery/dist/',
            src: [ 'jquery.*' ],
            dest: targetDir + '/js/libs/'
          }
        ]
      },

      //javascript files for a angular app with require architecture
      angular: {

        files: [
          //custom theme php files for angular
          {
            expand: true,
            cwd: 'src/angular/php/',
            src: ['**/*.php'],
            dest: targetDir + '/'
          },

          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src/angular/js/',
            src: ['**/*.js'],
            dest: targetDir + '/js/'
          },

          //html partial templates
          {
            expand: true,
            cwd: 'src/angular/partials/',
            src: ['**/*.html'],
            dest: targetDir + '/js/partials/'
          },

          //libs
          {
            src: [ 'bower_components/requirejs/require.js' ],
            dest: targetDir + '/js/lib/require/require.js'
          },
          {
            src: [ 'bower_components/angular/angular.js' ],
            dest: targetDir + '/js/lib/angular.js'
          }
        ]
      },

      //javascript files for a backbone app with require architecture
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
            src: [ 'bower_components/requirejs/require.js' ],
            dest: targetDir + '/js/libs/require.js'
          },
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: [ '*.js', '*.map' ],
            dest: targetDir + '/js/libs/jquery/'
          },
          {
            expand: true,
            cwd: 'bower_components/backbone/',
            src: [ 'backbone*.js', '*.map' ],
            dest: targetDir + '/js/libs/backbone/'
          },
          {
            expand: true,
            cwd: 'bower_components/underscore/',
            src: [ 'underscore*.js' ],
            dest: targetDir + '/js/libs/underscore/'
          }
        ]
      }
    },

    clean: {
      temp: [ targetDir + '/js/temp' ],
      main: [ targetDir ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('basic', ['clean:main', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:basic', 'requirejs']);
  grunt.registerTask('backbone', ['clean:main', 'compass', 'copy:assets', 'copy:theme', 'copy:backbone']);
  grunt.registerTask('angular', ['clean:main', 'compass', 'copy:assets', 'copy:theme', 'uglify:angular_dev', 'concat:angular_dev', 'clean:temp']);
  grunt.registerTask('angular:prod', ['clean:main', 'compass', 'copy:assets', 'copy:theme', 'uglify:angular_prod', 'concat:angular_prod', 'clean:temp']);

  grunt.registerTask('build', ['clean:main', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:backbone', 'requirejs']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['backbone']);

};
