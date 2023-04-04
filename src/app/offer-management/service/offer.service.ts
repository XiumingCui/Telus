import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../../models/offer';

@Injectable()
export class OfferService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Offer[]> {
    return this.http.get<Offer[]>('/api/Offers');
  }

  getById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`/api/Offers/${id}`);
  }

  create(data: Partial<Offer>) {
    return this.http.post('/api/Offers', data);
  }

  delete(id: number) {
    return this.http.delete(`/api/Offers/${id}`);
  }

  removeUserFromOffer(userId: number, OfferId: number) {
    return this.http.post(`/api/Offers/${OfferId}/remove/${userId}`, null);
  }
}
