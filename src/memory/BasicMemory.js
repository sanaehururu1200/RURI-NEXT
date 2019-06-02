const Datastore = require('nedb')
const emotionDB = new Datastore({ autoload: true, filename: './db/emotion.db' });

module.exports = class BasicMemory {
    constructor(from, anger = 0, disgust = 0, fear = 0, happiness = 0, sadness = 0, surprise = 0) {
        this.from = from;
        this.anger = anger;
        this.disgust = disgust;
        this.fear = fear;
        this.happiness = happiness;
        this.sadness = sadness;
        this.surprise = surprise;
        this.created_at = new Date();
    }

    save() {
        emotionDB.insert(this.generateObject(), function (error, newDoc) {   
            if (error) {
              throw error;
            }
        });
    }

    generateObject() {
        return {
            from: this.from,
            emotion: {
                anger: this.anger,
                disgust: this.disgust,
                fear: this.fear,
                happiness: this.happiness,
                sadness: this.sadness,
                surprise: this.surprise,
            },
            created_at: this.created_at,
        }
    }
};