export default function useAuthenticate() {
  const storage = JSON.parse(localStorage.getItem("userData"));
  const date = new Date();
  const revistTime = Math.abs(Number(date.getHours() - storage?.entryTime));
  revistTime >= 2 && !storage?.isAuthenticated && localStorage.clear();
  return { storage, revistTime };
}
