import { useEffect, useState } from "react";

const state = {
  whenOnline: "online",
  whenOffline: "offline",
};

const useIsOnline = ({ whenOnline, whenOffline } = state) => {
  const [value, setValue] = useState(window.navigator.onLine);
  const [ lastChecked, setLastChecked ] = useState(new Date().toLocaleString());

  useEffect(() => {
    const handleOnlineStatus = () => {
      setValue(window.navigator.onLine);
      setLastChecked(new Date().toLocaleString());
    };
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const isOnline = value === true;
  const isOffline = value === false;
  const status = isOnline ? whenOnline : whenOffline;
  return { status, isOnline, isOffline, lastChecked };
};

export default useIsOnline;