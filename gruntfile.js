module.exports  = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		build: {
		src: 'src/js/*.js',	
		dest: 'js/app.min.js'	
		}
	   }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify']);
};