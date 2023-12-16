const handleErrors = (e) => {
  const errors = { title: "", weight: "", reps: "" };
  if (e.message.includes("Workout validation failed")) {
    Object.values(e.errors).forEach(({ properties }) => {
      const { path, message } = properties;
      errors[path] = message;
    });
  }
  return errors;
};
export default handleErrors;
