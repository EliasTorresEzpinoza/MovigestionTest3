import { Component, OnInit } from '@angular/core';
import { Activity, Condition, Delivery } from "../../model/profile.entity";
import {ProfileApiService} from "../../services/profile-api.service";

@Component({
  selector: 'app-profile-home-businessman',
  templateUrl: './profile-home-businessman.component.html',
  styleUrl: './profile-home-businessman.component.css'
})
export class ProfileHomeBusinessmanComponent implements OnInit  {
  activities: Activity[] = [];
  conditions: Condition[] = [];
  deliveries: Delivery[] = [];

  constructor(private apiService: ProfileApiService) { }

  ngOnInit(): void {
    this.apiService.getAllActivities().subscribe(data => {
      this.activities = data;
    });
    this.apiService.getAllCondition().subscribe(data => {
      this.conditions = data;
    });
    this.apiService.getAllDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }
}

