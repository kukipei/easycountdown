Easy Countdown
=========

A small library that has countdown directive

## Installation
(required angular installation -  `npm install angular` )
  `npm install easycountdown`

or 

(required angular installation -  `bower install angular` )
  `bower install easycountdown`
  
### Add files

Add the scripts to your application. Make sure the `easy-count-down.js` file is inserted **after** the `angular.js` library:

```html
<script src="angular.js"></script>
<script src="easy-count-down.js"></script>
<link rel="stylesheet" type="text/css" href="easy-count-down.css">
```

## Usage

with npm package:

    <html ng-app="myApp" >
        <head>
            <title>EasyCountDown Example</title>
            <link rel="stylesheet" type="text/css" href="node_modules/easycountdown/easy-count-down.css">
            <script type="text/javascript" src="node_modules/angular/angular.js"></script>
            <script type="text/javascript" src="node_modules/easycountdown/easy-count-down.js"></script>
    
        </head>
        <body>
            <h1>EasyCountDown Example</h1>
            <div style="width: 300px;padding: 90px;margin: 50px;background: #28292b;">
                <div easy-count-down-directive end-date="2016-10-10 00:00:00"></div>
            </div>
        </body>
    </html>

with bower package:

    <html ng-app="myApp" >
        <head>
            <title>EasyCountDown Example</title>
            <link rel="stylesheet" type="text/css" href="bower_components/easycountdown/easy-count-down.css">
            <script type="text/javascript" src="bower_components/angular/angular.js"></script>
            <script type="text/javascript" src="bower_components/easycountdown/easy-count-down.js"></script>
    
        </head>
        <body>
            <h1>EasyCountDown Example</h1>
            <div style="width: 300px;padding: 90px;margin: 50px;background: #28292b;">
                <div easy-count-down-directive end-date="2016-10-10 00:00:00"></div>
            </div>
        </body>
    </html>

## Screenshots
![Easy CountDown Screenshot](https://raw.githubusercontent.com/ilijastojkovic/easycountdown/master/screenshots/easyCountDown.png "EasyCountDown")

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
