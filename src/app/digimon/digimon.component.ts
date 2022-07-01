import { Component, OnInit } from '@angular/core';
import { AppEndpoints } from '../app.endpoints';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {

  constructor(private endpoint:AppEndpoints) { }

  ngOnInit(): void {
    this.get_values()
  }

   get_values(){

    this.endpoint.get_digimon_api().subscribe(res=>{
      console.log(res)
    })

  }


}
