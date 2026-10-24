import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { competition, Register } from '../IData';
interface Makhdoom extends JwtPayload {
  email?: string;
  password?: string;
  family_Name?: string;
  phoneNumber?: string;
  father_Confessor?: string;
  full_Name?: string;
  address?: string;
  stage?: any;
  role?: any;
  Phone_Number?: any;
  last_shared?: any;
  completed_competitions?: number;
  daily_series?: number;
  success_rate?: number;
  total_points?: number;
}
@Injectable({
  providedIn: 'root',
})
export class JeServiceTs {
  private http = inject(HttpClient);
  private loginSubject = new BehaviorSubject<boolean>(!this.isTokenExpired());
  public isllogedIn$ = this.loginSubject.asObservable();
  notifyloginSuccess() {
    this.loginSubject.next(!this.isTokenExpired());
  }
  logout() {
    localStorage.removeItem('token');
    this.loginSubject.next(false);
  }
  GetDecodedToken(): Makhdoom | null {
    var token = localStorage.getItem('token');
    if (!token) return null;
    if (token.split('.').length !== 3) {
      console.warn('token forma in invalid');
      return null;
    }
    try {
      const decoded: JwtPayload = jwtDecode<Makhdoom>(token!);
      return decoded;
    } catch (error) {
      console.error('failed to decode token', error);
      return null;
    }
  }
  isTokenExpired(): boolean {
    const decoded = this.GetDecodedToken();
    if (!decoded?.exp) return true;
    return decoded.exp * 1000 <= Date.now();
  }
  register(user: Register): Observable<any> {
    return this.http.post(`https://churchcomp.runasp.net/api/Auth/register`, user);
  }
  login(user: object): Observable<any> {
    return this.http.post(`https://churchcomp.runasp.net/api/Auth/login`, user);
  }
  getbook(book_id: number, group_id: number): Observable<any> {
    return this.http.get(`https://churchcomp.runasp.net/api/book/getbook/${book_id}/${group_id}`);
  }
  getbyfamily(name: string, family: string): Observable<any> {
    var params = new HttpParams().set('name', name).set('family', family);
    return this.http.get(`https://churchcomp.runasp.net/api/Book/getbyfamily`, { params });
  }
  getgroup(name: string, family: string, group_id: number): Observable<any> {
    var params = new HttpParams().set('name', name).set('family', family);
    return this.http.get(`https://churchcomp.runasp.net/api/Book/getbygroup/${group_id}`, {
      params,
    });
  }
  getallusers(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/User/get-all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getorder(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/User/get-order`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getuser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(
      `https://churchcomp.runasp.net/api/MyUser/GetMe
`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  GetCompetitionToday(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/MyUser/GetCompetitionToday`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getallcompetitions(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/Competition/get-all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  GetMyCompletedCompetitions(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/MyUser/GetMyCompletedCompetitions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveComp(comp: competition): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(`https://churchcomp.runasp.net/api/Competition/create`, comp, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getusercompetition(competition_id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/MyUser/get-by-id/${competition_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  submit(competition_id: number, answers: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(
      `https://churchcomp.runasp.net/api/MyUser/Complete/${competition_id}`,
      answers,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  Iscomplete(competition_id: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`https://churchcomp.runasp.net/api/MyUser/iscomplete/${competition_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
