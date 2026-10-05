function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      if (attemptCount > 3) {
        return "Account locked due to too many failed login attempts";
      }
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};