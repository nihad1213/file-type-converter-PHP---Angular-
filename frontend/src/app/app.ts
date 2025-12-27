import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CommonModule],
  providers: [ConverterService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  files: { [key: string]: File | null } = {};

  constructor(private converter: ConverterService) {}

  onFileChange(event: any, conversionType: string) {
    this.files[conversionType] = event.target.files[0];
  }

  convert(conversionType: string, endpoint: string) {
    const file = this.files[conversionType];
    if (!file) {
      alert('Please select a file first');
      return;
    }

    this.converter.convert(file, endpoint).subscribe({
      next: (response: any) => {
        alert('Success! File: ' + response.file);
        window.open('http://localhost:8080' + response.path);
      },
      error: (error) => {
        alert('Error: ' + error.error.message);
      }
    });
  }

  // Image conversions
  convertBmpToJpeg() {
    this.convert('bmp-to-jpeg', '/image/bmp-to-jpeg');
  }

  convertGifToPng() {
    this.convert('gif-to-png', '/image/gif-to-png');
  }

  convertJpegToBmp() {
    this.convert('jpeg-to-bmp', '/image/jpeg-to-bmp');
  }

  convertJpegToJpg() {
    this.convert('jpeg-to-jpg', '/image/jpeg-to-jpg');
  }

  convertJpegToPng() {
    this.convert('jpeg-to-png', '/image/jpeg-to-png');
  }

  convertJpegToWebp() {
    this.convert('jpeg-to-webp', '/image/jpeg-to-webp');
  }

  convertJpgToJpeg() {
    this.convert('jpg-to-jpeg', '/image/jpg-to-jpeg');
  }

  convertPngToGif() {
    this.convert('png-to-gif', '/image/png-to-gif');
  }

  convertPngToJpeg() {
    this.convert('png-to-jpeg', '/image/png-to-jpeg');
  }

  convertWebpToJpeg() {
    this.convert('webp-to-jpeg', '/image/webp-to-jpeg');
  }

  // Document conversions
  convertEpubToPdf() {
    this.convert('epub-to-pdf', '/document/epub-to-pdf');
  }

  convertExcelToPdf() {
    this.convert('excel-to-pdf', '/document/excel-to-pdf');
  }

  convertPdfToExcel() {
    this.convert('pdf-to-excel', '/document/pdf-to-excel');
  }

  convertPdfToWord() {
    this.convert('pdf-to-word', '/document/pdf-to-word');
  }

  convertWordToPdf() {
    this.convert('word-to-pdf', '/document/word-to-pdf');
  }
}
