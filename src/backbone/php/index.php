<?php get_header(); ?>

<?php if (is_home()) { ?>

<header id="mainHeader"></header>

<section id="mainContent"></section>

<?php

} else {
    get_template_part( '404' );
    die();
}

get_footer();