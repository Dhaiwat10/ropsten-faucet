import { getDatabase, ref, get, set, child } from "firebase/database";

const db = getDatabase();

export const validateRequest = async (address: string): Promise<boolean> => {
  try {
    const addrRef = ref(db, "addresses/");
    const currentTime = Date.now();

    const snapshot = await get(child(addrRef, address));

    if (snapshot.exists()) {
      // Previous record exists

      // Validate request
      if (currentTime - snapshot.val() < 8.64e7) {
        // Cooldown not over yet
        return false;
      } else {
        // Cooldown over
        return true;
      }
    } else {
      // Allow withdrawal
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createRecord = async (address: string): Promise<boolean> => {
  try {
    const currentTime = Date.now();
    const addrRef = ref(db, "addresses/" + address);
    await set(addrRef, currentTime);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
