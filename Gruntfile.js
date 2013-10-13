module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      // Следим за файлами, выполняем таски при каждом изменении
      options: {
        // При вызове в терминале `grunt watch`
        // сначала выполнятся все таски и потом начнётся слежение
        atBegin: true
      },
      js: {
        // Все файлы в папке www/js (включая подпапки)
        files: 'scripts/**/*.js',
        tasks: ['concat:js']
      },
      css: {
        // Тоже самое с www/css
        files: 'styles/**/*.css',
        tasks: ['concat:css', 'autoprefixer']
      }
    },
    concat: {
      // Склеить
      js: {
        files: {
          // Все файлы разом, подключаются в алфавитном порядке
          'www/js/all.js': 'scripts/**/*.js'
        }
      },
      css: {
        files: {
          // Можно указывать конкретный порядок
          'www/css/all.css': [
            // 'styles/normalize.css',
            'styles/layout.css',
            'styles/typo.css',
            'styles/gradient.css'
          ]
        }
      }
    },
    autoprefixer: {
      // Расставить необходимые префиксы в ЦСС
      main: {
        files: {
          'www/css/all.css': 'www/css/all.css'
        }
      }
    },
    uglify: {
      // Сжать скрипты
      main: {
        files: {
          'www/js/all.js': 'www/js/all.js'
        }
      }
    },
    csso: {
      // Cжать стили
      // Ссылаемся на autoprefixer, чтобы не повторяться
      main: '<%= autoprefixer.main %>'
    }
  });

  // Загружаем установленные задачи
  // (офтопик: будь я разработчиком Гранта, выкинул бы этот блок)
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csso');

  // Задача по умолчанию (`grunt` в терминале)
  grunt.registerTask('default', ['concat', 'autoprefixer', 'uglify', 'csso']);

};
