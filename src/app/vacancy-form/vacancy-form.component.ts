import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {
  imageM: File;
  imageD: File;
  vacancyForm: FormGroup;
  limitOfChar = 100;
  characters;

  description = {
    height: '300px',
  };

  smDescription = {
    height: '100px',
  };

  conf = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{header: 1}, {header: 2}],
      [{list: 'ordered'}, {list: 'bullet'}],
      [{script: 'sub'}, {script: 'super'}],
      [{header: [1, 2, 3, 4, 5, 6, false]}],
      [{color: []}, {background: []}],
      ['clean']
    ]
  };

  ngOnInit() {
    this.vacancyForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      descript: new FormControl(null, Validators.required),
      smDescript: new FormControl(null, Validators.required),
      imageM: new FormControl(null, Validators.required),
      imageD: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      startDate: new FormControl(this.getDate(), Validators.required),
      endDate: new FormControl(null, Validators.required)
    });

  }

  onSubmit() {
    this.vacancyForm.value.imageM = this.imageM;
    this.vacancyForm.value.imageD = this.imageD;
    this.vacancyForm.value.startDate = this.dateToNum(this.vacancyForm.value.startDate);
    this.vacancyForm.value.endDate = this.dateToNum(this.vacancyForm.value.endDate);
    console.log(this.vacancyForm);
  }

  limit(len): void {
    this.characters = len.text;
    if (len.text.length > this.limitOfChar) {
      len.editor.deleteText(this.limitOfChar, len.editor.getLength());
    }
  }

  onChange(givenFiles, MorD): void {
    if (MorD) {
      this.imageM = givenFiles[0];
    } else {
      this.imageD = givenFiles[0];
    }
  }

  dateToNum(date: any): number {
    const dt = new Date(date);
    return dt.getTime();
  }

  getDate() {
    return new Date().toJSON().slice(0, 10);
  }
}
