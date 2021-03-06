import BaseJoi from 'joi';
import Extension from 'joi-date-extensions';
import validateHelper from './validate.helper';
import appConstants from '../app.constants';

const Joi = BaseJoi.extend(Extension);

const getCompaniesSchema = {
  companyId: Joi.number().required(),
};

/**
 * Validates get companies request
 * @param {object} request - service request
 * @param {method} callback - call back method
 */
const validateGetCompanies = (request, callback) => {
  try {
    validateHelper.validateRequest(request, getCompaniesSchema, (err, data) => {
      callback(err, data);
    });
  } catch (err) {
    callback({
      message: err.message,
      stackTrace: err.stack,
      eventType: appConstants.eventType.applicationError,
      messageType: appConstants.messageType.error,
      ownerType: appConstants.ownerTypes.validators.companyMongoValidator,
      source: `${appConstants.ownerTypes.validators.companyMongoValidator}.validateGetCompanies`,
    }, null);
  }
};

export default {
  validateGetCompanies,
};
