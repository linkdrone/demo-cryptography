

describe("ECC", function () {
  this.timeout(2000000);

  before(async function () {});

  it("Test mod and bit", async () => {
    const preTime = new Date().getTime();

    let a = 0;
    for (let i = 0; i < 999999909; i++) {
      if (i % 2) {
        a = 1;
      }
    }
    console.warn("a:", a, ", time:", new Date().getTime() - preTime);

    const preTime2 = new Date().getTime();

    let b = 0;
    for (let i = 0; i < 999999909; i++) {
      if (i & 1) {
        b = 1;
      }
    }
    console.warn("b:", b, ", time:", new Date().getTime() - preTime2);
  });
});
