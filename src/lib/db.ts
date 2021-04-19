import { firebase } from './firebase';

export const validateRequest = async (address: string): Promise<boolean> => {
  try {
    const ref = firebase.database().ref('addresses/');
    const currentTime = Date.now();

    const snapshot = await ref.child(address).get();

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
    const ref = firebase.database().ref('addresses/' + address);
    await ref.set(currentTime);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
