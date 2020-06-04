import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Upload } from './upload'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesCollection: AngularFirestoreCollection<Upload>;
  images: Observable<Upload[]>;
  imageDoc: AngularFirestoreDocument<Upload>;

  //rolesDocument: AngularFirestoreDocument
  //roles: any
  constructor(private afs: AngularFirestore) { }

  init(id: string) {
    this.imagesCollection = this.afs.collection(`filesinfo/${id}/list/`);
    this.images = this.imagesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Upload;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }   

  getImages() {
    return this.images
  }
}
