'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
(0, _react3.storiesOf)('Button').addWithInfo('simple usage', 'This is the basic usage with the button with providing a label to show the text.', function () {
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
});

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (inline info)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { inline: true });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (disable source)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { source: false, inline: true });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (no header)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { header: false, inline: true });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (no prop tables)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { propTables: false, inline: true });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (custom propTables)', '\n      This is the basic usage with the button with providing a label to show the text.\n      Since, the story source code is wrapped inside a div, info addon can\'t figure out propTypes on it\'s own.\n      So, we need to give relevant React component classes manually using `propTypes` option as shown below:\n      ~~~js\n      storiesOf(\'Button\')\n        .addWithInfo(\n          \'simple usage (custom propTables)\',\n          <info>,\n          <storyFn>,\n          { inline: true, propTables: [Button]}\n        );\n      ~~~\n    ', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') }),
    _react2.default.createElement('br', null)
  );
}, { inline: true, propTables: [_Button2.default] });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (JSX description)', _react2.default.createElement(
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
), function () {
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
});

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (inline JSX description)', _react2.default.createElement(
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
), function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { inline: true });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (maxPropsInLine === 1)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, { inline: true, maxPropsIntoLine: 1 });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (maxPropObjectKeys === 5)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', object: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } });
}, { inline: true, maxPropObjectKeys: 5 });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (maxPropArrayLength === 8)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
}, { inline: true, maxPropArrayLength: 8 });

(0, _react3.storiesOf)('Button').addWithInfo('simple usage (maxPropStringLength === 10)', '\n      This is the basic usage with the button with providing a label to show the text.\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', string: '1 2 3 4 5 6 7 8' });
}, { inline: true, maxPropStringLength: 5 });

(0, _react3.storiesOf)('Button').addWithInfo('with custom styles', '\n      This is an example of how to customize the styles of the info components.\n      For the full styles available, see `./src/components/Story.js`\n    ', function () {
  return _react2.default.createElement(_Button2.default, { label: 'The Button', onClick: (0, _addonActions.action)('onClick') });
}, {
  inline: true,
  styles: function styles(stylesheet) {
    stylesheet.infoPage = {
      backgroundColor: '#ccc'
    };
    return stylesheet;
  }
});

(0, _react3.storiesOf)('shared/ProgressBar', module).addDecorator(withKnobs).addWithInfo('default style', function () {
  return _react2.default.createElement(ProgressBar, { progress: number('progress', 25),
    delay: number('delay', 500)
  });
});