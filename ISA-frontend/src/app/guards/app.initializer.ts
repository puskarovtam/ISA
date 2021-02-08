import { AuthenticationService } from "../services/authentication.service";


export function appInitializer(authenticateService: AuthenticationService){
    return () => new Promise(resolve => {
        //attempt to refresh token on app start up to auto authenticate
        authenticateService.refreshToken().subscribe().add(resolve);
    });
}