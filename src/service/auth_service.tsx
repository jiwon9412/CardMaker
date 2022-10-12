import {
  GithubAuthProvider,
  GoogleAuthProvider,
  AuthProvider,
  getAuth,
  signInWithPopup,
  Auth,
} from "firebase/auth";
import firebaseApp from "./firebase";

type providerNameType = string | null;

class AuthService {
  login(providerName: providerNameType) {
    const auth: Auth = getAuth(firebaseApp);
    const authProvider: AuthProvider = this.getProvider(providerName);
    return signInWithPopup(auth, authProvider);
  }

  getProvider(providerName: providerNameType): AuthProvider {
    switch (providerName) {
      case "Google":
        return new GoogleAuthProvider();
      case "Github":
        return new GithubAuthProvider();
      default:
        throw new Error(`not supported Provider : ${providerName}`);
    }
  }
}

export default AuthService;
