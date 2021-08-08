const kIsLoggined = "is_loginned";

const isLoginned = () => {
  return !!sessionStorage.getItem(kIsLoggined);
};

const setLoginned = (value) => {
  sessionStorage.setItem(kIsLoggined, !!value);
};

export { isLoginned, setLoginned };
