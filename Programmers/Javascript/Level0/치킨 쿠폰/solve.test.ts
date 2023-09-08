import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 100,
    answer: 11,
    description: `
      [입출력 예 #1]\n\n
      
      - 100마리를 주문하면 쿠폰이 100장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다.\n
      - 10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.\n
      - 따라서 10 + 1 = 11 을 return합니다.
    `,
  },
  {
    input: 1081,
    answer: 120,
    description: `
      [입출력 예 #2]\n\n
      
      - 1081마리를 주문하면 쿠폰이 1081장 발급되므로 서비스 치킨 108마리를 주문할 수 있습니다. 그리고 쿠폰이 1장 남습니다.\n
      - 108마리를 주문하면 쿠폰이 108장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다. 그리고 쿠폰이 8장 남습니다.\n
      - 10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.\n
      - 1마리를 주문하면 쿠폰이 1장 발급됩니다.\n
      - 가지고 있는 쿠폰이 총 10장이므로 서비스 치킨 1마리를 추가로 주문할 수 있습니다.\n
      - 따라서 108 + 10 + 1 + 1 = 120 을 return합니다.
    `,
  },
];

describe("치킨 쿠폰", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
