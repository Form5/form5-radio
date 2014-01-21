form5-radio
==========

form5-radio is a simple jQuery plugin to skin radio buttons. Only **2KB** of
minified Javascript, along with your own styles (very basic demo styles are
provided).

[Demo](http://form5.github.io/form5-radio/)

## Getting started

### How to fetch form5-radio?

Install with [Bower](http://bower.io): `bower install form5-radio`

Clone the Github project: `git clone https://github.com/Form5/form5-radio.git`

Or [download zip](https://github.com/Form5/form5-radio/archive/master.zip).

### Then what?

After installation simply load the files along with other styles and scripts.
Remember that this script requires jQuery, meaning jQuery should already be
loaded before this script. We recommend using the latest stable release.

```html
<link rel="stylesheet" href="path/to/form5-radio.css">
...
<script src="path/to/jquery.js"></script>
<script src="path/to/form5-radio.min.js"></script>
<script>
  $(function(){
    $('input[type=radio]').radio();
  });
</script>
```

No need for any special markup, form5-tabs should target inputs directly.
Simply create an input with `type='radio'` and the plugin will generate a new
element like so.

```html
// This
<input name="radiogroup" type="radio" checked="checked">
<input name="radiogroup" type="radio">

// Will become
<radio name="radiogroup" type="radio" checked="checked">
  <input name="radiogroup" type="radio" checked="checked">
</radio>
<radio name="radiogroup" type="radio">
  <input name="radiogroup" type="radio">
</radio>
```

See our [demo](http://form5.github.io/form5-radio) for a live example.

### What about labels?

There is a way to include labels directly with this plugin, or simply by
adding the `data-label='...'` attribute to your `input`, which will allow you
to append the contents in a pseudo element for example.

See our [demo](http://form5.github.io/form5-radio) for a live example.

`## Advanced usage

There are not many ways to configure the scripts functionality, except for
event based callbacks. Here you can see all the options with their default
values, and below you can find more detailed description for each option.

```javascript
$('input[type=radio]').radio({
  toggle: function(){},
  init: function(){},
  debug: false
});
```

`toggle: function ()` **Default: function() {}**

Optional function to be ran each time a radio button is checked.

`init: function ()` **Default: function() {}**

Optional function to be ran at initialization.

`debug: boolean` **Default: false**

If you are having problems and are not sure certain parts of the scripts are
actually working, you can enable this option to receive console.logs with
messages for initialization, toggling and destroying. This will also add a
`debug="true"` attribute to your new element enabling you to add some styles
that might help with debugging.


### After initialization

Sometimes we do things we wish we hadn't, and just wanna take a step back and
rethink the situation. For those instances, we included a helper string that
enables you to simply reverse all changes made by this script.

```javascript
$('input[type=radio]').radio('destroy');
```

After running this, you can initialize some fresh new radio buttons with new
options or whatever your mind can imagine.

### Still not satisfied?

You could go all in and customize the script directly. The original can be
found in `src/form5-radio.js`. To compile a minified/uglified version of
your new script you can build it again by running:

```shell
$ npm install
$ grunt build
```

If you would like to extend the core functionality of this script in a way
that could benefit others, don't hesitate to create a pull request!

## Cress

### Using [Cress](http://github.com/Form5/Cress)

If you are using our awesome CSS framework Cress, you can find a `.scss` file
using the appropriate variables in `src/form5-radio.cress.scss`. That way
you have a some basic radio buttons working directly with your current styles.

## Author
Written by [Benedikt D Valdez](http://github.com/benediktvaldez), developer at
[Form5](http://www.form5.is).

### Contributors
[Árni Reynir Óskarsson](http://github.com/arnireynir), developer at
[Form5](http://www.form5.is).
