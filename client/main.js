import initContext from './configs/context';
import App from 'client/lib/app';

// modules
import coreModule from './modules/core';
// import commentsModule from './modules/comments';

// init context
const context = initContext();
const app = new App(context);


// create app
// const app = createApp(context);
app.loadModule(coreModule);
// app.loadModule(commentsModule);

app.init();
FlowRouter.initialize();
