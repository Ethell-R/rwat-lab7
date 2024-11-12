import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent {
  books: Book[] = [];
  searchTerm: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  searchBooks(): void {
    this.books = this.books.filter(book => book.title.includes(this.searchTerm));
  }
}
