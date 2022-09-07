import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [5, [2, 1, 2, 6, 2, 4, 3, 3]],
    answer: [3, 4, 2, 1, 5],
    description: `
      [입출력 예 #1]\n\n
      
      1번 스테이지에는 총 8명의 사용자가 도전했으며, 이 중 1명의 사용자가 아직 클리어하지 못했다. 따라서 1번 스테이지의 실패율은 다음과 같다.\n
      - 1 번 스테이지 실패율 : 1/8\n\n

      2번 스테이지에는 총 7명의 사용자가 도전했으며, 이 중 3명의 사용자가 아직 클리어하지 못했다. 따라서 2번 스테이지의 실패율은 다음과 같다.\n
      - 2 번 스테이지 실패율 : 3/7\n\n

      마찬가지로 나머지 스테이지의 실패율은 다음과 같다.\n
      - 3 번 스테이지 실패율 : 2/4\n
      - 4번 스테이지 실패율 : 1/2\n
      - 5번 스테이지 실패율 : 0/1\n\n

      각 스테이지의 번호를 실패율의 내림차순으로 정렬하면 다음과 같다.\n
      - [3, 4, 2, 1, 5]
    `
  },
  {
    input: [4, [4, 4, 4, 4, 4]],
    answer: [4, 1, 2, 3],
    description: `
      [입출력 예 #2]\n\n
      
      모든 사용자가 마지막 스테이지에 있으므로 4번 스테이지의 실패율은 1이며 나머지 스테이지의 실패율은 0이다.\n
      - [4, 1, 2, 3]
    `
  }
];

describe('실패율', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
