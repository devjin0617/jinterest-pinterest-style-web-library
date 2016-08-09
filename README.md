jinterest-pinterest-style-web-library
=====================================

[![Join the chat at https://gitter.im/devjin0617/jinterest-pinterest-style-web-library](https://badges.gitter.im/devjin0617/jinterest-pinterest-style-web-library.svg)](https://gitter.im/devjin0617/jinterest-pinterest-style-web-library?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

jQuery + Bootstrap Pinterest Style Web Library

# How to Use

Use? Very Easy!

1. `jquery`, `bootstrap` add CSS, Js Library. and `jinterest.js` add!

2. in `<div class="jt-body">`

3. data set

4. jinterest init!

```
  <html>
    <head>
    <title>jinterest sample</title>
    
    <!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

		<!-- Jinterest CSS -->
		<link rel="stylesheet" href="css/jinterest.css">
    </head>
    <body>
      <div class="jt-body"></div>
      
      
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

		<!-- Jinterest JavaScript -->
		<script src="js/jinterest.js"></script>
		
		<script>
		  var listObj = [{
					id : '1',
					img_url : 'img/img_0.png',
					title : 'helloworld',
					content : 'hello content',
					date : '2014.05.01',
					like_count : '99',
					reply_count : '10'
				}, {
					id : '2',
					img_url : 'img/img_1.png',
					title : 'helloworld',
					content : 'hello content',
					date : '2014.06.01',
					like_count : '99',
					reply_count : '10'
				}];
				
			$(document).ready(function() {
			
			    	/* jinterest init */
				Jinterest(listObj);
			});
				
				
		</script>
    <body>
  </html>
```

# Sample

![jinterest](http://i.imgur.com/0GoNGiN.png)

