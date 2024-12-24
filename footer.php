	</main> <?php //.site-content ?>

	<footer class="site-footer content-grid">
		<?php get_template_part('components/dividers/top-divider'); ?>

		<div class="site-footer__wrapper">

			<div class="site-footer__meta | copy-4">
				<p>
					&copy; Metropoltica <?php echo date('Y'); ?>. All rights reserved.<br/>
					<em>Bring back the SuperSonics.</em>
				</p>
			</div>

			<div class="site-footer__figures">
				<div class="site-footer__cmyk">
					<?php get_template_part('src/svg/cmyk'); ?>
				</div>

				<img class="site-footer__upc-code" src="<?php echo get_template_directory_uri(); ?>/src/images/upc-code.jpg" alt="UPC Code" />
			</div>			
		</div>

		<?php get_template_part('components/dividers/bottom-divider'); ?>
	</footer>

<?php wp_footer(); ?>

</div> <?php //.site ?>

</body>
</html>