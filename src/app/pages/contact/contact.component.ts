import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit() {
    alert('Thanks for reaching out! This is a static form. You can connect it with Formspree, Firebase, or an email API later.');
  }
  
}
