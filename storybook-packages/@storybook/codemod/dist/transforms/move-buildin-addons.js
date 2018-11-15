'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = transformer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformer(file, api) {
  var j = api.jscodeshift;

  var createImportDeclaration = function createImportDeclaration(specifiers, source) {
    return j.importDeclaration(specifiers.map(function (s) {
      return j.importSpecifier(j.identifier(s));
    }), j.literal(source));
  };

  var deprecates = {
    action: [['action'], '@storybook/addon-actions'],
    linkTo: [['linkTo'], '@storybook/addon-links']
  };

  var transform = j(file.source).find(j.ImportDeclaration).filter(function (i) {
    return i.value.source.value === '@storybook/react';
  }).forEach(function (i) {
    var importStatement = i.value;
    importStatement.specifiers = importStatement.specifiers.filter(function (specifier) {
      var item = deprecates[specifier.local.name];
      if (item) {
        var _item = (0, _slicedToArray3.default)(item, 2),
            specifiers = _item[0],
            moduleName = _item[1];

        i.insertAfter(createImportDeclaration(specifiers, moduleName));
        return false;
      }
      return specifier;
    });
  });

  return transform.toSource({ quote: 'single' });
}