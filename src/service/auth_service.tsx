import {
  GithubAuthProvider,
  GoogleAuthProvider,
  AuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

class AuthService {
  login(providerName: string) {
    const auth = getAuth();
    const authProvider: AuthProvider = this.getProvider(providerName);
    return signInWithPopup(auth, authProvider);
  }

  getProvider(providerName: string): AuthProvider {
    switch (providerName) {
      case "google":
        return new GoogleAuthProvider();
      case "github":
        return new GithubAuthProvider();
      default:
        throw new Error(`not supported Provider : ${providerName}`);
    }
  }
}

export default AuthService;
