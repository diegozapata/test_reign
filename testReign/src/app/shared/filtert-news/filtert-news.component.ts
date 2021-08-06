import { zip } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-filtert-news',
  templateUrl: './filtert-news.component.html',
  styleUrls: ['./filtert-news.component.css'],
})
export class FiltertNewsComponent implements OnInit {
  language: string[] = ['angular', 'reactjs', 'vuejs'];
  languageForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.languageForm = this.formBuilder.group({
      language: [null, Validators.required],
      validacion: [{ disabled: true }],
    });

    this.languageForm.controls.validacion.disable();
  }

  onChange(event: any): void {
    console.log(this.languageForm.value.language);
  }
}
