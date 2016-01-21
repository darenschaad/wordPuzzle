describe("removeVowel", function(){
  it("will detect if there is a vowel in the argument entered", function(){
    expect(removeVowel("cat")).to.equal(true);
  });
  it("will remove a vowel from the string and replace it with '-'", function(){
    expect(removeVowel("cat")).to.equal("c-t");
  });
});
