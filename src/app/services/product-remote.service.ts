import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/Product';

  private readonly httpClient = inject(HttpClient);

  override getList(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    const query: { [key: string]: string | number } = { _page: pageIndex, _limit: pageSize };
    if (name) query['ProductName'] = name;
    query['isShow'] = 'true';
    const params = new HttpParams({ fromObject: query });
    return this.httpClient.get<Product[]>(this.url, { params });
  }

  override getById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${productId}`);
  }

  override getCount(name?: string): Observable<number> {
    const option = name ? { params: new HttpParams().set('name', name) } : {};
    return this.httpClient.get<Product[]>(this.url, option).pipe(map((data) => data.length));
  }
}
