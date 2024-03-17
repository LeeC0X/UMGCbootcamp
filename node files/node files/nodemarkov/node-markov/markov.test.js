const {MarkovMachine} = require("./markov");
describe("markov machine", function (){
    test('make chanins', function(){
        let mm = new MarkovMachine("the cat in the hat");
        expect(mm.chains).toEqual(new Map([
            ["the",["cat","hat"]],
            ["cat",["in"]],
            ["in",["the"]],
            ["hat",[null]]
        ]));
    })
    // test('makes chains', function () {
    //     let mm = new MarkovMachine("aa bb cc aa BB aa BB");
    
    //     expect(mm.chains).toEqual(new Map([
    //       ["aa", ["bb", "BB", "BB"]],
    //       ["bb", ["cc"]],
    //       ["cc", ["aa"]],
    //       ["BB", ["aa", null]]]));
    //   });
    test("choice ", function(){
        expect([3, 2, 5]).toContain(MarkovMachine.choice([3, 2, 5]));
        
    });
    test("make text", function(){

    })
    test('generates semi-predictable text', function () {
        let mm = new MarkovMachine("a b c");
        let text = mm.makeText();
        expect(["a b c", "b c", "c"]).toContain(text);
      });
})