import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Ogrenci } from 'src/app/models/Ogrenci';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { AlertService } from 'src/app/services/alert.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-ogrenci',
  templateUrl: './ogrenci.component.html',
  styleUrls: ['./ogrenci.component.css']
})
export class OgrenciComponent implements OnInit {
  kayitlar!: Ogrenci[];
  dataSource: any;
  displayedColumns = ['ogrNo', 'ogrAdsoyad', 'ogrDogTarih', 'ogrDersSayisi', 'islemler'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(
    public apiServis: ApiService,
    public matDialog: MatDialog,
    public alertServis: AlertService,
  ) { }

  ngOnInit() {
    this.KayitGetir();
  }
  KayitGetir() {
    this.apiServis.OgrenciListe().subscribe(d => {
      this.kayitlar = d;
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Ekle() {

  }
  Duzenle(ogr: Ogrenci) {

  }
  Sil(ogr: Ogrenci) {
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "300px"
    });
    this.confirmDialogRef.componentInstance.dialogMesaj = ogr.ogrAdsoyad + " İsimli Öğrenci Silinecektir Onaylıyor musunuz?";
    this.confirmDialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.apiServis.OgrenciSil(ogr.ogrId).subscribe(s => {
          this.alertServis.AlertUygula(s);
          if (s.islem) {
            this.KayitGetir();
          }
        });
      }
    });
  }
}
