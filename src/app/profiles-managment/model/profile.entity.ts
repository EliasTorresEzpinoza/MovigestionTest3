export class Profile {
}


export interface Activity {
  id: number;
  'id-user': string;
  type: string;
  description: string;
  dateTime: {
    date: string;
    time: string;
  };
}

export interface Condition {
  id: number;
  licensePlate: string;
  model: string;
  serialNumber: string;
}

export interface Delivery {
  id: number;
  'id-user': string;
  destiny: string;
  description: string;
  dateTime: {
    date: string;
    time: string;
  };
  status: string;
}

