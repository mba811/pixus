<div id="holder">
	<div id="mainpage">
		<div id="intro">
			<h1>Pixus</h1>
		</div>
		<p>
			{{^token}}
			<a href="https://www.google.com/accounts/AuthSubRequest?scope=https%3A%2F%2Fpicasaweb.google.com%2Fdata&session=1&secure=0&next=http%3A%2F%2F{{host}}%2Faccess">原始PHP地址</a>
			<a href="oauth/google">OAuth 2.0 Google验证</a>
			{{/token}}
			{{#token}}
			<a href="list">查看相册</a>
			{{/token}}
		</p>
	</div>
</div>
<!-- 
<script src="/js/elf.js"></script>
<script src="/js/esui.js"></script>
<script src="/js/underscore.js"></script>
<script src="/js/Backbone.js"></script>
<script src="/js/site.pack.js"></script> -->
<script>
// site.lib.Main.setup();
</script>
