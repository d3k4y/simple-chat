Package.describe({
    summary: "Simple chat window. The star point to make your own chat",
    version: "0.5.14",
    name: "d3k4y:simple-chat",
    git: "https://github.com/d3k4y/simple-chat"
});
Package.onUse(function (api) {
    api.versionsFrom('1.4');

    api.use([
      "templating",
      "check",
      "ecmascript",
      "underscore",
      "jquery",
      "tracker",
      "reactive-var",
      "d3k4y:autocomplete@0.6.0"
    ]);
    api.use(['check'], ['server', 'client'])

    api.addAssets([
      'assets/bell.mp3',
      'assets/fonts/chat.eot',
      'assets/fonts/chat.woff',
      'assets/fonts/chat.svg',
      'assets/fonts/chat.ttf'
    ],'client')

    api.mainModule('client.js', 'client');
    api.mainModule('server.js', 'server');

    if (api.export) {
        api.export(['parseChatMessages'], ['client']);
        api.export(['Chats', 'Rooms'], ['client', 'server']);
    }
});

Package.onTest(function (api) {
    api.use([
      'ecmascript',
      'underscore'
    ], ['server', 'client']);
});

Npm.depends({
    moment: '2.15.2'
});
