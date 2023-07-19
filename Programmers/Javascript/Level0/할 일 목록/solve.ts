const solution = (todo_list: string[], finished: boolean[]) => {
  return todo_list.filter((_, i) => !finished[i]);
};

export default solution;