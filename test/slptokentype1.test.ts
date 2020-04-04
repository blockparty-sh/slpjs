import { BigNumber } from "bignumber.js";
import { SlpTokenType1 as SlpTokenType1 } from "../lib/slptokentype1";

import * as assert from "assert";

describe("SlpTokenType1", () => {
    describe("buildGenesisOpReturn()", () => {
        it("Succeeds with Minimal OP_RETURN", () => {
            const ticker = null;
            const name = null;
            const documentUri = null;
            const documentHashHex = null;
            const decimals = 0;
            const batonVout = null;
            const initialQuantity = new BigNumber(100);
            let op_return = SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity);
            assert.equal(op_return.toString("hex"), "6a04534c500001010747454e455349534c004c004c004c0001004c00080000000000000064");
        });
        it("Throws without BigNumber", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity: any = 100;
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity as BigNumber); }, Error);
        });
        it("Throws with initial quantity too large", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551616");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws with negative initial quantity", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("-1");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws with a decimal initial quantity", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("1.1");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when allocated OP_RETURN space is exceeded", () => {
            const ticker = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
            const name = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
            const documentUri = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Succeeds with batonVout is 2 and max inital quantity is used", () => {
            const ticker = null;
            const name = null;
            const documentUri = null;
            const documentHashHex = null;
            const decimals = 0;
            const batonVout = 2;
            const initialQuantity = new BigNumber("18446744073709551615");
            let op_return = SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity);
            assert.equal(op_return.toString("hex"), "6a04534c500001010747454e455349534c004c004c004c000100010208ffffffffffffffff");
        });
        it("Throws when batonVout is less than 2", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout = 1;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when batonVout is less than 2", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout = 0;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when batonVout is less than 2", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout = -1;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when batonVout is greater than 255", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout = 256;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when decimals is too high", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 10;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when decimals is negative", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = -1;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when decimals is null", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals: any = null;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals as number, batonVout, initialQuantity); }, Error);
        });
        it("Throws when initialQuantity is null", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity: any = null;
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity as BigNumber); }, Error);
        });
        it("Throws when documentUri is provided as Buffer", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: any = Buffer.from("00", "hex");
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex as string, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when documentUri is provided as non-hex string", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when ticker is not a string", () => {
            const ticker: any = ["a"];
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker as string, name, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when name is not a string", () => {
            const ticker: null = null;
            const name: any = ["a"];
            const documentUri: null = null;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name as string, documentUri, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when documentUri is not a string", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: any = 1;
            const documentHashHex: null = null;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri as string, documentHashHex, decimals, batonVout, initialQuantity); }, Error);
        });
        it("Throws when documentHashHex is not a string", () => {
            const ticker: null = null;
            const name: null = null;
            const documentUri: null = null;
            const documentHashHex: any = 1;
            const decimals = 0;
            const batonVout: null = null;
            const initialQuantity = new BigNumber("18446744073709551615");
            assert.throws(function () { SlpTokenType1.buildGenesisOpReturn(ticker, name, documentUri, documentHashHex as string, decimals, batonVout, initialQuantity); }, Error);
        });
    });
    describe("buildSendOpReturn()", () => {
        it("Succeeds with 1 output", () => {
            const expectedResult = "6a04534c500001010453454e44208888888888888888888888888888888888888888888888888888888888888888080000000000000042";
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66") ];
            const result = SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray).toString("hex");
            assert.equal(result, expectedResult);
        });
        it("Succeeds with 2 outputs", () => {
            const expectedResult = "6a04534c500001010453454e44208888888888888888888888888888888888888888888888888888888888888888080000000000000042080000000000000063";
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66"), new BigNumber("99") ];
            const result = SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray).toString("hex");
            assert.equal(result, expectedResult);
        });
        it("Succeeds with 19 outputs", () => {
            const expectedResult = "6a04534c500001010453454e44208888888888888888888888888888888888888888888888888888888888888888080000000000000042080000000000000063080000000000000063080000000000000063080000000000000063080000000000000042080000000000000063080000000000000063080000000000000063080000000000000063080000000000000042080000000000000063080000000000000063080000000000000063080000000000000063080000000000000042080000000000000063080000000000000063080000000000000063";
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99") ];
            const result = SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray).toString("hex");
            assert.equal(result, expectedResult);
        });
        it("Throws with 20 outputs", () => {
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"),
                                    new BigNumber("66"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99"), new BigNumber("99") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray);} , Error);
        });
        it("Throws with 0 outputs", () => {
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray: any[] = [];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray);}, Error);
        });
        it("Throws with null outputs", () => {
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray: any = null;
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray as BigNumber[]);}, TypeError);
        });
        it("Throws with BigNumber outputs", () => {
            const tokenIdHex = "8888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray: any = new BigNumber("100");
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray as BigNumber[]);}, TypeError);
        });
        it("Throws with tokenIdHex too short", () => {
            const tokenIdHex = "88888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray);}, Error);
        });
        it("Throws with tokenIdHex too long", () => {
            const tokenIdHex = "888888888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray);}, Error);
        });
        it("Throws with tokenIdHex non-hex string", () => {
            const tokenIdHex = "zz88888888888888888888888888888888888888888888888888888888888888";
            const outputQtyArray = [ new BigNumber("66") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex, outputQtyArray);}, Error);
        });
        it("Throws with tokenIdHex not a string", () => {
            const tokenIdHex: any = 1;
            const outputQtyArray = [ new BigNumber("66") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex as string, outputQtyArray);}, Error);
        });
        it("Throws with tokenIdHex not as null", () => {
            const tokenIdHex: any = null;
            const outputQtyArray = [ new BigNumber("66") ];
            assert.throws(() => {SlpTokenType1.buildSendOpReturn(tokenIdHex as string, outputQtyArray);}, Error);
        });
    });
    describe("buildMintOpReturn()", () => {
        it("Succeeds when batonVout = null", () => {
            const expectedResult = "6a04534c50000101044d494e5420ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4c00080000000000000064";
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout = null;
            const mintQuantity = new BigNumber("100");
            const result = SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity).toString("hex");
            assert.equal(result, expectedResult);
        });
        it("Succeeds when batonVout is 2", () => {
            const expectedResult = "6a04534c50000101044d494e5420ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0102080000000000000064";
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout = 2;
            const mintQuantity = new BigNumber("100");
            const result = SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity).toString("hex");
            assert.equal(result, expectedResult);
        });
        it("Throws when batonVout is 1", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout = 1;
            const mintQuantity = new BigNumber("66");
            //SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity)
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws when batonVout is 256", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout = 256;
            const mintQuantity = new BigNumber("66");
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws when mintQuantity is a number", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity: any = 1;
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity as BigNumber);}, Error);
        });
        it("Throws when mintQuantity is null", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity: any = null;
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity as BigNumber);}, Error);
        });
        it("Throws when mintQuantity is too large", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("18446744073709551616");
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws when mintQuantity is negative", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("-1");
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws when mintQuantity is decimal", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("1.1");
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws when mintQuantity is array", () => {
            const tokenIdHex = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
            const batonVout: null = null;
            const mintQuantity: any = [ new BigNumber("1") ];
            assert.throws(() =>{SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity as BigNumber);}, Error);
        });
        it("Throws with tokenIdHex too short", () => {
            const tokenIdHex = "888888888888888888888888888888888888888888888888888888888888";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("66");
            assert.throws(() => {SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws with tokenIdHex too long", () => {
            const tokenIdHex = "888888888888888888888888888888888888888888888888888888888888888888";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("66");
            assert.throws(() => {SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws with tokenIdHex non-hex string", () => {
            const tokenIdHex = "zz88888888888888888888888888888888888888888888888888888888888888";
            const batonVout: null = null;
            const mintQuantity = new BigNumber("66");
            assert.throws(() => {SlpTokenType1.buildMintOpReturn(tokenIdHex, batonVout, mintQuantity);}, Error);
        });
        it("Throws with tokenIdHex not a string", () => {
            const tokenIdHex: any = 1;
            const batonVout: null = null;
            const mintQuantity = new BigNumber("66");
            assert.throws(() => {SlpTokenType1.buildMintOpReturn(tokenIdHex as string, batonVout, mintQuantity);}, Error);
        });
        it("Throws with tokenIdHex not as null", () => {
            const tokenIdHex: any = null;
            const batonVout: null = null;
            const mintQuantity = new BigNumber("66");
            assert.throws(() => {SlpTokenType1.buildMintOpReturn(tokenIdHex as string, batonVout, mintQuantity);}, Error);
        });
    });
});
