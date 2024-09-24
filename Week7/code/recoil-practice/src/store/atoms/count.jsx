
import {atom, selector} from "recoil"

export const countAtom = atom({
    key:"countAtom",
    default:0
})
export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);// this is a function and get is a props
        return count % 2;
    }
});
// second one is a function and get is a props