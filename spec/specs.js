describe('wordOrder', function(){

    // it("it count 1 for a word input", function(){
    //     expect(wordOrder("aa")).to.eql({aa:1});
    // });
    //
    // it("it count 1 for each two-word input", function(){
    //     expect(wordOrder("aa bb")).to.eql({aa:1,bb:1});
    // });

    it("it count 2 for each repeated word in a three-word input", function(){
        expect(wordOrder("aa bb aa")).to.eql({aa:2,bb:1});
    });

});
