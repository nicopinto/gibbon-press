/*global module*/
module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');

  var targetDir = 'public/wp-content/themes/' + pkg.name;

  grunt.initConfig({
    pkg: pkg,
    /*requirejs: {
      main: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: targetDir + '/js/main.js',
          baseUrl: targetDir + '/js',
          name: 'main',
          out: targetDir + '/js/compiled.js'
          //optimize: 'none'
        }
      }
    },*/
    compass: {
      main: {
        options: {
          sassDir: 'src/_scss',
          cssDir: targetDir,
          environment: 'production'
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['src/angular/js/app.js', 'src/angular/js/controllers/*.js', 'src/angular/js/directives/*.js', 'src/angular/js/filters/*.js', 'src/angular/js/services/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      lib: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: targetDir + '/js/libs.min.js'
        }]
      },
      angular: {
        files: {
          src: ['<%= jshint.files %>'],
          dest: targetDir + '/js/ng-app.min.js'
        }
      }
    },

    watch: {
      js: {
        files: ['Gruntfile.js', '<%= jshint.files %>', 'src/angular/php/*.php', 'src/angular/partials/*.html'],
        tasks: ['jshint', 'copy:angular']
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
            src: ['**/**.*'],
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
            src: [ 'node_modules/lodash/lodash.js' ],
            dest: targetDir + '/js/lib/lodash.js'
          },
          {
            src: [ 'node_modules/requirejs/require.js' ],
            dest: targetDir + '/js/lib/require/require.js'
          },
          {
            src: [ 'node_modules/handlebars/dist/handlebars.runtime.js' ],
            dest: targetDir + '/js/lib/handlebars.runtime.js'
          }
        ]

      },
      //javascript files for a angular with require architecture
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
            src: [ 'node_modules/requirejs/require.js' ],
            dest: targetDir + '/js/lib/require/require.js'
          },
          {
            src: [ 'node_modules/angular/lib/angular.js' ],
            dest: targetDir + '/js/lib/angular.js'
          }
        ]

      }
    },
    clean: {
      main: [ targetDir ]
    },
    handlebars: {
      options: {
        amd: true,
        namespace: pkg.name + '.Templates',
        processName: function (filePath) {
          return filePath.replace(/^src\/main\/hbs\//, '').replace(/\.hbs$/, '');
        }
      },
      main: {
        files: [
          {
            src: [ 'src/basic/hbs/**/*.hbs' ],
            dest: targetDir + '/js/hbs/Templates.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint']);

  // the default task can be run just by typing "grunt" on the command line
  //grunt.registerTask('default', ['clean', 'compass', 'copy:theme', 'jshint', 'copy:basic', 'handlebars', 'requirejs']);  
  //grunt.registerTask('basic', ['clean', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:basic', 'handlebars']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['clean', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:angular']);
  //grunt.registerTask('angular', ['clean', 'compass', 'copy:assets', 'copy:theme', 'jshint', 'copy:angular', 'uglify']);

};
