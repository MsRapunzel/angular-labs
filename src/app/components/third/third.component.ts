import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  imports: [NgFor],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.refreshData();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  data: string[] = [];

  refreshData() {
    this.data = this.dataService.getData();
  }

  addItem(item: string) {
    this.dataService.addData(item);
    this.refreshData();
  }

  removeItem(item: string) {
    this.dataService.removeData(item);
    this.refreshData();
  }
}
