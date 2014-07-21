<?php
$images = get_children(array(
    'post_mime_type' => 'image',
    'numberposts'    => 1,
    'post_parent'    => $post->ID,
    'post_type'      => 'attachment'
));
$thumb = null;
$gallery = array();
foreach ($images as $image) {
    if (!$thumb) {
        $thumb = wp_get_attachment_image_src($image->ID, 'large');
        $thumb = $thumb[0];
    }
    $full = wp_get_attachment_image_src($image->ID, 'full');
    $gallery[] = $full[0];
}
?>
<article id="home-<?php echo $post->ID ?>">
    <a href="#">
        <img src="<?php echo $thumb ?>" alt="" />
        <div class="rollover">
            <h2><?php the_title(); ?></h2>
            <ul class="tags">
				<?php foreach (get_tags() as $tag) : ?>
                <li><?php echo $tag->name; ?></li>
				<?php endforeach; ?>
            </ul>
        </div>
    </a>

    <div class="content">
        <div class="text"><?php the_content(); ?></div>
        <ul class="gallery">
			<?php foreach ($gallery as $imageURL) : ?>
            <li><img src="<?php echo $imageURL ?>" alt="" /></li>
			<?php endforeach; ?>
        </ul>
    </div>
</article>