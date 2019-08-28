import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Login } from '../../models/login';
import { TouchSequence, error } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login;
  error: boolean;
  message: string;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.error = false;
  }

  loginfunc (email: string, password: string): void {
    if ( !email && !email.length) {
      alert('Email is required(must not be blank)');
    } else {
      if ( !password && !password.length) {
        alert('Password is required(must not be blank)');
      } else {
        this.moviesService.login(email, password)
        .subscribe(res => {
          // console.log(res);
          window.location.href = '/dashboard';
        },
        err => {
          let errorMessage: string;
                switch (err.error.code) {
                    case 'LOGIN_FAILED':
                        errorMessage =
                            'L\'adresse e-mail ou le mot de passe que vous avez entré n\'est pas valide';
                        break;
                    case 'LOGIN_FAILED_EMAIL_NOT_VERIFIED':
                        errorMessage =
                            'Vous n’avez pas encore activé votre compte pour avoir accès. Veuillez vérifier votre email';
                        break;
                    default:
                        errorMessage =
                            'Erreur survenue lors de la connexion à webco';
                        break;
                }
                this.error = true;
                this.message = errorMessage;
        }
        );
      }
    }
  }

  add (a: number, b: number) {
    return a + b;
  }

  minus (a: number, b: number) {
    return a - b;
  }

}
