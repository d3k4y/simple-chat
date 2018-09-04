/**
 * Created by cesar on 7/11/16.
 */
import './collections';
import './publications';
import "./config";
import './methods';
import './methods_server';

/*
export function parseChatMessages (tokenCallback) {
    $('.direct-chat-messages .direct-chat-msg .direct-chat-text').each((offset, msgNode) => {
        const messageText = msgNode.firstChild.nextSibling.nodeValue;
        const tokens = messageText.split(' ');
        let tokenType = null;
        let newContainer = $('<span></span>');
        const validTypes = ['#', '@'];
        tokens.forEach((token) => {

            switch(token.substr(0,1)) {
                case '#': tokenType = 'dataroom'; break;
                case '@': tokenType = 'user'; break;
                default: newContainer.append(document.createTextNode(`${token} `));
            }
            if(_.indexOf(validTypes, token.substr(0, 1)) > -1) {
                const itemId = token.substr(1);
                if(typeof tokenCallback === 'function') {
                    const elem = tokenCallback.call(this, token.substr(0,1), itemId);
                    if (elem) {
                        newContainer.append(elem);
                        newContainer.append(document.createTextNode(` `));
                    }
                }
            }
        });
        const hashOffset = messageText.indexOf('#') + 1;
        const token = messageText.substr(hashOffset, messageText.indexOf(' ', hashOffset));
        $(msgNode).append(newContainer);
        msgNode.firstChild.nextSibling.nodeValue = '';
    });
}
*/
