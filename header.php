<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
	<script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>

</head>

<body>
<?php wp_body_open(); ?>

<div id="page" class="site">

	<header class="site-header">
		<div class="site-header__left">
			<?php get_template_part('components/site-header/logo'); ?>

			<?php // get_template_part('components/site-header/nav-desktop'); ?>
		</div>

		<div class="site-header__right">
			<?php get_template_part('components/site-header/subscribe-cta'); ?>

			<?php get_template_part('components/site-header/hamburger'); ?>
		</div>
	</header>
    
    <?php get_template_part('components/site-header/nav-mobile'); ?>


    <main <?php body_class('site-content'); ?>>
