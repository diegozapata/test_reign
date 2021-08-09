import { zip } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersistenceUtilService } from 'src/app/services/persistence.service';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ExampleData } from '../../models/news.model';

@Component({
  selector: 'app-filtert-news',
  templateUrl: './filtert-news.component.html',
  styleUrls: ['./filtert-news.component.css'],
})
export class FiltertNewsComponent implements OnInit {
  public exampleData!: Array<Select2OptionData>;
  public options!: Options;
  language = [
    {
      model: 'angular',
      img: `http://localhost:4200/assets/img/image-138.png`,
    },
    {
      model: 'reactjs',
      img: `../../../assets/img/image-140.png`,
    },
    {
      model: 'vuejs',
      img: `../../../assets/img/image-141.png`,
    },
  ];

  languageForm!: FormGroup;
  selectLanguage!: string;
  @Output() controllerFilter = new EventEmitter<{
    selectLanguage: string;
  }>();
  constructor(
    private formBuilder: FormBuilder,
    private persistenceUtilService: PersistenceUtilService
  ) {}

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'angular',
        text:
          `<span><img src="../../../assets/img/image-138.png"/></span>` +
          ' angular',
      },
      {
        id: 'reactjs',
        text:
          `<span><img src="../../../assets/img/image-140.png"/></span>` +
          ' reactjs',
      },
      {
        id: 'vuejs',
        text:
          '<span><img src="../../../assets/img/image-141.png"/></span>' +
          ' vuejs',
      },
    ];

    this.options = {
      multiple: false,
      closeOnSelect: true,
      width: '300',
      allowClear: true,
      disabled: false,
      minimumResultsForSearch: -1,
    };
    this.initForm();
    this.reLoad();
  }

  initForm(): void {
    this.languageForm = this.formBuilder.group({
      language: [null, Validators.required],
      validacion: [{ disabled: true }],
    });

    this.languageForm.controls.validacion.disable();
  }

  onChange(event: any): void {
    this.selectLanguage = this.languageForm.value.language;
    this.controllerFilter.emit({
      selectLanguage: this.selectLanguage,
    });
  }
  reLoad(): void {
    const persistence = this.persistenceUtilService.getLocal('nameFilter');
    if (persistence) {
      this.languageForm.controls.language.setValue(persistence);
      this.selectLanguage = this.languageForm.value.language;
    }
  }
}
