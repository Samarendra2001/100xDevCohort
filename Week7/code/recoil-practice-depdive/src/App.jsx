import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atoms/all'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
 function MainApp(){
  const networkCOunt = useRecoilValue(networkAtom)
  const jobsCOunt = useRecoilValue(jobsAtom)
  const messageCOunt = useRecoilValue(messagingAtom)
  const notificationCOunt = useRecoilValue(notificationAtom)
  const totalCount = useRecoilValue(totalNotificationSelector)
   // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCOunt>=100?"99+":networkCOunt})</button>
      <button>Jobs {jobsCOunt}</button>
      <button>Messaging {messageCOunt}</button>
      <button>Notifications ({notificationCOunt})</button>

      <button>Me({totalCount})</button>
    </div>
  )
 }
export default App
