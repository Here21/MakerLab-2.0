import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import PostList from './containers/postlist';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });
}