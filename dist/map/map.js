import * as f from 'f';
const map = new Map();
export default {
    delete: (key) => map.delete(key),
    get: (key) => f.or(map.get(key), {}),
    set: (key, value) => (map.set(key, value), value)
};
