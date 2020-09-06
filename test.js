const test = require("ava");
const fs = require("fs");
const idPNG = require("./index");

test("identifying png file", t => {
    const buffer = fs.readFileSync("./data/flower.png");
    const arrayBuffer = buffer.buffer;
    t.true(idPNG(buffer));
    t.true(idPNG(arrayBuffer));
    t.true(idPNG(new Uint8Array(arrayBuffer)));
    t.true(idPNG(new DataView(arrayBuffer)));
});

test("identifying jpg file as not PNG", t => {
    const buffer = fs.readFileSync("./data/flower.jpg");
    const arrayBuffer = buffer.buffer;
    t.false(idPNG(buffer));
    t.false(idPNG(arrayBuffer));
    t.false(idPNG(new Uint8Array(arrayBuffer)));
    t.false(idPNG(new DataView(arrayBuffer)));
});