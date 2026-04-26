class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /** 
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @returns {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } 
        else if (this.cache.size >= this.capacity) {
            const lruKey = this.cache.keys().next().value; 
            this.cache.delete(lruKey);
        }

        this.cache.set(key, value);
    }
}

// --- Test Case ---
const cache = new LRUCache(2);

console.log("put(1, 1)"); cache.put(1, 1);
console.log("put(2, 2)"); cache.put(2, 2);

const g1 = cache.get(1);
console.log("get(1)    ->", g1); 

console.log("put(3, 3) (akan membuang key 2)"); 
cache.put(3, 3);

const g2 = cache.get(2);
console.log("get(2)    ->", g2); 

const g3 = cache.get(3);
console.log("get(3)    ->", g3); 