import * as Collections from 'lib/collections/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

export default function () {
  return {
    Meteor,
    Collections,
    FlowRouter,
    Tracker
  };
}

