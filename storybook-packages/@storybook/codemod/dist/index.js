'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updateOrganisationName = require('./transforms/update-organisation-name');

Object.defineProperty(exports, 'updateOrganisationName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updateOrganisationName).default;
  }
});
Object.defineProperty(exports, 'packageNames', {
  enumerable: true,
  get: function get() {
    return _updateOrganisationName.packageNames;
  }
});

var _updateAddonInfo = require('./transforms/update-addon-info');

Object.defineProperty(exports, 'updateAddonInfo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updateAddonInfo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }