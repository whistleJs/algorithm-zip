import * as path from "path";

import { BaekJoonTestCase } from "@util/model";

import solution from "./solve";

type TestCaseAnswer = number[];

const PROBLEM_NUMBER = path.basename(__dirname);

const TEST_CASES: BaekJoonTestCase<TestCaseAnswer>[] = [
  {
    file: "case1.txt",
    answer: [2, 1, 2, 0, 2, 1, -1, 0, 1, -1, 0, 3],
  },
  {
    file: "case2.txt",
    answer: [-1, -1, -1, -1, 1, 1, 2, 2, 333, 10, 10, 333, 20, 1234, 1234, 20],
  },
];

describe(`${PROBLEM_NUMBER}번`, () => {
  TEST_CASES.forEach(({ answer, file }) => {
    test(`${PROBLEM_NUMBER} ${file}`, () => {
      expect(solution(path.join(__dirname, "examples", file))).toEqual(answer);
    });
  });
});
