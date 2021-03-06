const MAX_LINE_LENGTH = 140;

module.exports = {
    extends: [
        'tslint:recommended',
    ],
    rules: {
        'max-line-length': [true, MAX_LINE_LENGTH],
        'no-invalid-this': true,
        'object-literal-key-quotes': [true, 'as-needed'],
        'one-line': false,
        'quotemark': [true, 'single', 'jsx-double', 'avoid-template'],
        'triple-equals': true,
        'typedef': [
            true,
            'call-signature',
            'parameter',
            'property-declaration',
            'member-variable-declaration',
        ],
        'ordered-imports': false,
        'object-literal-sort-keys': false,
        'interface-name': false,
        'member-access': true,
        'ban-ts-ignore': true,
        'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
        'no-shadowed-variable': true,
        'prefer-object-spread': true,
        'arrow-return-shorthand': true,
        'member-ordering': [
            true,
            {
                'order': [
                    'static-field',
                    'static-method',
                    'instance-field',
                    'constructor',
                    'instance-method',
                ],
            },
        ],
        'comment-format': false,
    },
    jsRules: {
        'max-line-length': [true, MAX_LINE_LENGTH],
        'no-invalid-this': true,
        'object-literal-key-quotes': [true, 'as-needed'],
        'one-line': false,
        'quotemark': [true, 'single', 'jsx-double', 'avoid-template'],
        'triple-equals': true,
    },
};
