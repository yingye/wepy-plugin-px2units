import postcss from 'postcss';
import px2units from 'postcss-px2units';

export default class {

    constructor(c = {}) {
        const def = {
            filter: new RegExp('\.(wxss)$'),
            config: {}
        };

        this.setting = Object.assign({}, def, c);
    }
    apply (op) {

        let setting = this.setting;

        if (!setting.filter.test(op.file)) {
            op.next();
        } else {
            op.output && op.output({
                action: '变更',
                file: op.file
            });

            let prefixer = postcss([ px2units(this.setting.config) ]);

            prefixer.process(op.code, { from: undefined }).then((result) => {
                op.code = result.css;
                op.next();
            }).catch(e => {
                op.err = e;
                op.catch();
            });
        }
    }
}