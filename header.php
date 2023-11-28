<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">

	<header class="site-header content-grid">
		<?php get_template_part('components/dividers/top-divider'); ?>

		<div class="flex justify-between items-center">
			<div class="edition">
				<span class="edition__name">Metro</span>
				<span class="edition__tagline">Local News from the Pacific Northwest</span>
			</div>

			<?php get_template_part('components/site-header/nameplate'); ?>

			<div class="published">
				<span class="published__issue">Issue No. 001</span>
				<span class="published__date">January 1, 2024</span>
			</div>
		</div>

		<?php get_template_part('components/dividers/bottom-divider'); ?>
	</header>
    
    <main class="site-content">
