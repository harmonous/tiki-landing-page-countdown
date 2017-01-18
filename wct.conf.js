module.exports = {
    plugins: {
        'local': {
            browsers: ['chrome']
        },
        'sauce': false
        // 'istanbul': {
        // 	dir: process.env.CIRCLE_ARTIFACTS
        // 		? process.env.CIRCLE_ARTIFACTS + '/coverage'
        // 		: 'logs/coverage',
        // 	reporters: [
        // 		'text-summary', 'lcov'
        // 	],
        // 	include: ['/src/**'],
        // 	exclude: ['bower_components/*']
        // }
    }
}