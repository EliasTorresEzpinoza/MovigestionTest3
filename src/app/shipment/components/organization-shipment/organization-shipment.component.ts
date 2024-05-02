import { Component, OnInit } from '@angular/core';

import { ShipmentApiService } from '../../services/shipment-api.service';

@Component({
  selector: 'app-organization-shipment',
  templateUrl: './organization-shipment.component.html',
  styleUrl: './organization-shipment.component.css'
})
export class OrganizationShipmentComponent implements OnInit {
  //shipmentsApi: ShipmentApiService;
  shipments: any[] = [];
  shipment: any = {};
  submitted = false;
  shipmentDialog = false;
  selectedShipment: any = null;
  shipmentDetailsDialog = false;

  constructor() {
    //this.shipmentsApi = new ShipmentApiService();
  }

  ngOnInit(): void {
    this.getDataShipment();
  }

  async getDataShipment(): Promise<void> {
    const response = await this.shipmentsApi.getAllShipments();
    const shipments = response.data;
    for (let shipment of shipments) {
      const userResponse = await this.shipmentsApi.findUserByID(shipment['id-user']);
      const user = userResponse.data[0];
      shipment.driverName = `${user.name} ${user.lastName}`;
    }
    this.shipments = shipments;
  }

  showShipmentDetails(shipment: any): void {
    this.selectedShipment = shipment;
    this.shipmentDetailsDialog = true;
  }

  hideShipmentDetailsDialog(): void {
    this.shipmentDetailsDialog = false;
  }

  newItem(): void {
    this.shipment = {
      driverName: '',
      destiny: '',
      description: '',
      dateTime: {
        date: '',
        time: '',
      },
      status: 'Programmed',
    };
    this.submitted = false;
    this.shipmentDialog = true;
  }

  hideDialog(): void {
    this.shipmentDialog = false;
    this.submitted = false;
  }

  saveShipment(): void {
    if (!this.shipment.driverName || !this.shipment.destiny || !this.shipment.description || !this.shipment.dateTime.date || !this.shipment.dateTime.time) {
      this.submitted = true;
      return;
    }
    this.shipmentDialog = false;
    this.submitted = false;
    alert('Se agregó con éxito');
  }
}


