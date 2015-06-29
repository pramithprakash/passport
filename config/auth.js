// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1458026567826958', // your App ID
        'clientSecret'    : 'c793929275a1819f8ac0c4f9dc6a8678', // your App Secret
        'callbackURL'     : 'http://twitter.com'
    },

    'twitterAuth' : {
        'consumerKey'        : '60TbmpZjrWCEISOFLCwhFBC3E',
        'consumerSecret'     : 'tiXuEttk5nWRRLOKcWLER1g1cfXNVJDEUjRSpTvYwDvkYNkhnt',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};


