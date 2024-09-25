import { atomFamily } from "recoil";
import { TODOS } from "./todos";


//console.log("Creating todosAtomFamily");
export const todosAtomFamily = atomFamily({
  key: 'uniqueTodosAtomfaily',
  default: (id) => {
    return TODOS.find(x => x.id === id)
  },
});