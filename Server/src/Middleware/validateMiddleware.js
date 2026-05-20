function validate(required) {
  return (req, _res, next) => {
    const errors = [];

    for (const rule of required) {
      const value = req.body?.[rule.field];
      if (rule.type === "string") {
        if (typeof value !== "string" || value.trim().length === 0) {
          errors.push({ field: rule.field, message: "Required" });
          continue;
        }
        if (rule.min && value.trim().length < rule.min) {
          errors.push({
            field: rule.field,
            message: `Must be at least ${rule.min} characters`,
          });
        }
        if (rule.max && value.trim().length > rule.max) {
          errors.push({
            field: rule.field,
            message: `Must be at most ${rule.max} characters`,
          });
        }
        if (rule.format === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) {
            errors.push({ field: rule.field, message: "Invalid email" });
          }
        }
      }
    }

    if (errors.length > 0) {
      const err = new Error("Validation error");
      err.statusCode = 400;
      err.details = errors;
      return next(err);
    }

    return next();
  };
}

module.exports = { validate };

