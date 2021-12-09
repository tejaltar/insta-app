import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagram';
  user$

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.getUser(1);
  }

  getUser(id) {
    this.dataService.getUsers().subscribe((users) => {
      this.user$ = users.find(user => user.id === id)
    })
  }
}

