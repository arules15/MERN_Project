const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // data.handle = !isEmpty(data.handle) ? data.handle : "";
  // data.status = !isEmpty(data.status) ? data.status : "";
  // data.skills = !isEmpty(data.skills) ? data.skills : "";
  data.major = !isEmpty(data.major) ? data.major : "";
  if (Validator.isEmpty(data.major)) {
    errors.major = "Major is required";
  }

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = "Handle needs to be between 2 and 40 characters";
  // }

  // if (Validator.isEmpty(data.handle)) {
  //   errors.handle = "Profile handle is required";
  // }

  // if (Validator.isEmpty(data.status)) {
  //   errors.status = "Status Field is required";
  // }

  // if (Validator.isEmpty(data.skills)) {
  //   errors.skills = "Skills field is required";
  // }

  // if (!isEmpty(data.website)) {
  //   if (!Validator.isURL(data.website)) {
  //     errors.website = "Not a Valid URL";
  //   }
  // }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.behance)) {
    if (!Validator.isURL(data.behance)) {
      errors.behance = "Not a Valid URL";
    }
  }

  if (!isEmpty(data.github)) {
    if (!Validator.isURL(data.github)) {
      errors.github = "Not a Valid URL";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
