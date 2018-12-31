const _ = require('lodash');

function core() {
    this.add = function(x,y) {
        return x + y;
    }
}

module.exports = new core();