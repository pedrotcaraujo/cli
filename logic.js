function start(path = './') {
    console.log('starting project on %j', path);
}

function create(name) {
        console.log('creating %j project ', name);
}

function build(path = './') {
    console.log('building project on %j', path);
}

module.exports = {start, create, build}