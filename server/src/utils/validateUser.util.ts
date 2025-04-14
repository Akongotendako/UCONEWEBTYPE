export const areAllFieldsEmpty = ({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword?: string;
}) => {
  return Boolean(email && password && confirmPassword);
};

export const isPasswordMatch = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => {
    return Boolean(password === confirmPassword)
};
