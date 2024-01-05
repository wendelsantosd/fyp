import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/Pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
  @Output() onSubmit = new EventEmitter<Pet>();
  @Input() btnText!: string;

  petForm!: FormGroup;

  ngOnInit(): void {
    this.petForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  };

  get title() {
    return this.petForm.get('title')!;
  }

  get description() {
    return this.petForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    
    this.petForm.patchValue({ image: file })
  }
  
  submit() {
    if(this.petForm.invalid) return;
    console.log(this.petForm.value);
    this.onSubmit.emit(this.petForm.value);
  }
}
