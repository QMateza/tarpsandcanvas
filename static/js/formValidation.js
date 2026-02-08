export const elementLen = (val, min, max) => {
  val = val.trim();

  if (val) {
    if (val.length < min || val.length > max) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

  if (regex.test(email.trim())) {
    return true;
  } else {
    return false;
  }
};

export const phoneValidation = (phone) => {
  const regex = /^(\+27)?[-. ]?\d{2,3}[-. ]?\d{3}[-. ]?\d{4}/gm;

  if (regex.test(phone)) {
    return true;
  } else {
    return false;
  }
};
