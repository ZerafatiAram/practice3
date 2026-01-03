import { Injectable } from '@angular/core';
import { Members } from './members-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDService<Members>{
  override data: Members[] = [
    { id: 1, name: 'علی', lastname: 'سهرابی', tel: '09372225454', address: 'استان همدان شهر همدان' },
    { id: 2, name: 'حمید', lastname: 'محمدی', tel: '09372225454', address: 'استان همدان شهر همدان' },
    { id: 3, name: 'فاطمه', lastname: 'امینی', tel: '09372225454', address: 'استان همدان شهر همدان' },
    { id: 4, name: 'کیمیا', lastname: 'یوسفی', tel: '09372225454', address: 'استان همدان شهر همدان' },
  ];

}
