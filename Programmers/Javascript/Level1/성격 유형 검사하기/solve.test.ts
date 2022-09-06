import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], number[]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]],
    answer: 'TCMA',
    description: `
      [입출력 예 #1]\n\n
      
      1번부터 5번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.\n\n

      | 지표 번호 |  성격 유형 | 점수 | 성격 유형  | 점수 |\n
      | 1번 지표 | 라이언형(R) | 0  | 튜브형(T)  | 3   |\n
      | 2번 지표 | 콘형(C)    | 1  | 프로도형(F) | 0  |\n
      | 3번 지표 | 제이지형(J) | 0  | 무지형(M)  | 2   |\n
      | 4번 지표 | 어피치형(A) | 1  | 네오형(N)  | 1   |\n
    `
  },
  {
    input: [['TR', 'RT', 'TR'], [7, 1, 3]],
    answer: 'RCJA',
    description: `
      [입출력 예 #2]\n\n
      
      1번부터 3번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.\n\n

      | 지표 번호 |  성격 유형 | 점수 | 성격 유형  | 점수 |\n
      | 1번 지표 | 라이언형(R) | 6  | 튜브형(T)  | 1   |\n
      | 2번 지표 | 콘형(C)    | 0  | 프로도형(F) | 0  |\n
      | 3번 지표 | 제이지형(J) | 0  | 무지형(M)  | 0   |\n
      | 4번 지표 | 어피치형(A) | 0  | 네오형(N)  | 0   |\n
    `
  }
];

describe('성격 유형 검사하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
