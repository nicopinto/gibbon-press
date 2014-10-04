<?php

class SinglePageApplicationTheme {

  function enqueueScript() {

    // Add the WP_DIRECTORY object directory.path to the script requirejs-config.
    // It allows us to configure the baseUrl of requirejs dynamically.
    //
    // Please refer to http://requirejs.org/docs/api.html#config
    $WP_DIRECTORY = array( 'path' => get_template_directory_uri() . '/js' );
    wp_localize_script( 'main-dev', 'directory', $WP_DIRECTORY );
    
    wp_enqueue_script('main-dev');
    //wp_enqueue_script('main-prod');
  }

  function __construct() {
    if (! is_admin()) {
      
      //styles
      wp_enqueue_style( 'global', get_stylesheet_uri());
      
      //DEV
      wp_register_script( 'require-js', get_template_directory_uri() . '/js/libs/require.js' );
      wp_register_script( 'main-dev', get_template_directory_uri() . '/js/main.js', array( 'require-js' ), '', true);
      
      //PROD
      wp_register_script('main-prod', get_template_directory_uri() . '/js/compiled.js', array(), '', true);
      
      add_action( 'wp_enqueue_scripts', array($this, 'enqueueScript'));
    }else {
      add_theme_support( 'post-thumbnails' );
      wp_enqueue_style( 'global', get_stylesheet_directory_uri(). '/admin-custom.css');
    }
  }
}

$singlePageApplicationTheme = new SinglePageApplicationTheme();

?>
