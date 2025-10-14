import * as path from "path";

import { BaekJoonTestCase } from "@util/model";

import solution from "./solve";

type TestCaseAnswer = number[];

const PROBLEM_NUMBER = 11866;

const TEST_CASES: BaekJoonTestCase<TestCaseAnswer>[] = [
  {
    file: "case1.txt",
    answer: [3, 6, 2, 7, 5, 1, 4],
  },
];

describe(`${PROBLEM_NUMBER}번`, () => {
  TEST_CASES.forEach(({ answer, file }) => {
    test(`${PROBLEM_NUMBER} ${file}`, () => {
      expect(solution(path.join(__dirname, "examples", file))).toEqual(answer);
    });
  });
});
