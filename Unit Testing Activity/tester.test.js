const tester = require("course-utilities").load("./tester.js", tester);

test("some title", () => {
    expect(tester()).toBe("yes");
});
