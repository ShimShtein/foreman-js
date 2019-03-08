/*
  @theforeman/vendor/webpack.vendor

  List of exported npm packages by @theforeman/vendor
 */
module.exports = [
  './webpack.vendor.scss',
  /**
   * React related
   */
  'babel-polyfill',
  'react',
  'react-dom',
  'react-bootstrap',
  'react-debounce-input',
  'react-diff-view',
  'react-ellipsis-with-tooltip',
  'react-numeric-input',
  'react-onclickoutside',
  'react-password-strength',
  'patternfly-react',
  'react-redux',
  'redux',
  'redux-form',
  'redux-form-validators',
  'redux-logger',
  'redux-thunk',
  'prop-types',
  'seamless-immutable',
  'isomorphic-fetch',

  /*
   * jquery related
   */
  'jquery',
  'jquery.cookie',
  'select2',
  'multiselect',
  'jquery-ujs',
  'datatables.net-bs',
  // jquery-flot related
  'jquery-flot/excanvas',
  'jquery-flot',
  'jquery-flot/jquery.flot.pie',
  'jquery-flot/jquery.flot.selection',
  'jquery-flot/jquery.flot.stack',
  'jquery-flot/jquery.flot.time',

  /**
   * Brace related
   */
  'brace',
  'brace/mode/ruby',
  'brace/mode/html_ruby',
  'brace/mode/json',
  'brace/mode/sh',
  'brace/mode/xml',
  'brace/mode/yaml',
  'brace/mode/diff',
  'brace/theme/twilight',
  'brace/theme/clouds',
  'brace/keybinding/vim',
  'brace/keybinding/emacs',
  'brace/ext/searchbox',

  /**
   * Other packages
   */
  'lodash',
  'axios',
  'diff',
  'ipaddr.js',
  'jstz',
  'urijs',
  'uuid',
  '@novnc/novnc/core/rfb',
];
