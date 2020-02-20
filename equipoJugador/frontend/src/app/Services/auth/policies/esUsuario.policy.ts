import {Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth.services";


@Injectable({
  providedIn: 'root'
})

export class EsUsuarioPolicy implements CanActivate{

  constructor(private readonly _authService: AuthService) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    return this._authService.esUsuario;
  }

}
