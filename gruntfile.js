module.exports  = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'src/js/*.js',	
					dest: 'js/app.min.js'	
					},
					dev: {
						options: {
							beautify: true,
								mangle: false,
									compress: false,
										preserveComments: 'all'
								},
						src: 'src/js/*.js',	
							dest: 'js/app.min.js'	
						}		
	   				},
	   		sass: {
	   			dev:{
	   				options: {
	   					outputStyle: 'expanded'
	   			},
	   			files: {
	   			'css/style.css' : 'src/scss/application.scss'
	   			}
	   		},
	   		build: {

	   			options : {
	   					outputStyle: ''


	   			},
	   			files: {
	   				'css/style.css' : 'src/scss/application.scss'
	   			}
	   		}
	   		},
	   		watch: {
				js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css:  	{
				files: ['src/scss/**/*.scss'],
				tasks: ['sass:dev']
				}
	   		},
    		cssmin: {
      			options: {
        		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      		},
      		build: {
        		files: {
          		'dist/css/style.min.css': 'src/css/style.css'
        	}
      	}
    }
	});
	///run $grunt --verbose 
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-sass');
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
 	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
	grunt.registerTask('default', ['uglify:build']);
	grunt.registerTask('build', ['uglify:build','sass:build']);
};