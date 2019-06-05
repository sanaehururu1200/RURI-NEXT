(async() => {
    const FastText = require('fasttext-node');
    const fastText = new FastText({model: './data/model'});
    const result = await fastText.cbow(
        './data/ft.txt',
        {
            dim: 50,
            model: './data/model',
        }
    );
    console.log(result);
})();