module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
    ],
    rules: {
        'vue/no-unused-vars': 'off',
        'vue/script-setup-uses-vars': 'error'
    }
}