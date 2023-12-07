import Joi from "joi";

const createAddressValidation = Joi.object({
  street: Joi.string().optional().max(255),
  city: Joi.string().optional().max(100),
  province: Joi.string().optional().max(100),
  country: Joi.string().required().max(100),
  postal_code: Joi.string().required().max(10),
});

const getAddressValidation = Joi.number().min(1).positive().required();

const updateAddressValidation = Joi.object({
  id: Joi.number().positive().min(1).required(),
  street: Joi.string().optional().max(255),
  city: Joi.string().optional().max(100),
  province: Joi.string().optional().max(100),
  country: Joi.string().required().max(100),
  postal_code: Joi.string().required().max(10),
});

export {
  createAddressValidation,
  getAddressValidation,
  updateAddressValidation,
};
