import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { appConfig } from './app.config';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private firestore: Firestore = inject(Firestore);


}
