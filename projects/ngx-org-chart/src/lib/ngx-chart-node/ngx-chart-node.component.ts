import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'ngx-chart-node',
  templateUrl: './ngx-chart-node.component.html',
  styleUrls: ['./ngx-chart-node.component.scss'],
  standalone:true,
  imports: [NgClass,NgIf,NgStyle]
})
export class NgxChartNodeComponent {

  @Input()
  node?: INode;

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() itemClick = new EventEmitter<INode>();
}
