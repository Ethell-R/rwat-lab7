import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [BookService]
})
export class AddBookComponent {
  newBook: Book = { id: 0, title: '', author: '', description: '' };

  constructor(private bookService: BookService) { }

  addBook(): void {
    console.log('Adding book:', this.newBook); // Debug log
    this.newBook.id = Date.now();
    this.bookService.addBook(this.newBook).subscribe({
      next: (book) => {
        console.log('Book added successfully:', book); // Confirm success
        alert(`Book "${book.title}" added successfully!`);
      },
      error: (error) => console.error('Error adding book:', error)
    });
  }
  
}
