module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        "no-console": "off",
        'vue/no-unused-vars': 'error',
        'vue/script-setup-uses-vars': 'error',
        "vue/singleline-html-element-content-newline": 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/html-indent': 'off',
    },
    env: {
        'vue/setup-compiler-macros': true,
        node: true
    }
}