CKEDITOR.editorConfig = function( config ) {
	
	config.extraPlugins = 'showprotected';
	
	// Mark Freemarker directives as protected
	config.protectedSource.push( /<@[\s\S]*?\/>/g );
	config.protectedSource.push( /<#[\s\S]*?>/g );
	config.protectedSource.push( /\[@[\s\S]*?\/]/g );
	config.protectedSource.push( /\[#[\s\S]*?]/g );
	config.protectedSource.push( /\[\/#[\s\S]*?]/g );
	config.protectedSource.push( /\${[\s\S]*?}/g );
	
	// Mark PHP directives as protected
	config.protectedSource.push(/<\?[\s\S]*?\?>/g);
};
