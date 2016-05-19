module.exports = function(grunt) {
	grunt.initConfig({
		typescript : {
			base : {
				src : ['../main/webapp/assets/ts/*.ts'],
				dest : '../main/webapp/assets/js',
				options : {
					target : 'es6',
					sourceMap : false,
					declaration : false
				}
			}
		},
		bower: {
			install: {
				options: {
					targetDir: "../main/webapp/assets/js/plugins",
					layout: "byComponent"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-bower-installer');

	grunt.registerTask('default', ['typescript', 'bower']);
};