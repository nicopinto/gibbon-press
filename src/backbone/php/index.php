<?php get_header(); ?>

<?php if (is_home()) { ?>

<div id="mainContainer"></div>

<?php

get_footer();

} else {
    get_template_part( '404' );
    die();
}