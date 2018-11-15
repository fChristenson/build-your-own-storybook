'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button').add('simple usage', (0, _addonInfo.withInfo)('This is the basic usage with the button with providing a label to show the text.')(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      'Click the "?" mark at top-right to view the info.'
    )
  );
})); /* eslint-disable */


(0, _react3.storiesOf)('Button').add('simple usage (inline info)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  inline: true
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (disable source)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  source: false,
  inline: true
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (no header)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  header: false,
  inline: true
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (no prop tables)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  propTables: false,
  inline: true
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (custom propTables)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n      Since, the story source code is wrapped inside a div, info addon can\'t figure out propTypes on it\'s own.\n      So, we need to give relevant React component classes manually using `propTypes` option as shown below:\n      ~~~js\n      storiesOf(\'Button\')\n        .addWithInfo(\n          \'simple usage (custom propTables)\',\n          <info>,\n          <storyFn>,\n          { inline: true, propTables: [Button]}\n        );\n      ~~~\n    ',

  inline: true,
  propTables: [_Button2.default]
})(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') }),
    _react2.default.createElement('br', null)
  );
}));

(0, _react3.storiesOf)('Button').add('simple usage (JSX description)', (0, _addonInfo.withInfo)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h2',
    null,
    'This is a JSX info section'
  ),
  _react2.default.createElement(
    'p',
    null,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare massa rutrum metus commodo, a mattis velit dignissim. Fusce vestibulum turpis sed massa egestas pharetra. Sed at libero nulla.'
  ),
  _react2.default.createElement(
    'p',
    null,
    _react2.default.createElement(
      'a',
      { href: 'https://github.com/storybooks/react-storybook-addon-info' },
      'This is a link'
    )
  ),
  _react2.default.createElement(
    'p',
    null,
    _react2.default.createElement('img', { src: 'http://placehold.it/350x150' })
  )
))(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      'Click the "?" mark at top-right to view the info.'
    )
  );
}));

(0, _react3.storiesOf)('Button').add('simple usage (inline JSX description)', (0, _addonInfo.withInfo)({
  text: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'This is a JSX info section'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare massa rutrum metus commodo, a mattis velit dignissim. Fusce vestibulum turpis sed massa egestas pharetra. Sed at libero nulla.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/storybooks/react-storybook-addon-info' },
        'This is a link'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'http://placehold.it/350x150' })
    )
  ),

  inline: true
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (maxPropsInLine === 1)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  inline: true,
  maxPropsIntoLine: 1
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('Button').add('simple usage (maxPropObjectKeys === 5)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  inline: true,
  maxPropObjectKeys: 5
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', object: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } });
}));

(0, _react3.storiesOf)('Button').add('simple usage (maxPropArrayLength === 8)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  inline: true,
  maxPropArrayLength: 8
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
}));

(0, _react3.storiesOf)('Button').add('simple usage (maxPropStringLength === 10)', (0, _addonInfo.withInfo)({
  text: '\n      This is the basic usage with the button with providing a label to show the text.\n    ',

  inline: true,
  maxPropStringLength: 5
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', string: '1 2 3 4 5 6 7 8' });
}));

(0, _react3.storiesOf)('Button').add('with custom styles', (0, _addonInfo.withInfo)({
  text: '\n      This is an example of how to customize the styles of the info components.\n      For the full styles available, see `./src/components/Story.js`\n    ',

  inline: true,

  styles: function styles(stylesheet) {
    stylesheet.infoPage = {
      backgroundColor: '#ccc'
    };
    return stylesheet;
  }
})(function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}));

(0, _react3.storiesOf)('shared/ProgressBar', module).addDecorator(withKnobs).add('default style', (0, _addonInfo.withInfo)('default style')(function () {
  return _react2.default.createElement(ProgressBar, { progress: number('progress', 25),
    delay: number('delay', 500)
  });
}));