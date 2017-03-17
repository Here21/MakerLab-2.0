import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

// import {Boxes, Orders, Bills} from 'lib/collections'


export default function() {
  Meteor.methods({
    'user.create'(userinfo) {
      check(userinfo, Object)
      Accounts.createUser(userinfo)
    }
  })
}
