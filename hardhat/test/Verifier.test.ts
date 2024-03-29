import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";
import fs from "fs";
import { ethers } from "hardhat";
import path from "path";
import { Verifier__factory } from "../typechain-types";
import { Verifier } from "../typechain-types/Verifier";
import { Signers } from "./types";

function bufferToUint256BE(buffer: Buffer) {
  let buffer256 = [];
  for (let i = 0; i < buffer.length / 32; i++) {
    let v = BigNumber.from(0);
    for (let j = 0; j < 32; j++) {
      v = v.shl(8);
      v = v.add(buffer[i * 32 + j]);
    }
    buffer256.push(v);
  }

  return buffer256;
}

function bufferToUint256LE(buffer: Buffer) {
  let buffer256 = [];
  for (let i = 0; i < buffer.length / 32; i++) {
    let v = BigNumber.from(0);
    let shft = BigNumber.from(1);
    for (let j = 0; j < 32; j++) {
      v = v.add(shft.mul(buffer[i * 32 + j]));
      shft = shft.mul(256);
    }
    buffer256.push(v);
  }

  return buffer256;
}

describe("Verifier", function () {
  this.timeout(2000000);

  let verifier: Verifier;

  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    verifier = await new Verifier__factory(this.signers.admin).deploy();
    console.log("verifier.address:", verifier.address);
  });

  it("verify", async () => {
    try {
      let a = await verifier.verify(
        [],
        [],
        { gasLimit: 30000000 }
      );
      console.log(a);
    } catch (e: any) {
      console.error("e:", e.message);
    }
  });
});
