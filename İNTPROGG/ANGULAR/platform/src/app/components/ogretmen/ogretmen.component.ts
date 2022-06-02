import { ogrt } from './../../models/ogrt';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { AlertService } from 'src/app/services/alert.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ogrt } from 'src/app/models/ogrt';

@Component({
  selector: 'app-ogretmen',
  templateUrl: './ogretmen.component.html',
  styleUrls: ['./ogretmen.component.css']
})
export class OgretmenComponent implements OnInit {

  kayitlar!: ogrt[];
  dataSource: any;
  displayedColumns = ['ogrtNo', 'ogrtAdsoyad', 'ogrtDogTarih', 'ogrtDersSayisi', 'islemler'];
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
    this.apiServis.OgretmenListe().subscribe(d => {
      this.kayitlar = d;
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Ekle() {

  }
  Duzenle(ogrt: Ogretmen) {

  }
  Sil(ogrt: Ogretmen) {
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "300px"
    });
    this.confirmDialogRef.componentInstance.dialogMesaj = ogr.ogrAdsoyad + " İsimli Öğretmen Silinecektir Onaylıyor musunuz?";
    this.confirmDialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.apiServis.OgretmenSil(ogr.ogrId).subscribe(s => {
          this.alertServis.AlertUygula(s);
          if (s.islem) {
            this.KayitGetir();
          }
        });
      }
    });
  }
}
