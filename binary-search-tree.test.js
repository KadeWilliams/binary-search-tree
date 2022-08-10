const Tree = require("./binary-search-tree");

const newTree = new Tree([
  2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
]);

describe("Is the tree valid?", () => {
  it("Check the root to be 45", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
    });
  });

  //Some test to be written
});
