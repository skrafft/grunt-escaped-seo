module.exports = function(grunt) {

  grunt.initConfig({
    'escaped-seo': {
        mpd: {
            options: {
                domain: 'https://www.monpanierdrive.fr',
                urls: ['/'],
                delay: 1500
            },
        },
    },
  });

  grunt.loadNpmTasks('grunt-escaped-seo');

  grunt.registerTask('default', ['escaped-seo']);

};
