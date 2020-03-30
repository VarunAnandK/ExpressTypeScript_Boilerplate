import * as Pusher from 'pusher';
var pusher = new Pusher({
    appId: '865596',
    key: '2435baffe643bea9c142',
    secret: 'c424bc9e4af604593a03',
    cluster: 'ap2',
    encrypted: true
});

export { pusher };