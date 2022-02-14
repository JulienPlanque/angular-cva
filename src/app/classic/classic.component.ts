import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {

  form = this.formBuilder.group({
    totalQuality:[-10,[Validators.required,Validators.max(100)]],
    totalQualityControlConstructor:[-10,[Validators.required,Validators.max(100)]],
  });

  constructor(private readonly formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
       console.log('value change', this.form.controls.totalQuality.errors, this.form.controls.totalQualityControlConstructor.errors);
     });
  }

}
