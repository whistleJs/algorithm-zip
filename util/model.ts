type TestCase<T, G> = {
  input: T;
  answer: G;
  description: string;
};

type BaekJoonTestCase<T> = {
  file: string;
  answer: T;
};

export { TestCase, BaekJoonTestCase };
