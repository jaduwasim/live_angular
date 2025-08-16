import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/designations';
import { error } from 'console';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit {

  designationList : IDesignation[] = [];
  masterService = inject(MasterService);


  ngOnInit(): void {
    this.masterService.getAllDesignation().subscribe((res:APIResponseModel)=>{
      this.designationList = res.data;
    },error=>{
      alert("API error/ Network Down")
    })
  }


}
