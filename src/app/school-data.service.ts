import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data{
  student_name: string;
  student_admission_number: string;
  student_photo: string;
  exam_name: string;
	class_name: string;
	principals_remarks: string;
	class_teachers_remarks: string;
  mean_grade: string;

 overall_position: {
		deviation: string,
		position_out_of: string,
		position: string
	},
  stream_position: {
		deviation: string,
		position_out_of: string,
		position: string
  },
  mean_marks: {
		deviation: string,
		avg_score: string
  },
  
  subject_results: [
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation:string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation:string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		},
		{
			rank_out_of: string,
			subject_name: string,
			deviation: string,
			grade: string,
			comment: string,
			rank: string,
			score: string
		}
  ],
  
  student_performance_over_time: [
		{
			exam_name: string,
			avg_score:string
		},
		{
			exam_name:string,
			avg_score:string
		},
		{
			exam_name:string,
			avg_score: string
		},
		{
			exam_name: string,
			avg_score: string
		},
		{
			exam_name: string,
		  avg_score: string
		},
		{
			exam_name: string,
			avg_score: string
		}
	]

}

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {
  constructor(private http: HttpClient) {}


    getStudentData() {
      return this.http.get<any>('assets/data.json')
        .toPromise()
        .then(res => <Data[]>res)
        .then(data => { return data; });
      }

      getSubjectResult() {
        return this.http.get<any>('assets/data.json')
          .toPromise()
          .then(res => <Data[]>res.subject_results)
          .then(data => { return data; });
        }

        getStudentPerformance(){
          return this.http.get<any>('assets/data.json')
          .toPromise()
          .then(res => <Data[]>res.student_performance_over_time)
          .then(data => { return data; });

        }
 
    
}

