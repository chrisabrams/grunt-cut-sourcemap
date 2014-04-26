(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, Application, Backbone, Chaplin,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$ = require('jquery');

Backbone = require('backbone');

Backbone.$ = $;

Chaplin = require('chaplin');

module.exports = Application = (function(_super) {
  __extends(Application, _super);

  function Application() {
    return Application.__super__.constructor.apply(this, arguments);
  }

  return Application;

})(Chaplin.Application);


},{"backbone":"5kFNoY","chaplin":"c+wb86","jquery":"HlZQrA"}],2:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!doctype html>\n<!--[if IE 8]>    <html class=\"no-js lt-ie9\" lang=\"en\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n  <title>Chaplin Generator</title>\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <link rel=\"stylesheet\" href=\"/css/app.css\">\n</head>\n<body>\n  <script src=\"/js/vendor.js\"></script>\n  <script src=\"/js/app.js\"></script>\n</body>\n</html>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],3:[function(require,module,exports){
var Chaplin, Controller, SiteView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

SiteView = require('../../views/site-view.coffee');

module.exports = Controller = (function(_super) {
  __extends(Controller, _super);

  function Controller() {
    return Controller.__super__.constructor.apply(this, arguments);
  }

  Controller.prototype.beforeAction = function() {
    return this.reuse('site', SiteView);
  };

  return Controller;

})(Chaplin.Controller);


},{"../../views/site-view.coffee":23,"chaplin":"c+wb86"}],4:[function(require,module,exports){
var Controller, FooterView, HeaderView, HomeController, HomePageView, JumbotronView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller.coffee');

FooterView = require('../views/footer.coffee');

HeaderView = require('../views/header.coffee');

HomePageView = require('../views/home/home-page.coffee');

JumbotronView = require('../views/bootstrap/jumbotron.coffee');

module.exports = HomeController = (function(_super) {
  __extends(HomeController, _super);

  function HomeController() {
    return HomeController.__super__.constructor.apply(this, arguments);
  }

  HomeController.prototype.beforeAction = function() {
    HomeController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  HomeController.prototype.index = function() {
    this.view = new JumbotronView({
      region: 'main'
    });
    this.view.subview('home-page-content', new HomePageView({
      region: 'main'
    }));
    return this;
  };

  return HomeController;

})(Controller);


},{"../views/bootstrap/jumbotron.coffee":19,"../views/footer.coffee":20,"../views/header.coffee":21,"../views/home/home-page.coffee":22,"./base/controller.coffee":3}],5:[function(require,module,exports){
var Application, routes;

Application = require('./application');

routes = require('./routes');

$(function() {
  return new Application({
    title: 'ksdjflsd',
    controllerSuffix: '',
    routes: routes
  });
});


},{"./application":1,"./routes":11}],6:[function(require,module,exports){
var Chaplin, utils;

Chaplin = require('chaplin');

utils = Chaplin.utils.beget(Chaplin.utils);

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;


},{"chaplin":"c+wb86"}],7:[function(require,module,exports){
var Chaplin, Handlebars, register,
  __slice = [].slice;

Chaplin = require('chaplin');

Handlebars = require('hbsfy/runtime');

register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse;
  inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers["with"].call(this, context, options);
});

register('url', function() {
  var options, params, routeName, _i;
  routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
  return Chaplin.utils.reverse(routeName, params);
});


},{"chaplin":"c+wb86","hbsfy/runtime":"pu95bm"}],8:[function(require,module,exports){
var Chaplin, mediator;

Chaplin = require('chaplin');

mediator = module.exports = Chaplin.mediator;


},{"chaplin":"c+wb86"}],9:[function(require,module,exports){
var Chaplin, Collection, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

Model = require('./model.coffee');

module.exports = Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  Collection.prototype.model = Model;

  return Collection;

})(Chaplin.Collection);


},{"./model.coffee":10,"chaplin":"c+wb86"}],10:[function(require,module,exports){
var Chaplin, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

module.exports = Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  return Model;

})(Chaplin.Model);


},{"chaplin":"c+wb86"}],11:[function(require,module,exports){
module.exports = function(match) {
  return match('', 'home#index');
};


},{}],12:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p>&copy; Company 2013</p>\n  </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],13:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Chaplin Bootstrap Example</a>\n</div>\n<div class=\"navbar-collapse collapse\">\n  <form class=\"navbar-form navbar-right\">\n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n  </form>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],14:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],15:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <h1>Hello, world!</h1>\n  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n  <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],16:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header id=\"header\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"></header>\n\n<div id=\"outer-page-container\"></div>\n\n<footer id=\"footer\"></footer>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],17:[function(require,module,exports){
var Chaplin, CollectionView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

View = require('./view.coffee');

module.exports = CollectionView = (function(_super) {
  __extends(CollectionView, _super);

  function CollectionView() {
    return CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.animationDuration = 0;

  CollectionView.prototype.useCssAnimation = true;

  CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

  return CollectionView;

})(Chaplin.CollectionView);


},{"./view.coffee":18,"chaplin":"c+wb86"}],18:[function(require,module,exports){
var Chaplin, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

require('../../lib/view-helper.coffee');

module.exports = View = (function(_super) {
  __extends(View, _super);

  function View() {
    return View.__super__.constructor.apply(this, arguments);
  }

  View.prototype.getTemplateFunction = function() {
    return this.template;
  };

  return View;

})(Chaplin.View);


},{"../../lib/view-helper.coffee":7,"chaplin":"c+wb86"}],19:[function(require,module,exports){
var JumboTronView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view.coffee');

module.exports = JumboTronView = (function(_super) {
  __extends(JumboTronView, _super);

  function JumboTronView() {
    return JumboTronView.__super__.constructor.apply(this, arguments);
  }

  JumboTronView.prototype.autoRender = true;

  JumboTronView.prototype.className = 'jumbotron';

  JumboTronView.prototype.template = require('../../templates/jumbotron.hbs');

  return JumboTronView;

})(View);


},{"../../templates/jumbotron.hbs":15,"../base/view.coffee":18}],20:[function(require,module,exports){
var FooterView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view.coffee');

module.exports = FooterView = (function(_super) {
  __extends(FooterView, _super);

  function FooterView() {
    return FooterView.__super__.constructor.apply(this, arguments);
  }

  FooterView.prototype.autoRender = true;

  FooterView.prototype.className = 'container';

  FooterView.prototype.template = require('../templates/footer.hbs');

  return FooterView;

})(View);


},{"../templates/footer.hbs":12,"./base/view.coffee":18}],21:[function(require,module,exports){
var HeaderView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view.coffee');

module.exports = HeaderView = (function(_super) {
  __extends(HeaderView, _super);

  function HeaderView() {
    return HeaderView.__super__.constructor.apply(this, arguments);
  }

  HeaderView.prototype.autoRender = true;

  HeaderView.prototype.className = 'container';

  HeaderView.prototype.template = require('../templates/header.hbs');

  return HeaderView;

})(View);


},{"../templates/header.hbs":13,"./base/view.coffee":18}],22:[function(require,module,exports){
var HomePageView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view.coffee');

module.exports = HomePageView = (function(_super) {
  __extends(HomePageView, _super);

  function HomePageView() {
    return HomePageView.__super__.constructor.apply(this, arguments);
  }

  HomePageView.prototype.autoRender = true;

  HomePageView.prototype.className = 'container';

  HomePageView.prototype.template = require('../../templates/home.hbs');

  return HomePageView;

})(View);


},{"../../templates/home.hbs":14,"../base/view.coffee":18}],23:[function(require,module,exports){
var SiteView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = SiteView = (function(_super) {
  __extends(SiteView, _super);

  function SiteView() {
    return SiteView.__super__.constructor.apply(this, arguments);
  }

  SiteView.prototype.container = 'body';

  SiteView.prototype.id = 'site-container';

  SiteView.prototype.regions = {
    header: '#header',
    main: '#outer-page-container',
    footer: '#footer'
  };

  SiteView.prototype.template = require('../templates/site');

  return SiteView;

})(View);


},{"../templates/site":16,"./base/view":18}]},{},[1,3,4,5,6,7,8,9,10,11,17,18,19,20,21,22,23,2,12,13,14,15,16])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvYXBwbGljYXRpb24uY29mZmVlIiwiL1VzZXJzL2FicmFtcy9Qcm9qZWN0cy9nZW5lcmF0b3ItY2hhcGxpbi1wbGF5Z3JvdW5kL2FwcC9hc3NldHMvaW5kZXguaGJzIiwiL1VzZXJzL2FicmFtcy9Qcm9qZWN0cy9nZW5lcmF0b3ItY2hhcGxpbi1wbGF5Z3JvdW5kL2FwcC9jb250cm9sbGVycy9iYXNlL2NvbnRyb2xsZXIuY29mZmVlIiwiL1VzZXJzL2FicmFtcy9Qcm9qZWN0cy9nZW5lcmF0b3ItY2hhcGxpbi1wbGF5Z3JvdW5kL2FwcC9jb250cm9sbGVycy9ob21lLmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvaW5pdGlhbGl6ZS5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL2xpYi91dGlscy5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL2xpYi92aWV3LWhlbHBlci5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL21lZGlhdG9yLmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvbW9kZWxzL2Jhc2UvY29sbGVjdGlvbi5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL21vZGVscy9iYXNlL21vZGVsLmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvcm91dGVzLmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvdGVtcGxhdGVzL2Zvb3Rlci5oYnMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3RlbXBsYXRlcy9oZWFkZXIuaGJzIiwiL1VzZXJzL2FicmFtcy9Qcm9qZWN0cy9nZW5lcmF0b3ItY2hhcGxpbi1wbGF5Z3JvdW5kL2FwcC90ZW1wbGF0ZXMvaG9tZS5oYnMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3RlbXBsYXRlcy9qdW1ib3Ryb24uaGJzIiwiL1VzZXJzL2FicmFtcy9Qcm9qZWN0cy9nZW5lcmF0b3ItY2hhcGxpbi1wbGF5Z3JvdW5kL2FwcC90ZW1wbGF0ZXMvc2l0ZS5oYnMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3ZpZXdzL2Jhc2UvY29sbGVjdGlvbi12aWV3LmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvdmlld3MvYmFzZS92aWV3LmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvdmlld3MvYm9vdHN0cmFwL2p1bWJvdHJvbi5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3ZpZXdzL2Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3ZpZXdzL2hlYWRlci5jb2ZmZWUiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2dlbmVyYXRvci1jaGFwbGluLXBsYXlncm91bmQvYXBwL3ZpZXdzL2hvbWUvaG9tZS1wYWdlLmNvZmZlZSIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZ2VuZXJhdG9yLWNoYXBsaW4tcGxheWdyb3VuZC9hcHAvdmlld3Mvc2l0ZS12aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsaUNBQUE7RUFBQTtpU0FBQTs7QUFBQSxDQUFBLEdBQWEsT0FBQSxDQUFRLFFBQVIsQ0FBYixDQUFBOztBQUFBLFFBSUEsR0FBYSxPQUFBLENBQVEsVUFBUixDQUpiLENBQUE7O0FBQUEsUUFLUSxDQUFDLENBQVQsR0FBYSxDQUxiLENBQUE7O0FBQUEsT0FNQSxHQUFhLE9BQUEsQ0FBUSxTQUFSLENBTmIsQ0FBQTs7QUFBQSxNQVFNLENBQUMsT0FBUCxHQUF1QjtBQUFOLGdDQUFBLENBQUE7Ozs7R0FBQTs7cUJBQUE7O0dBQTBCLE9BQU8sQ0FBQyxZQVJuRCxDQUFBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQSxJQUFBLDZCQUFBO0VBQUE7aVNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxRQUNBLEdBQVcsT0FBQSxDQUFRLDhCQUFSLENBRFgsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUVyQiwrQkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsdUJBQUEsWUFBQSxHQUFjLFNBQUEsR0FBQTtXQUNaLElBQUMsQ0FBQSxLQUFELENBQU8sTUFBUCxFQUFlLFFBQWYsRUFEWTtFQUFBLENBQWQsQ0FBQTs7b0JBQUE7O0dBRndDLE9BQU8sQ0FBQyxXQUhsRCxDQUFBOzs7O0FDQUEsSUFBQSwrRUFBQTtFQUFBO2lTQUFBOztB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QUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsaUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHlCQUFBLFVBQUEsR0FBWSxJQUFaLENBQUE7O0FBQUEseUJBQ0EsU0FBQSxHQUFXLFdBRFgsQ0FBQTs7QUFBQSx5QkFFQSxRQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSLENBRlYsQ0FBQTs7c0JBQUE7O0dBRDBDLEtBRjVDLENBQUE7Ozs7QUNBQSxJQUFBLGNBQUE7RUFBQTtpU0FBQTs7QUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLGFBQVIsQ0FBUCxDQUFBOztBQUFBLE1BRU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLDZCQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSxxQkFBQSxTQUFBLEdBQVcsTUFBWCxDQUFBOztBQUFBLHFCQUNBLEVBQUEsR0FBSSxnQkFESixDQUFBOztBQUFBLHFCQUVBLE9BQUEsR0FDRTtBQUFBLElBQUEsTUFBQSxFQUFRLFNBQVI7QUFBQSxJQUNBLElBQUEsRUFBTSx1QkFETjtBQUFBLElBRUEsTUFBQSxFQUFRLFNBRlI7R0FIRixDQUFBOztBQUFBLHFCQU1BLFFBQUEsR0FBVSxPQUFBLENBQVEsbUJBQVIsQ0FOVixDQUFBOztrQkFBQTs7R0FEc0MsS0FGeEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCAgICAgICAgICA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuIyBqUXVlcnkgcGx1Z2luc1xuXG5CYWNrYm9uZSAgID0gcmVxdWlyZSAnYmFja2JvbmUnXG5CYWNrYm9uZS4kID0gJFxuQ2hhcGxpbiAgICA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDaGFwbGluLkFwcGxpY2F0aW9uXG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8IWRvY3R5cGUgaHRtbD5cXG48IS0tW2lmIElFIDhdPiAgICA8aHRtbCBjbGFzcz1cXFwibm8tanMgbHQtaWU5XFxcIiBsYW5nPVxcXCJlblxcXCI+IDwhW2VuZGlmXS0tPlxcbjwhLS1baWYgZ3QgSUUgOF0+PCEtLT4gPGh0bWwgY2xhc3M9XFxcIm5vLWpzXFxcIiBsYW5nPVxcXCJlblxcXCI+IDwhLS08IVtlbmRpZl0tLT5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIj5cXG4gIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZSxjaHJvbWU9MVxcXCI+XFxuICA8dGl0bGU+Q2hhcGxpbiBHZW5lcmF0b3I8L3RpdGxlPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aFxcXCI+XFxuICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIi9jc3MvYXBwLmNzc1xcXCI+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPHNjcmlwdCBzcmM9XFxcIi9qcy92ZW5kb3IuanNcXFwiPjwvc2NyaXB0PlxcbiAgPHNjcmlwdCBzcmM9XFxcIi9qcy9hcHAuanNcXFwiPjwvc2NyaXB0PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4gIH0pO1xuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5TaXRlVmlldyA9IHJlcXVpcmUgJy4uLy4uL3ZpZXdzL3NpdGUtdmlldy5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIENoYXBsaW4uQ29udHJvbGxlclxuXG4gIGJlZm9yZUFjdGlvbjogLT5cbiAgICBAcmV1c2UgJ3NpdGUnLCBTaXRlVmlld1xuIiwiQ29udHJvbGxlciAgICA9IHJlcXVpcmUgJy4vYmFzZS9jb250cm9sbGVyLmNvZmZlZSdcbkZvb3RlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9mb290ZXIuY29mZmVlJ1xuSGVhZGVyVmlldyAgICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hlYWRlci5jb2ZmZWUnXG5Ib21lUGFnZVZpZXcgID0gcmVxdWlyZSAnLi4vdmlld3MvaG9tZS9ob21lLXBhZ2UuY29mZmVlJ1xuSnVtYm90cm9uVmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL2Jvb3RzdHJhcC9qdW1ib3Ryb24uY29mZmVlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhvbWVDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuXG4gIGJlZm9yZUFjdGlvbjogLT5cbiAgICBzdXBlclxuXG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gICAgQHZpZXcgPSBuZXcgSnVtYm90cm9uVmlldyByZWdpb246ICdtYWluJ1xuICAgIEB2aWV3LnN1YnZpZXcgJ2hvbWUtcGFnZS1jb250ZW50JywgbmV3IEhvbWVQYWdlVmlldyByZWdpb246ICdtYWluJ1xuXG4gICAgQFxuIiwiQXBwbGljYXRpb24gPSByZXF1aXJlICcuL2FwcGxpY2F0aW9uJ1xucm91dGVzICAgICAgPSByZXF1aXJlICcuL3JvdXRlcydcblxuJCAtPlxuXG4gIG5ldyBBcHBsaWNhdGlvbiB7XG4gICAgdGl0bGU6ICdrc2RqZmxzZCcsXG4gICAgY29udHJvbGxlclN1ZmZpeDogJycsXG4gICAgcm91dGVzXG4gIH1cbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuIyBBcHBsaWNhdGlvbi1zcGVjaWZpYyB1dGlsaXRpZXNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiMgRGVsZWdhdGUgdG8gQ2hhcGxpbuKAmXMgdXRpbHMgbW9kdWxlLlxudXRpbHMgPSBDaGFwbGluLnV0aWxzLmJlZ2V0IENoYXBsaW4udXRpbHNcblxuIyBfKHV0aWxzKS5leHRlbmRcbiMgIHNvbWVNZXRob2Q6IC0+XG5cbiMgUHJldmVudCBjcmVhdGluZyBuZXcgcHJvcGVydGllcyBhbmQgc3R1ZmYuXG5PYmplY3Quc2VhbD8gdXRpbHNcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsc1xuIiwiQ2hhcGxpbiAgICA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5IYW5kbGViYXJzID0gcmVxdWlyZSAnaGJzZnkvcnVudGltZSdcblxuIyBBcHBsaWNhdGlvbi1zcGVjaWZpYyB2aWV3IGhlbHBlcnNcbiMgaHR0cDovL2hhbmRsZWJhcnNqcy5jb20vI2hlbHBlcnNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxucmVnaXN0ZXIgPSAobmFtZSwgZm4pIC0+XG4gIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIgbmFtZSwgZm5cblxuIyBNYXAgaGVscGVyc1xuIyAtLS0tLS0tLS0tLVxuXG4jIE1ha2UgJ3dpdGgnIGJlaGF2ZSBhIGxpdHRsZSBtb3JlIG11c3RhY2hleS5cbnJlZ2lzdGVyICd3aXRoJywgKGNvbnRleHQsIG9wdGlvbnMpIC0+XG4gIGlmIG5vdCBjb250ZXh0IG9yIEhhbmRsZWJhcnMuVXRpbHMuaXNFbXB0eSBjb250ZXh0XG4gICAgb3B0aW9ucy5pbnZlcnNlKHRoaXMpXG4gIGVsc2VcbiAgICBvcHRpb25zLmZuKGNvbnRleHQpXG5cbiMgSW52ZXJzZSBmb3IgJ3dpdGgnLlxucmVnaXN0ZXIgJ3dpdGhvdXQnLCAoY29udGV4dCwgb3B0aW9ucykgLT5cbiAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZVxuICBvcHRpb25zLmludmVyc2UgPSBvcHRpb25zLmZuXG4gIG9wdGlvbnMuZm4gPSBpbnZlcnNlXG4gIEhhbmRsZWJhcnMuaGVscGVycy53aXRoLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucylcblxuIyBHZXQgQ2hhcGxpbi1kZWNsYXJlZCBuYW1lZCByb3V0ZXMuIHt7dXJsIFwibGlrZXMjc2hvd1wiIFwiMTA1XCJ9fVxucmVnaXN0ZXIgJ3VybCcsIChyb3V0ZU5hbWUsIHBhcmFtcy4uLiwgb3B0aW9ucykgLT5cbiAgQ2hhcGxpbi51dGlscy5yZXZlcnNlIHJvdXRlTmFtZSwgcGFyYW1zXG4iLCJDaGFwbGluICA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5tZWRpYXRvciA9IG1vZHVsZS5leHBvcnRzID0gQ2hhcGxpbi5tZWRpYXRvclxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5Nb2RlbCAgID0gcmVxdWlyZSAnLi9tb2RlbC5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblxuXG4gIG1vZGVsOiBNb2RlbFxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTW9kZWwgZXh0ZW5kcyBDaGFwbGluLk1vZGVsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChtYXRjaCkgLT5cblxuICBtYXRjaCAnJywgJ2hvbWUjaW5kZXgnXG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgPHA+JmNvcHk7IENvbXBhbnkgMjAxMzwvcD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIubmF2YmFyLWNvbGxhcHNlXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgPC9idXR0b24+XFxuICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5DaGFwbGluIEJvb3RzdHJhcCBFeGFtcGxlPC9hPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVxcXCI+XFxuICA8Zm9ybSBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2lnbiBpbjwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgIDxoMj5IZWFkaW5nPC9oMj5cXG4gICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuIDwvcD5cXG4gICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5WaWV3IGRldGFpbHMgJnJhcXVvOzwvYT48L3A+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgPGgyPkhlYWRpbmc8L2gyPlxcbiAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS4gPC9wPlxcbiAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPlZpZXcgZGV0YWlscyAmcmFxdW87PC9hPjwvcD5cXG4gPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgIDxoMj5IZWFkaW5nPC9oMj5cXG4gICAgPHA+RG9uZWMgc2VkIG9kaW8gZHVpLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gVmVzdGlidWx1bSBpZCBsaWd1bGEgcG9ydGEgZmVsaXMgZXVpc21vZCBzZW1wZXIuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuPC9wPlxcbiAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPlZpZXcgZGV0YWlscyAmcmFxdW87PC9hPjwvcD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICA8aDE+SGVsbG8sIHdvcmxkITwvaDE+XFxuICA8cD5UaGlzIGlzIGEgdGVtcGxhdGUgZm9yIGEgc2ltcGxlIG1hcmtldGluZyBvciBpbmZvcm1hdGlvbmFsIHdlYnNpdGUuIEl0IGluY2x1ZGVzIGEgbGFyZ2UgY2FsbG91dCBjYWxsZWQgYSBqdW1ib3Ryb24gYW5kIHRocmVlIHN1cHBvcnRpbmcgcGllY2VzIG9mIGNvbnRlbnQuIFVzZSBpdCBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGNyZWF0ZSBzb21ldGhpbmcgbW9yZSB1bmlxdWUuPC9wPlxcbiAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+TGVhcm4gbW9yZSAmcmFxdW87PC9hPjwvcD5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8aGVhZGVyIGlkPVxcXCJoZWFkZXJcXFwiIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCI+PC9oZWFkZXI+XFxuXFxuPGRpdiBpZD1cXFwib3V0ZXItcGFnZS1jb250YWluZXJcXFwiPjwvZGl2Plxcblxcbjxmb290ZXIgaWQ9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCI7XG4gIH0pO1xuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5WaWV3ICAgID0gcmVxdWlyZSAnLi92aWV3LmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb2xsZWN0aW9uVmlldyBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblZpZXdcbiAgYW5pbWF0aW9uRHVyYXRpb246IDBcbiAgdXNlQ3NzQW5pbWF0aW9uOiB5ZXNcblxuICBnZXRUZW1wbGF0ZUZ1bmN0aW9uOiBWaWV3OjpnZXRUZW1wbGF0ZUZ1bmN0aW9uXG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcbnJlcXVpcmUgJy4uLy4uL2xpYi92aWV3LWhlbHBlci5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVmlldyBleHRlbmRzIENoYXBsaW4uVmlld1xuXG4gIGdldFRlbXBsYXRlRnVuY3Rpb246IC0+XG4gICAgQHRlbXBsYXRlXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi4vYmFzZS92aWV3LmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBKdW1ib1Ryb25WaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2p1bWJvdHJvbidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy9qdW1ib3Ryb24uaGJzJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3LmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGb290ZXJWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9mb290ZXIuaGJzJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3LmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIZWFkZXJWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9oZWFkZXIuaGJzJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4uL2Jhc2Uvdmlldy5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZVBhZ2VWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy9ob21lLmhicydcbiIsIlZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTaXRlVmlldyBleHRlbmRzIFZpZXdcbiAgY29udGFpbmVyOiAnYm9keSdcbiAgaWQ6ICdzaXRlLWNvbnRhaW5lcidcbiAgcmVnaW9uczpcbiAgICBoZWFkZXI6ICcjaGVhZGVyJ1xuICAgIG1haW46ICcjb3V0ZXItcGFnZS1jb250YWluZXInXG4gICAgZm9vdGVyOiAnI2Zvb3RlcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9zaXRlJ1xuIl19
