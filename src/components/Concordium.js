import { SSOButton } from 'aesirx-sso';

  const onGetData = async (response) => {
    //response is a Object that return from SSO, you can use it to handle Authentication in your App
    /*
    Example:
      const authService = new AesirxAuthenticationApiService();
      await authService.setTokenUser(response, false);
      Storage.setItem('auth', true);
    */
  };

function Concordium() {
  return (
    <SSOButton
        className="btn w-100 fw-medium btn-success position-relative d-flex align-item-center justify-content-center mt-3"
        text={"SSO Login"}
        onGetData={onGetData}
    />
  )
}

export default Concordium