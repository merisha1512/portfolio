import { Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark = signal<boolean>(this.getInitialTheme());

  isDark = this._isDark.asReadonly();

  toggleTheme() {
    this._isDark.update(val => {
      const newVal = !val;

      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', newVal);
        localStorage.setItem('theme', newVal ? 'dark' : 'light');
      }

      return newVal;
    });
  }

  private getInitialTheme(): boolean {
    if (typeof window === 'undefined') return false;

    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
