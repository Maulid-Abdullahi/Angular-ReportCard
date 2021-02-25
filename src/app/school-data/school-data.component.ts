import { Component, OnInit } from '@angular/core';
import { SchoolDataService, Data} from '../school-data.service';

@Component({
  selector: 'app-school-data',
  templateUrl: './school-data.component.html',
  styleUrls: ['./school-data.component.css']
})
export class SchoolDataComponent implements OnInit {

 data: any = [];

 subjectResult = [];

 studentPerformance = [];

  constructor(private schoolDataService: SchoolDataService) { }

  ngOnInit(): void {
    this.schoolDataService.getStudentData()
    .then(data => this.data.push(data));

    this.schoolDataService.getSubjectResult()
    .then(subjectResult => this.subjectResult = subjectResult);

    this.schoolDataService.getStudentPerformance()
    .then(studentPerformance => this.studentPerformance = studentPerformance);
  }



  

}

