const chai = require('chai');
const assert = chai.assert;

describe('ベーシックメモリー', function() {
    it('メモリーのセーブと削除', function() {
        const BasicMemory = require('../src/memory/BasicMemory');
        const testMemory = new BasicMemory('test', 0,1,2,3,4,-5);
        const obj = testMemory.generateObject();
        assert.isObject(obj);
        assert.isString(obj.from);
        assert.isObject(obj.emotion);
        assert.strictEqual(obj.emotion.anger, 0);
        assert.strictEqual(obj.emotion.disgust, 1);
        assert.strictEqual(obj.emotion.fear, 2);
        assert.strictEqual(obj.emotion.happiness, 3);
        assert.strictEqual(obj.emotion.sadness, 4);
        assert.strictEqual(obj.emotion.surprise, -5);
        testMemory.save();
    });
});