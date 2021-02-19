import { Component, ElementRef, Inject, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
gsap.registerPlugin(ScrollTrigger, Draggable); 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('home', { static: true }) home!: ElementRef<HTMLDivElement>;
  @ViewChild('myname', { static: true }) myname!: ElementRef<HTMLDivElement>;
  @ViewChild('navs',{ static: true }) navs!: ElementRef<HTMLDivElement>;
  @ViewChild('occupation', { static: true }) occupation!: ElementRef<HTMLDivElement>;


  title = 'mark-daquis-portfolio';
  isNavToggled: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router) {}

  ngOnInit(): void {
    this.initialAnimation();
    this.initFirstSetionScroll()
  }

  toggleDrawer() {
    this.isNavToggled = !this.isNavToggled;
  }

  initialAnimation(): void {
    gsap.from(this.navs.nativeElement.childNodes, {
      duration: 1,
      opacity: 0,
      y: -20,
      stagger: .5,
      delay: 0.5
    })
  }

  initFirstSetionScroll() {
    gsap.to(this.navs.nativeElement, {
      scrollTrigger: {
        trigger: this.home.nativeElement,
        start: "top top",
        
        scrub: 2,
        toggleActions: "restart pause reverse pause"
      } as gsap.plugins.ScrollTriggerInstanceVars,
     opacity: 0,
     marginLeft: -500,
    })
    gsap.to(this.myname.nativeElement, {
      scrollTrigger: {
        trigger: this.home.nativeElement,
        start: "top top",
        
        scrub: 2,
        toggleActions: "restart pause reverse pause"
      } as gsap.plugins.ScrollTriggerInstanceVars,
     opacity: 0,
     marginTop: -300,
    })
    gsap.to(this.occupation.nativeElement, {
      scrollTrigger: {
        trigger: this.home.nativeElement,
        start: "top top",
        
        scrub: 2,
        toggleActions: "restart pause reverse pause"
      } as gsap.plugins.ScrollTriggerInstanceVars,
     opacity: 0,
     marginRight: -300,
     marginBottom: -300,
    })

    ScrollTrigger.create({
      trigger: this.home.nativeElement,
      start: "top top",
      // pinSpacing: false,
      pin: true,
    });
  }
}
