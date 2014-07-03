<?php get_header(); ?>

<?php if (is_home()) { ?>

<h1>REDBEE</h1>

<?php
	if (have_posts()):

		while (have_posts()): the_post();

			get_template_part( 'content-home', get_post_format() );

		endwhile;

	endif;
?>

<?php
} elseif (is_category()) {
    get_header('navigation');
?>  

<h1>REDBEE: Category page</h1>

<?php
	if ( have_posts() ) :

		while ( have_posts() ) : the_post();

			/*
			 * Include the post format-specific template for the content. If you want to
			 * use this in a child theme, then include a file called called content-___.php
			 * (where ___ is the post format) and that will be used instead.
			 */
			get_template_part( 'content-category', get_post_format() );

		endwhile;

	else :
		// If no content, include the "No posts found" template.
		get_template_part( 'content', 'none' );

	endif;
?>

<?php

} elseif (is_404()) {
    echo '404';
} else {
    echo 'unknown';
}

get_footer();