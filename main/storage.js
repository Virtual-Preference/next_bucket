import {atob, btoa} from "next/dist/compiled/@edge-runtime/primitives/encoding";

let bucket = {
    setObject: function (key, object) {
        localStorage.setItem(key, btoa(JSON.stringify(object)));
        return true;
    },
    getObject: function (key) {
        if (localStorage.getItem(key) === null) {
            return null;
        }
        return JSON.parse(atob(localStorage.getItem(key)));
    },
    updateObject: function (key, update_key, object) {
        let d = this.getObject(key)
        d[update_key] = object;
        this.setObject(key, d);
        return true
    },
    deleteObject: function (key) {
        localStorage.removeItem(key);
    },
    clearObjectsAll: function () {
        localStorage.clear();
    }
};
export {
    bucket
}