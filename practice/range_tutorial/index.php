<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Range tutorial</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="block1">
		<p> Вернхній лівий кут
			<input type="range" id="rtl" min="0" max="100" value="0">
			<input type="text" id="ttl" value="0">
		</p>
	</div>
	<div class="block1">
		<p> Вернхній правий кут
			<input type="range" id="rtr" min="0" max="100" value="0">
			<input type="text" id="ttr" value="0">
		</p>
	</div>
	<div class="block1">
		<p> Нижній правий кут
			<input type="range" id="rbr" min="0" max="100" value="0">
			<input type="text" id="tbr" value="0">
		</p>
	</div>
	<div class="block1">
		<p> Нижній лівий кут
			<input type="range" id="rbl" min="0" max="100" value="0">
			<input type="text" id="tbl" value="0">
		</p>
	</div>
	
	<div id="block"></div>
	<script src="script.js"></script>
</body>
</html>