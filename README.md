<h1>Simple gulp web-develop template</h1>
<p>Based on <a href="https://github.com/vedees/work-template">Vedees work template</a></p>
<p>Read this in other languages: <a href="https://github.com/K0nfy/simple-work-template/blob/master/README.ru.md">Русский</a></p>
<p align="center">
  <a href="https://github.com/vedees/work-template">
    <img width="70" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>
<p>
The template uses a Sass syntax and project structure with source code in the directory dev/ and production folder build/, that contains ready project with optimized CSS, JS.
</p>

<h2>Gulp tasks</h2>

<ul>
	<li><b>$ gulp</b><br> Default gulp task (sass auto compiling, jshint, browser-sync) for web development;</li>
	<li><b>$ gulp build</b><br> Build project to <b>build/</b> folder (optimize images (imagemin), css (cssnano), js (uglifyjs));</li>
	<li><b>$ gulp cache</b><br> Clear all gulp cache.</li>
</ul>

<h2>Install only files</h2>
<ol>
	<li>Simply download the repository as an archive from GitHub, </br></br><strong>or</strong></br></br>
	In the folder, where you want to copy the files, run the following commands: </br>
	$ git clone --depth=1 --branch=master https://github.com/K0nfy/simple-work-template.git simple-work-template </br>
	$ rm -rf !$/.git</li>
	<li>$ npm i</li>
 	<li>$ <b>gulp</b> - to start a default gulp task</li>
</ol>

<h2>Install as a repository</h2>
<p>If you install this template as a repository, you will encounter a problem on saving the repository of <strong>your</strong> project which was made in this template.</p>
<p>In the folder, where you want to copy the repository, run the following commands:</p>
<ol>
	<li>$ git clone https://github.com/K0nfy/simple-work-template.git</li>
	<li>$ cd simple-work-template</li>
	<li>$ npm i</li>
 	<li>$ <b>gulp</b> - to start a default gulp task</li>
</ol>


<h2>Known bugs</h2>
<ol>
	<li>Creating a new directories during work will cause gulp task "html:dev" 
		triggering on any actions in devFolder and subfolders.</li>
</ol>
