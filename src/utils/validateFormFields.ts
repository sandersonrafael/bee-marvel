import validator from 'validator';

const validateFormFields = {
  name(name: string): boolean {
    return name.length >= 3;
  },
  email(email: string): boolean {
    return validator.isEmail(email);
  },
  phone(phone: string): boolean {
    return phone.length === 11 && phone.match(/[0-9]/g)?.length === 11;
  },
  message(message: string): boolean {
    return message.length >= 20;
  },
};

export default validateFormFields;
