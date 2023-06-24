import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface User {id: number; name: string;}
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userInfo?: User;
  private userInfo$ = new BehaviorSubject<User | undefined>(undefined);

  constructor() { }
  updateUser(user:User):void {
    this.userInfo = {...user};
    this.userInfo$.next(this.userInfo);
    console.log(user)
  }
  getUserInfo(): Observable<User | undefined> {
    return this.userInfo$.asObservable();
  }

  public get user(): string {
    return this.userInfo?.name? this.userInfo.name : '';
  }
}
