<?php get_header(); ?>

<?php if (is_home()) { ?>

<div class="view-container" ng-view>

loading...

</div>

<?php

} elseif (is_404()) {
    echo '404';
} else {
    echo 'unknown';
}

get_footer();