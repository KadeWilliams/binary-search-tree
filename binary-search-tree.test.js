import { Tree } from "./binary-search-tree";

const newTree = new Tree([
  2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
]);

describe("Is the tree valid?", () => {
  it("Is the tree actually build?", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
      leftPart: {
        data: 6,
        leftPart: {
          data: 2,
          leftPart: null,
          rightPart: {
            data: 5,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 23,
          leftPart: {
            data: 21,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 35,
            leftPart: null,
            rightPart: null,
          },
        },
      },
      rightPart: {
        data: 235,
        leftPart: {
          data: 52,
          leftPart: null,
          rightPart: {
            data: 62,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 345,
          leftPart: {
            data: 236,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 346,
            leftPart: null,
            rightPart: null,
          },
        },
      },
    });
  });

  it("Check the root to be 45", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
    });
  });

  //Some test to be written
  it("Does method find actually find just inserted root?", () => {
    newTree.insert(1);
    expect(newTree.find(1)).toMatchObject({
      data: 1,
      leftPart: null,
      rightPart: null,
    });
  });
});
