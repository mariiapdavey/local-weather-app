import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule

           ],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {

}
