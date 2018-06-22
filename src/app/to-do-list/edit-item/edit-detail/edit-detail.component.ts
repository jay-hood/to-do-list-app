import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToDoListService } from '../../../shared/services/to-do-list.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  @Input() itemForm: FormGroup;
  @Input() depth: number;
  @Input() editMode: boolean;
  inputColor: string;

  constructor(
    private fb: FormBuilder,
    private list: ToDoListService) { }

  ngOnInit() {
    // console.log(this.itemForm);
    this.inputColor = this.getInputColor(this.depth);
  }

  getInputColor(depth: number) {
    const lastdigitStr = depth.toString().split('').pop();
    const lastdigit = parseInt(lastdigitStr, 10);
    switch (lastdigit) {
      case 0 : {
        return '#321DFE';
      }
      case 1: {
        return '#4B00FE';
      }
      case 2: {
        return '#8600FE';
      }
      case 3: {
        return '#AE00FE';
      }
      case 4: {
        return '#F700D6';
      }
      case 5: {
        return '#F60099';
      }
      case 6: {
        return '#F50048';
      }
      case 7: {
        return '#F50032';
      }
      case 8: {
        return '#F51520';
      }
      case 9: {
        return '#F50420';
      }
    }
  }

  onAddChild() {
    // console.log(this.itemForm.value);
    (<FormArray>this.itemForm.get('items')).push(this.fb.group({
      id: this.list.getMaxId(this.list.getItems()),
      details: '',
      date: new Date(),
      items: new FormArray([])
    }));
  }

}
