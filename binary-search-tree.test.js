import { Tree } from "./binary-search-tree";

const newTree = new Tree([
  2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
]);

describe("Check tree's validity", () => {
  it("The tree should be build", () => {
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

  it("The root of the tree should be 45", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
    });
  });
});

describe("Methods of the tree", () => {
  it("Check method should insert and find the node right after it", () => {
    newTree.insert(1);
    expect(newTree.find(1)).toMatchObject({
      data: 1,
      leftPart: null,
      rightPart: null,
    });
  });

  it("Delete method should delete nodes by its values", () => {
    expect(newTree.delete(1)).toMatchObject({
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

  it(`levelOrder function should return an array of
   values if no function is provided. Otherwise it should `, () => {
    expect(newTree.levelOrder()).toEqual(
      expect.arrayContaining([
        2, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
      ])
    );
  });

  it("height method should return how deep the given node is", () => {
    expect(newTree.height(newTree.root.leftPart.rightPart)).toBe(1);
  });

  it("height method should return how deep the given node is", () => {
    expect(newTree.height(newTree.root.rightPart.leftPart.rightPart)).toBe(0);
  });

  it("height method should return how deep the given node is", () => {
    expect(newTree.height(newTree.root)).toBe(3);
  });
});
