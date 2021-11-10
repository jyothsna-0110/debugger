exports.config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        "browserName" : "chrome",
    },

    specs: ['features/frame.feature'],
    cucumberOpts: {
        format:'json:sample_report.json',
        require: [
            
            'stepDefinition/frame.stepDef.js',
            'timeOut.js'
        ]
    }
}
