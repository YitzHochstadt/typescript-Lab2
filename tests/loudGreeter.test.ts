import { LoudGreeter } from "../src/loudGreeter"

describe("LoudGreeter", () => {
    test("Hello, Jim!!", () => {
        let loudGreeter: LoudGreeter =  new LoudGreeter("Hello");
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Jim")).toBe("Hello, Jim!!");
    });
    test("Hey there, Dwight!!!!", () => {
        let loudGreeter: LoudGreeter =  new LoudGreeter("Hey there");
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Dwight")).toBe("Hey there, Dwight!!!!");
    });
    test("What's up, dog?!", () => {
        let loudGreeter: LoudGreeter =  new LoudGreeter("What's up");
        expect(loudGreeter.greet("dog?")).toBe("What's up, dog?!");
    });
    test("Yeah that's funny, MICHAEL!!!!!!", () => {
        let loudGreeter: LoudGreeter =  new LoudGreeter("Yeah that's funny");
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        expect(loudGreeter.greet("MICHAEL!")).toBe("Yeah that's funny, MICHAEL!!!!!!");
    });
});