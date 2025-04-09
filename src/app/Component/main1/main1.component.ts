import { Component } from '@angular/core';

@Component({
  selector: 'app-main1',
  imports: [],
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.css'
})
export class Main1Component {

  services =[
    {
      img:'assets/img1.jpg',
      types:'Business & Enterprise Solutions',
      des:'ERP, CRM, HRMS '
    },
    {
      img:'assets/webb.png',
      types:'Web & Mobile Development',
      des:'E-commerce, Portfolio, Apps '
    },
    {
      img:'assets/web2.png',
      types:'Cloud & IT Services',
      des:'Cloud, Cybersecurity, Databases'
    },
    {
      img:'assets/web4.webp',
      types:'AI & Automation',
      des:'AI Chatbots, RPA, BI '
    },
    {
      img:'assets/web5.jpg',
      types:'Emerging Tech',
      des:'IoT, Blockchain, AR/VR '
    },
    {
      img:'assets/web6.png',
      types:'IT Support & Consultancy',
      des:'Maintenance, Helpdesk, Consultancy'
    }
  ]
}
