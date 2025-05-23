// src/app/env.service.ts
import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public apiUrl = window.__env.apiUrl;
  public appId: string = window.__env.appId;
}
