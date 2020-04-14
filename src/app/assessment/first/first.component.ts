import { Component, OnInit, Inject } from '@angular/core';
import { Hits } from 'src/app/shared/model/Hits';
import { ResolveData } from '@angular/router';
import { AssesmentService } from 'src/app/shared/service/Assesment.service';
import { ResponseData } from 'src/app/shared/model/ResponseData';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/model/DialogData';


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

  /**
   * Class variable to handle received response from get API. 
   */
  objResposeData: ResponseData;

  /**
   * Table column names
   */
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];

  /**
   * Mata table datasource object.
   */
  hitsDataSource: MatTableDataSource<any>;

  /**
   * Member variable to handle filter.
   */
  objSearchKey: string;

  /**
   * Constructor
   * @param assesmentService : service object
   */
  constructor(
    private assesmentService: AssesmentService,
    public dialog: MatDialog
  ) { }

  /**
   * OnInit method
   */
  ngOnInit() {
    this.getData();
    setInterval(() => this.getData(), 10000);
  }

  /**
   * Method to pull data from service and handle
   */
  getData() {
    this.assesmentService.getAssesmentData().subscribe
      (
        (data: any) => {
          if (data != null) {
            this.objResposeData = data as ResponseData;
            this.lstHits = this.objResposeData.hits;
            this.hitsDataSource = new MatTableDataSource<Hits>(this.lstHits);

            this.hitsDataSource.filterPredicate = 
            (data: Hits, filtersJson: string) => {
                const matchFilter = [];
                const filters = JSON.parse(filtersJson);
          
                filters.forEach(filter => {
                  const val = data[filter.id] === null ? '' : data[filter.id];
                  matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
                });
                  return matchFilter.every(Boolean);
              };
          }
        }
      )
  }


  /**
   * Applying filter to keep search string in lowercase.
   */
  applyFilter(searchKey : string) {
    this.objSearchKey = searchKey;
    const tableFilters = [];
    tableFilters.push({
      id: 'title',
      value:  searchKey
    });

    this.hitsDataSource.filter = JSON.stringify(tableFilters);

  };

  /**
   * Filter clear button click event.
   */
  onSearchClear() {
    this.objSearchKey = '';
    this.applyFilter('');
  }

/**
 * Open dialog box with raw data on click or datatable row
 */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { jsonData:  this.objResposeData }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

/**
 * Dialog box componemt
 */
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
    this.dialogRef.close();
  }

}
