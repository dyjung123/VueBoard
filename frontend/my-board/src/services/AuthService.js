import Oidc from 'oidc-client';
import {
  authConfig,
  clientConfig,
  clientUrl,
  otherConfig,
  metadata
} from '../config/authConfig';

var uManager = new Oidc.UserManager({
  ...authConfig,
  ...clientConfig,
  ...clientUrl,
  ...otherConfig,
  metadata
});

uManager.events.addUserLoaded(function (user) {
  console.log('New User Loaded：', arguments);
  console.log('Acess_token: ', user.access_token)
});

uManager.events.addAccessTokenExpiring(function () {
  console.log('AccessToken Expiring：', arguments);
});

uManager.events.addAccessTokenExpired(function () {
  console.log('AccessToken Expired：', arguments);
  alert('Session expired. Going out!');
  uManager.signoutRedirect().then(function (resp) {
    console.log('signed out', resp);
  }).catch(function (err) {
    console.log(err)
  })
});

uManager.events.addSilentRenewError(function () {
  console.error('Silent Renew Error：', arguments);
});

uManager.events.addUserSignedOut(function () {
  alert('Going out!');
  console.log('UserSignedOut：', arguments);
  uManager.signoutRedirect().then(function (resp) {
    console.log('signed out', resp);
  }).catch(function (err) {
    console.log('signed out', err)
  })
});

class AuthService {

  getUser() {
    return uManager.getUser();
  }

  renewToken() {
    return uManager.signinSilent();
  }

  signIn() {
    return uManager.signinRedirect();
  }

  siginCallback() {
    return uManager.signinCallback();
  }

  async signOut () {
    const redirectUrl = '/logout'
    await uManager.signoutRedirectCallback();
    await uManager.removeUser().then(_=>{document.location.href = redirectUrl});
  }
}

export default AuthService;
