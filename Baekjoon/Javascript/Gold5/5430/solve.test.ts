import * as path from "path";

import { BaekJoonTestCase } from "@util/model";

import solution from "./solve";

type TestCaseAnswer = (number[] | "error")[];

const PROBLEM_NUMBER = path.basename(__dirname);

const TEST_CASES: BaekJoonTestCase<TestCaseAnswer>[] = [
  {
    file: "case1.txt",
    answer: [[2, 1], "error", [1, 2, 3, 5, 8], "error"],
  },
];

describe(`${PROBLEM_NUMBER}번`, () => {
  TEST_CASES.forEach(({ answer, file }) => {
    test(`${PROBLEM_NUMBER} ${file}`, () => {
      expect(solution(path.join(__dirname, "examples", file))).toEqual(answer);
    });
  });
});
