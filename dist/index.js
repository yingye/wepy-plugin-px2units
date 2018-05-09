'use strict';

exports.__esModule = true;

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _postcssPx2units = require('postcss-px2units');

var _postcssPx2units2 = _interopRequireDefault(_postcssPx2units);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        var def = {
            filter: new RegExp('\.(wxss)$'),
            config: {}
        };

        this.setting = Object.assign({}, def, c);
    }

    _class.prototype.apply = function apply(op) {

        var setting = this.setting;

        if (!setting.filter.test(op.file)) {
            op.next();
        } else {
            op.output && op.output({
                action: '变更',
                file: op.file
            });

            var prefixer = (0, _postcss2.default)([(0, _postcssPx2units2.default)(this.setting.config)]);

            prefixer.process(op.code, { from: op.file }).then(function (result) {
                op.code = result.css;
                op.next();
            }).catch(function (e) {
                op.err = e;
                op.catch();
            });
        }
    };

    return _class;
}();

exports.default = _class;