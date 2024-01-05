import { Component } from '@angular/core';
import { Pet } from 'src/app/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-new-pets',
  templateUrl: './new-pets.component.html',
  styleUrls: ['./new-pets.component.css']
})

export class NewPetsComponent {
  btnText = 'Compartilhar!';

  constructor(private petService: PetService) {}

  async createHandler(pet: Pet) {
    const formData = new FormData();

    formData.append('title', pet.title);
    formData.append('description', pet.description);
    pet.image && formData.append('image', pet.image);

    await this.petService.createPet(formData).subscribe();
  }
}
