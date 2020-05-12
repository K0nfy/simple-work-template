<h1>Простой шаблон gulp для веб-разработки</h1>
<p>Основан на <a href="https://github.com/vedees/work-template">Vedees work template</a></p>
<p>На других языках: <a href="https://github.com/K0nfy/simple-work-template/blob/master/README.md">English</a></p>
<p align="center">
  <a href="https://github.com/vedees/work-template">
    <img width="70" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>
<p>
Шаблон использует Sass синтаксис и структуру проекта с исходными материалами в папке dev/, и готовыми материалами в папке build/, которая содержит готовый проект с оптимизированным CSS и JS кодом.
</p>

<h2>Gulp задачи</h2>

<ul>
	<li><b>$ gulp</b><br> Задача по-умолчанию 
		(автоматическая компиляция sass, jshint, browser-sync) для веб-разработки;</li>
	<li><b>$ gulp build</b><br> Сборка проекта 
		в папку <b>build/</b> (оптимизация изображений (imagemin), css (cssnano), js (uglifyjs));</li>
	<li><b>$ gulp cache</b><br> Очистка всего кэша gulp.</li>
</ul>

<h2>Установка в виде файлов</h2>
<ol>
	<li>Скачать архив с шаблоном через интерфейс GitHub, </br></br><strong>или</strong></br></br>
	В папке, в которую вы хотите скопировать файлы, выполните следующие bash команды: </br>
	$ git clone --depth=1 --branch=master https://github.com/K0nfy/simple-work-template.git simple-work-template </br>
	$ rm -rf !$/.git</li>
	<li>$ npm i</li>
 	<li>$ <b>gulp</b> - для запуска стандартной задачи gulp</li>
</ol>

<h2>Установка в виде репозитория</h2>
<p>Если устанавливать этот шаблон как репозиторий, вы столкнётесь с проблемой при сохранении 
	репозитория <strong>вашего</strong> проекта, сделанного в этом шаблоне.</p>
<p>В папке, в которую вы хотите установить репозиторий, выполните следующие команды:</p>
<ol>
	<li>$ git clone https://github.com/K0nfy/simple-work-template.git</li>
	<li>$ cd simple-work-template</li>
	<li>$ npm i</li>
 	<li>$ <b>gulp</b> - для запуска стандартной задачи gulp</li>
</ol>

<h2>Известные проблемы</h2>
<ol>
	<li>Создание новых папок во время работы влечёт за собой 
		срабатывание задачи "html:dev" на любые действия в папке devFolder и её подпапках.</li>
</ol>
