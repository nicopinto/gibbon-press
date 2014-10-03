<?php

class SinglePageApplicationTheme {

  function enqueueScript() {
    wp_enqueue_script('jquery-custom');
    wp_enqueue_script('js-globals');
    wp_enqueue_script('ng-app');

    // Add the WP_DIRECTORY object directory.path to the script requirejs-config.
    // It allows us to configure the baseUrl of requirejs dynamically.
    //
    // Please refer to http://requirejs.org/docs/api.html#config
    $WP_DIRECTORY = array('path' => get_stylesheet_directory_uri());
    wp_localize_script('js-globals', 'directory', $WP_DIRECTORY);
  }

  function __construct() {
    if (! is_admin()) {
      
      //styles
      wp_enqueue_style( 'global', get_stylesheet_uri());
      
      //DEV
      wp_register_script('jquery-base', get_stylesheet_directory_uri() . '/js/lib/jquery/jquery.min.js', array(), '', false);
      wp_register_script('jquery-custom', get_stylesheet_directory_uri() . '/js/lib/jquery/jquery-migrate-1.2.1.min.js', array('jquery-base'), '', false);

      wp_register_script('js-globals', get_stylesheet_directory_uri() . '/js/globals.js', array(), '', false);
      wp_register_script('ng', get_stylesheet_directory_uri() . '/js/lib/angular.js', array(), '', true);
      wp_register_script('ng-route', get_stylesheet_directory_uri() . '/js/lib/angular-route.js', array(), '', true);

      wp_register_script('mapbox', get_stylesheet_directory_uri() . '/js/lib/mapbox/mapbox.js', array(), '', true);
      wp_register_script('slick', get_stylesheet_directory_uri() . '/js/lib/slick/slick.js', array(), '', true);

      wp_register_script('ng-config', get_stylesheet_directory_uri() . '/js/app.js', array('ng', 'ng-route', 'mapbox', 'slick'), '', true);

      wp_register_script('ng-ctrl', get_stylesheet_directory_uri() . '/js/controllers/home.js', array('ng-config'), '', true);

      wp_register_script('ng-serv', get_stylesheet_directory_uri() . '/js/services/post-service.js', array('ng-ctrl'), '', true);

      //wp_register_script('ng-filt-1', get_stylesheet_directory_uri() . '/js/filters/my-filter-1.js', array('ng-serv-last'), '', true);

      wp_register_script('ng-dire-1', get_stylesheet_directory_uri() . '/js/directives/slick-base.js', array('ng-serv'), '', true);
      wp_register_script('ng-app', get_stylesheet_directory_uri() . '/js/directives/slick-team.js', array('ng-dire-1'), '', true);

      
      //PROD
      //wp_register_script('main', get_stylesheet_directory_uri() . '/js/compiled.js', array('requirejs-config'), '', true);
      
      add_action( 'wp_enqueue_scripts', array($this, 'enqueueScript'));
    }else {
      add_theme_support( 'post-thumbnails' );
      wp_enqueue_style( 'global', get_stylesheet_directory_uri(). '/admin-custom.css');
    }
  }
}

$singlePageApplicationTheme = new SinglePageApplicationTheme();

?>
