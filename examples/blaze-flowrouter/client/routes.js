// Home page
FlowRouter.route(['/', '/home'], {
  action: function(params, queryParams) {
    BlazeLayout.render('layout1', {
      menu: 'menu',
      main: 'home',
    });
  },
});

// To-do List page
FlowRouter.route('/todo', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout1', {
      menu: 'menu',
      main: 'todoList',
    });
  },
});

// Mobile demo page
FlowRouter.route('/mobile', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout1', {
      menu: 'menu',
      main: 'mobilePreview',
    });
  },
});
