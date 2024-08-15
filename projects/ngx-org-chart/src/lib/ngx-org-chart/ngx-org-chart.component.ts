import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';
import { NgxChartDesignerComponent } from '../ngx-chart-designer/ngx-chart-designer.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: ['./ngx-org-chart.component.scss'],
  standalone:true,
  imports:[NgxChartDesignerComponent,NgFor,NgIf]
})
export class NgxOrgChartComponent {

  @Input()
  nodes?: INode[];

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() itemClick = new EventEmitter<INode>();
}
