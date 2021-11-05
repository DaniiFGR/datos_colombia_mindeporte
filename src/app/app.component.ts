import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { AppService } from './app.service';
import { Subject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  articulos:any = null;
  displayedColumns: string[] = ['radicado', 'fecha_radicado', 'tipo', 'asunto', 'empresa', 'destinatario', 'dependencia_destino'];
  dataSource:any = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private AppServicio: AppService) { }
  ngOnInit() {
    this.obtener();
  }

  obtener(){
    this.AppServicio.obtener().subscribe(
      result => {
        this.dataSource.data = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}





