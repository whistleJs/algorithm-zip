const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map((s) => s.split(" "));
  const N = Number(input[0][0]);
  const [, ...commands] = input;

  let head = null,
    tail = null,
    size = 0;
  const result = [];

  const pushFront = (obj) => {
    if (size > 0) {
      obj.next = head;
      head.prev = obj;
      head = obj;
    } else {
      head = obj;
      tail = obj;
    }

    size++;
  };

  const pushBack = (obj) => {
    if (size > 0) {
      tail.next = obj;
      obj.prev = tail;
      tail = obj;
    } else {
      head = obj;
      tail = obj;
    }

    size++;
  };

  const popFront = () => {
    if (size > 0) {
      const value = head.value;

      if (size === 1) {
        head = null;
        tail = null;
      } else {
        head = head.next;
        head.prev = null;
      }

      size--;

      return value;
    } else {
      return -1;
    }
  };

  const popBack = () => {
    if (size > 0) {
      const value = tail.value;

      if (size === 1) {
        head = null;
        tail = null;
      } else {
        tail = tail.prev;
        tail.next = null;
      }

      size--;

      return value;
    } else {
      return -1;
    }
  };

  for (let i = 0; i < N; i++) {
    const [command] = commands[i];
    const value = Number(commands[i][1]);
    const obj = { next: null, tail: null, value };

    switch (command) {
      case "push_front":
        pushFront(obj);
        break;
      case "push_back":
        pushBack(obj);
        break;
      case "pop_front":
        result.push(popFront());
        break;
      case "pop_back":
        result.push(popBack());
        break;
      case "size":
        result.push(size);
        break;
      case "empty":
        result.push(Number(size === 0));
        break;
      case "front":
        result.push(head ? head.value : -1);
        break;
      case "back":
        result.push(tail ? tail.value : -1);
        break;
    }
  }

  return result;
};

export default solution;
