import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['and', 'notad', 'abcd'],
    answer: ['and', 'abcd'],
    description: `
      [입출력 예 #1]\n\n
      
      1번 인덱스의 문자열인 'notad'는 부분 문자열로 'ad'를 가집니다. 따라서 해당 문자열을 제거하고 나머지는 순서를 유지하여 ['and', 'abcd']를 return 합니다.
    `,
  },
  {
    input: ['there', 'are', 'no', 'a', 'ds'],
    answer: ['there', 'are', 'no', 'a', 'ds'],
    description: `
      [입출력 예 #2]\n\n
      
      'ad'가 부분 문자열로 들어간 문자열이 존재하지 않습니다. 따라서 원래 배열을 그대로 return 합니다.
    `,
  },
];

describe("ad 제거하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
