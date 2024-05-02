
import { Component, OnInit } from '@angular/core';
import { Activity, Condition, Delivery } from "../../model/profile.entity";
import {ProfileApiService} from "../../services/profile-api.service";

@Component({
  selector: 'app-profile-home-driver',
  templateUrl: './profile-home-driver.component.html',
  styleUrl: './profile-home-driver.component.css'
})
export class ProfileHomeDriverComponent implements OnInit  {
  activities: Activity[] = [];
  conditions: Condition[] = [];
  deliveries: Delivery[] = [];

  constructor(private apiService: ProfileApiService) { }

  ngOnInit(): void {
    this.apiService.getAllActivities().subscribe(data => {
      this.activities = data;
    });
    this.apiService.getAllDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }
}
