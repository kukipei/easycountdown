Number Formatter
=========

A small library that adds commas to numbers

## Installation

  `npm install easycountdown`

### Add files

Add the scripts to your application. Make sure the `ng-img-crop.js` file is inserted **after** the `angular.js` library:

```html
<script src="angular.js"></script>
<script src="index.js"></script>
<link rel="stylesheet" type="text/css" href="easycounter.css">
```

## Usage

    <html ng-app="myApp" >
        <head>
            <title>EasyCounterExample</title>
            <link rel="stylesheet" type="text/css" href="bower_components/easycountdown/easycounter.css">
            <script type="text/javascript" src="bower_components/angular/angular.js"></script>
            <script type="text/javascript" src="bower_components/easycountdown/index.js"></script>
    
        </head>
        <body>
            <h1>EasyCounterExample</h1>
            <div style="width: 300px;height:300px;padding: 90px;margin: 50px;background: grey;">
                <div easy-counter-directive end-date="2016-10-10 00:00:00"></div>
            </div>
        </body>
    </html>


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
