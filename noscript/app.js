// Урлы.
ns.router.routes = {
    route: {
        '/': 'index'
    }
};

// ----------------------------------------------------------------------------------------------------------------- //

// Раскладки (страницы).
ns.layout.define('app', {
    'app': {
        'content@': {}
    }
});

ns.layout.define('index', {
    'app content@': 'index'
}, 'app');

// ----------------------------------------------------------------------------------------------------------------- //

// Блоки (view).
ns.View.define('app');
ns.View.define('index', {
    models: ['repos']
});

// ----------------------------------------------------------------------------------------------------------------- //
ns.Model.define('repo', {
    params: {
        id: null
    }
});
ns.Model.define('repos', {
    isCollection: true
});

// ----------------------------------------------------------------------------------------------------------------- //

// Приложение.
var app = {};

app.init = function() {
    // Поскольку проект может лежать где угодно на файловой системе - инициализируем baseDir руками.
    ns.router.baseDir = location.pathname.substr(0, location.pathname.length - 1);
    $.getJSON('https://api.github.com/users/just-boris/repos').success(function(response) {
        response.forEach(function(repo) {
            ns.Model.get('repos').insert(
                ns.Model.get('repo', {id: repo.id}).setData(repo)
            );
        });
        ns.init();
        ns.page.go();
    });
};

$(function() {
    app.init();
});
