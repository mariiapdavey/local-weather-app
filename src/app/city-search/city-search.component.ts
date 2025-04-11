import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            CommonModule
            

           ],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(2)])


  constructor(){
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      searchValue => {
        if(!this.search.invalid)
          this.searchEvent.emit(searchValue??undefined)
      }
    )
  }
}
