import { Component, OnInit } from '@angular/core';
import { Hits } from 'src/app/shared/model/Hits';
import { ResolveData } from '@angular/router';
import { AssesmentService } from 'src/app/shared/service/Assesment.service';
import { ResponseData } from 'src/app/shared/model/ResponseData';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  /**
   * Class variable of hits to bind with datatable.
   */
  lstHits: Hits[];
  
  objResposeData: ResponseData;

  displayedColumns : string[] = ['title', 'url', 'created_at' ,'author'];

  /**
   * Mata table datasource object.
   */
  hitsDataSource : MatTableDataSource<any>;

  searchKey: string;

  /**
   * Constructor
   * @param assesmentService : service object
   */
  constructor(
    private assesmentService: AssesmentService,
  ) { }

  /**
   * OnInit method
   */
  ngOnInit() {
    this.getData();
    setInterval(() => this.getData(), 10000);
  }

  /**
   * 
   */
  getData() {
    this.assesmentService.getAssesmentData().subscribe
    (
      (data: any) => {
        if (data != null) {
          this.objResposeData = data as ResponseData;
          this.lstHits = this.objResposeData.hits;
          this.hitsDataSource = new MatTableDataSource<Hits>(this.lstHits);
        }
      }
    )
  }


  /**
   * Applying filter to keep search string in lowercase.
   */
  applyFilter() {
    this.hitsDataSource.filter = this.searchKey.trim().toLowerCase();
   
  };

  /**
   * 
   */
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  /**
   * load raw Json
   */
  showRawJson(){
   alert(this.objResposeData);
  }
}
