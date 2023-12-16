const userErrors = (e) => {
  const errors = { email: "", password: "" };
  if (e.code === 11000) {
    errors.email = "Email is already taken!";
    return errors;
  }

  if (e.message.includes("User validation failed")) {
    Object.values(e.errors).forEach(({ properties }) => {
      const { path, message } = properties;
      errors[path] = message;
    });
  }

  return errors;
};

export default userErrors;
