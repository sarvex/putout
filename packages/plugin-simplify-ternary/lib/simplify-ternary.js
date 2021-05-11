'use strict';

module.exports.report = () => 'Ternary should be simplified';

module.exports.replace = () => ({
    '__a ? __a : __b': '__a || __b',
    '__a ? __b : __b ': '__b',
    '__a ? __b : __b ? __c : __d': '__b ? __c : __d',
});

