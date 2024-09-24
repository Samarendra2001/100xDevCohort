import { atom, selector } from "recoil";
import axios from 'axios'
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async() =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
        // networks: 4, 
        // jobs: 6, 
        // messaging: 3, 
        // notifications: 3
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})