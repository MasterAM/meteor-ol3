module.exports = function(grunt) {
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json', 'package.js'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: true,
        prereleaseName: false,
        regExp: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');
  grunt.registerTask('default', 'release');

  grunt.registerTask('release', 'Release a new version', function () {
    var files = ['ol3.fetch.json', 'README.md'];
    var newVer = grunt.option('ver');
    var oldVer = grunt.file.readJSON('package.json').version;

    if (!newVer) {
      grunt.log("please specify the --ver=<version> option");
      return false;
    }

    //update the version in the download links and readme file
    grunt.log.writeln("About to release version %s (up from %s)", newVer, oldVer);
    files.forEach(function (fileName) {
      var content = grunt.file.read(fileName);
      grunt.file.write(fileName, content.split(oldVer).join(newVer));
    });

    grunt.option('setversion', newVer);
    grunt.task.run('bump');
  });

};
