import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  texts: string[] = ["Portfolio Web", "Emerging Tech", "Web Apps", "Cloud & IT Services","AI & Automation"];
  displayedText: string = "";
  textIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 300; // Normal typing speed
  deletingSpeed: number = 50; // Speed while deleting

  ngOnInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    setInterval(() => {
      let currentText = this.texts[this.textIndex] || ""; // Ensure it's never undefined

      if (!this.isDeleting) {
        this.displayedText = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentText.length) {
          this.isDeleting = true;
          setTimeout(() => {}, 1500); // Pause before deleting
        }
      } else {
        this.displayedText = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
      }
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}