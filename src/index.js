const config = require('../config/config.js');
const Mastodon = require('mastodon-api');
const MeCab = new require('mecab-async')
const mecab = new MeCab()
const FastText = require('fasttext-node');
const fasttext = new FastText({model: './data/model'});

(async () => {
    
})();
const mstdn = new Mastodon({
    access_token: config.mastodon.access_token,
    api_url: config.mastodon.api_url
})

const stream = mstdn.stream('streaming/user')

stream.on('message', async(msg) => {
    console.log(msg.event);
    if(msg.event === 'notification') {
        const payload = msg.data;
        const reply_id = payload.status.id;
        let result = await fasttext.predict(payload.status.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''));
        console.log(result);
        let posttext;
        result.forEach(element => {
            posttext += JSON.stringify(element.predictions) + '\n';
        });
        mstdn.post('statuses', {status: posttext, in_reply_to_id: reply_id})
    };
})