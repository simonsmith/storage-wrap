/**
 * Simple wrapper for local/sessionStorage
 * Allows easy get/set of objects
 * https://github.com/simonsmith/storage-wrap/
 * @blinkdesign
 */

!function(name, context, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        context[name] = factory();
    }
}('storageWrap', this, function() {
    'use strict';

    if (!'Storage' in window) {
        return console && console.error('This browser does not support Storage!');
    }

    return {
        setAdaptor: function(adaptor) {
            this._adaptor = adaptor;
        },

        getItem: function(key) {
            var item = this._adaptor.getItem(key);

            try {
                item = JSON.parse(item);
            } catch (e) {}

            return item;
        },

        setItem: function(key, value) {
            var type = this._toType(value);

            if (/object|array/.test(type)) {
                value = JSON.stringify(value);
            }

            this._adaptor.setItem(key, value);
        },

        removeItem: function(key) {
            this._adaptor.removeItem(key);
        },

        _adaptor: localStorage,

        _toType: function(obj) {
            return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
        }
    }
});
