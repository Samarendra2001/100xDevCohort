import { atom, selector } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default:104
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom = atom({
    key:"notAtom",
    default:12
});
export const messagingAtom = atom({
    key:"msAtom",
    default:0
});

export const totalNotificationSelector = selector({
    key:"totalnotification",
    get:({get})=>{
        const networkCOunt = get(networkAtom)
        const jobsCOunt = get(jobsAtom)
        const messageCOunt = get(messagingAtom)
        const notificationCOunt = get(notificationAtom)
        return networkCOunt+jobsCOunt+messageCOunt+notificationCOunt
    }
})