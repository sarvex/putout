test('test: remove', (t) => {
    mockImport('fs/promises', {
        readFile,
    });

    stopAll();

    t.equal(result, expected);
    t.end();
});

test.only('test: remove', (t) => {
    mockImport('fs/promises', {
        readFile,
    });

    stopAll();

    t.equal(result, expected);
    t.end();
});

test.skip('test: remove', (t) => {
    mockImport('fs/promises', {
        readFile,
    });

    stopAll();

    t.equal(result, expected);
    t.end();
});

