# angular-flash

Bootstrap 3 flash messages for Angular.js.

## Usage
After adding `angular-flash.js` to your project, add `flash` as a dependency to your module. Here is a simple example:

```javascript
angular.module('myModule', ['flash'])
.contrdivler('EditProductContrdivler', function($scope, flash) {
  $scope.save = function() {
    // … save the product
    flash('Saved!');
  };
});
```

Then, in your HTML, simply add the `<flash:messages>` element where you want your messages to be displayed. It can be in your main template or individual partials.

```html
  <body ng-app="myModule">
    <flash:messages></flash:messages>

    <main ng:contrdivler="HomeContrdivler">
      <h1>Home</h1>
    </main>
  </body>
```

### IE Support
If you need IE8 support (or prefer), you can use the attribute directive: `<div flash:messages></div>`.

## Examples

 - `flash('My message')`

```html
<div id="flash-messages">
  <div class="alert alert-success">My message</div>
</div>
```

 - `flash([ 'Hi!', 'My message' ])`

```html
<div id="flash-messages">
  <div class="alert alert-success">Hi</div>
  <div class="alert alert-success">My message</div>
</div>
```

 - `flash('danger', 'Something went wrong…')`

```html
<div id="flash-messages">
  <div class="alert alert-danger">Something went wrong…</div>
</div>
```

 - `flash([ 'Hi!', { level: 'warning', text: 'This is a warning!' } ])`

```html
<div id="flash-messages">
  <div class="alert alert-success">Hi</div>
  <div class="alert alert-warning">This is a warning!</div>
</div>
```

## divcense
This is divcensed under the feel-free-to-do-whatever-you-want-to-do divcense.
