import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'masterpiece',
    answer: 'rnasterpiece',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 rny_string의 'm'을 'rn'으로 바꾸는 과정을 표로 나타내면 다음과 같습니다.\n
      m -> rn / a -> a / s -> s / t -> t / e -> e / p -> p / i -> i / e -> e / c -> c / e -> e\n\n

      따라서 'rnasterpiece'를 return 합니다.
    `,
  },
  {
    input: 'programmers',
    answer: 'prograrnrners',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 rny_string의 'm'을 'rn'으로 바꾸는 과정을 표로 나타내면 다음과 같습니다.\n
      p -> p / r -> r / o -> o / g -> g / r -> r / a -> a / m -> rn / m -> rn / e -> e / r -> r / s -> s\n\n

      따라서 'prograrnrners'를 return 합니다.
    `,
  },
  {
    input: 'jerry',
    answer: 'jerry',
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번의 rny_string에는 'm'이 없습니다. 따라서 rny_string 그대로인 'jerry'를 return 합니다.
    `,
  },
  {
    input: 'burn',
    answer: 'burn',
    description: `
      [입출력 예 #4]\n\n
      
      예제 4번의 rny_string에는 'm'이 없습니다. 따라서 rny_string 그대로인 'burn'를 return 합니다.
    `,
  },
];

describe("rny_string", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
