import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Chats, Rooms} from './collections';
import {SimpleChat} from './config';


Meteor.publish("simpleChats.Chats", function (roomId, limit) {
    check(roomId, String);
    check(limit, Number);
    if (!roomId) {
        return;
    }
    if (!SimpleChat.options.publishChats.call(this, roomId, limit)) return [];

    const query = {
        roomId: roomId,
    };
    if (!SimpleChat.options.showJoined) {
        query.message = {$exists: 1};
    }
    const options = {sort: {date: -1}};
    if (limit) {
        options.limit = limit;
    }
    return Chats.find(query, options);
});

Meteor.publish("simpleChats.Rooms", function () {
    return Rooms.find();
});
