import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'one4seveneight',
    answer: 1478,
    description: `
      [입출력 예 #1]\n\n

      문제 예시와 같습니다.
    `
  },
  {
    input: '23four5six7',
    answer: 234567,
    description: `
      [입출력 예 #2]\n\n

      문제 예시와 같습니다.
    `
  },
  {
    input: '2three45sixseven',
    answer: 234567,
    description: `
      [입출력 예 #3]\n\n
      
      - "three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.\n
      - 입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.
    `
  },
  {
    input: '123',
    answer: 123,
    description: `
      [입출력 예 #4]\n\n

      - s에는 영단어로 바뀐 부분이 없습니다.
    `
  }
];

describe('숫자 문자열과 영단어', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
