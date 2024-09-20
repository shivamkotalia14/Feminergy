import React, { useEffect } from 'react';

const BotpressChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.botpressWebChat.init({
                'composerPlaceholder': 'Say Hi!!!',
                'botConversationDescription': 'Our cute little talk buddy',
                'botName': 'FeminiBot',
                'botId': '24b38ea0-0e1c-4437-96e2-ffbe98d4920a',
                'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                'messagingUrl': 'https://messaging.botpress.cloud',
                'clientId': '24b38ea0-0e1c-4437-96e2-ffbe98d4920a',
                'enableConversationDeletion': true,
                'showPoweredBy': false,
                'className': 'webchatIframe',
                'containerWidth': '100%25',
                'layoutWidth': '100%25',
                'hideWidget': true,
                'showCloseButton': false,
                'disableAnimations': true,
                'closeOnEscape': true,
                'showConversationsButton': true,
                'enableTranscriptDownload': false,
                'stylesheet':'https://webchat-styler-css.botpress.app/prod/a427cef4-d5da-4284-b8d1-f6a1294031fa/v20368/style.css',
                'startNewConvoOnTimeout': true
            });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffe5e5' }}>
            <div style={{ width: '80%', maxWidth: '400px', height: '80%', maxHeight: '600px', position: 'relative' }}>
                <iframe
                    style={{ border: 'none', width: '100%', height: '100%' }}
                    srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script><script>window.botpressWebChat.init({ 'composerPlaceholder': 'Say Hi!!!', 'botConversationDescription': 'Our cute little talk buddy', 'botName': 'FeminiBot', 'botId': '24b38ea0-0e1c-4437-96e2-ffbe98d4920a', 'hostUrl': 'https://cdn.botpress.cloud/webchat/v0', 'messagingUrl': 'https://messaging.botpress.cloud', 'clientId': '24b38ea0-0e1c-4437-96e2-ffbe98d4920a', 'enableConversationDeletion': true, 'showPoweredBy': false, 'className': 'webchatIframe', 'containerWidth': '100%25', 'layoutWidth': '100%25', 'hideWidget': true, 'showCloseButton': false, 'disableAnimations': true, 'closeOnEscape': true, 'showConversationsButton': true, 'enableTranscriptDownload': false, 'stylesheet':'https://webchat-styler-css.botpress.app/prod/a427cef4-d5da-4284-b8d1-f6a1294031fa/v20368/style.css', 'startNewConvoOnTimeout': true });window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);</script></body>"
                ></iframe>
            </div>
        </div>
    );
};

export default BotpressChat;
