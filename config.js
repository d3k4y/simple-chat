import {Meteor} from "meteor/meteor";
import {Template} from "meteor/templating";

/**
 * Created by cesar on 25/2/16.
 */
export const SimpleChat = {
    options: {
        texts: {
            loadMore: 'Load More',
            placeholder: 'Type message ...',
            button: 'send',
            join: 'joined the',
            left: 'left',
            room: 'room at',

        },
        limit: 50,
        beep: false,
        showViewed: true,
        showReceived: true,
        showJoined: false,
        publishChats: function (roomId, limi) {
            return true;
        },
        allow: function (message, roomId, username, avatar, name) {
            return true;
        },
        onNewMessage: function (msg) {
        },
        onReceiveMessage: function () {

        },
        onJoin: function (roomId, username, name, date) {
            // server
        },
        onLeft: function (roomId, username, name, date) {
            // server
        },
        height: '300px',
        inputTemplate: 'SimpleChatInput',
        loadMoreTemplate: 'LoadMore',
        autocompleteOptions: {
            position: "top",
            limit: 10,
            rules: [
                {
                    token: '@',
                    collection: Meteor.users,
                    field: "username",
                    // template: Template.userPill
                },
            ],
        },
    },
    configure: function (options) {
        this.options = this.options || {};
        _.extend(SimpleChat.options, options);
        return this;
    },
};

