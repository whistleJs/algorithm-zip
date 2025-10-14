import * as path from "path";

import { BaekJoonTestCase } from "@util/model";

import solution from "./solve";

type TestCaseAnswer = string;

const PROBLEM_NUMBER = path.basename(__dirname);

const TEST_CASES: BaekJoonTestCase<TestCaseAnswer>[] = [
  {
    file: "case1.txt",
    answer: "26",
  },
  {
    file: "case2.txt",
    answer: "35",
  },
  {
    file: "case3.txt",
    answer: "44",
  },
];

describe(`${PROBLEM_NUMBER}번`, () => {
  TEST_CASES.forEach(({ answer, file }) => {
    test(`${PROBLEM_NUMBER} ${file}`, () => {
      expect(solution(path.join(__dirname, "examples", file))).toEqual(answer);
    });
  });
});
