import { Component, ElementRef, Inject, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { gsap } from "gsap";
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin); 
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

  @ViewChild('project1', { static: true }) project1!: ElementRef<HTMLDivElement>;
  @ViewChild('project2', { static: true }) project2!: ElementRef<HTMLDivElement>;
  @ViewChild('project3', { static: true }) project3!: ElementRef<HTMLDivElement>;
  @ViewChild('project4', { static: true }) project4!: ElementRef<HTMLDivElement>;

  @ViewChild('projectDesc1', { static: true }) projectDesc1!: ElementRef<HTMLDivElement>;
  @ViewChild('projectDesc2', { static: true }) projectDesc2!: ElementRef<HTMLDivElement>;
  @ViewChild('projectDesc3', { static: true }) projectDesc3!: ElementRef<HTMLDivElement>;
  @ViewChild('projectDesc4', { static: true }) projectDesc4!: ElementRef<HTMLDivElement>;

  @ViewChild('projectImg1', { static: true }) projectImg1!: ElementRef<HTMLDivElement>;
  @ViewChild('projectImg2', { static: true }) projectImg2!: ElementRef<HTMLDivElement>;
  @ViewChild('projectImg3', { static: true }) projectImg3!: ElementRef<HTMLDivElement>;
  @ViewChild('projectImg4', { static: true }) projectImg4!: ElementRef<HTMLDivElement>;


  


  title = 'mark-daquis-portfolio';
  isNavToggled: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router) {}

  ngOnInit(): void {
    
    this.initialAnimation();
    this.initAboutAnimation();
    this.initHomeSectionScroll();
    this.initProjectSectionScroll();
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
    });
  }

  initAboutAnimation() {
    const words = ["ABOUT MARK.", "A MOBILE DEVELOPER.", "A WEB DEVELOPER.", "A FATHER."]

    let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
    let masterTl = gsap.timeline({repeat: -1}).pause()
    let boxTl = gsap.timeline()

    boxTl.to('.about-me', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
      // .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
      .to('.about-me', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
      .to('.about-me', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
    words.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
      tl.to('.text', {duration: 1, text: word})
      masterTl.add(tl)
    })
  }

  initHomeSectionScroll() {
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
      pin: true,
    });
  }

  initProjectSectionScroll() {

    const elemList = [
      {
        project: this.project1,
        desc: this.projectDesc1,
        img: this.projectImg1,
      },
      {
        project: this.project2,
        desc: this.projectDesc2,
        img: this.projectImg2,
      },
      {
        project: this.project3,
        desc: this.projectDesc3,
        img: this.projectImg3,
      },
      {
        project: this.project4,
        desc: this.projectDesc4,
        img: this.projectImg4,
      }
    ]

    elemList.forEach((element) => {
      gsap.fromTo(element.desc.nativeElement,
        {
            x : 0,
            y : -100,
            autoAlpha: 0
        }, 
        {
          scrollTrigger: {
            trigger: element.project.nativeElement,
            start: "top bottom",
            scrub: 2,
            toggleActions: "restart pause reverse pause",
          
            //   onEnter: function() { animateFrom(elem) }, 
          } as gsap.plugins.ScrollTriggerInstanceVars,
          duration: 5, 
          x: 0,
          y: 0, 
          autoAlpha: 1, 
          ease: "expo", 
          overwrite: "auto"
       }
      );

      gsap.fromTo(element.img.nativeElement,
        {
            x : element.img.nativeElement.classList.contains('from-left') ? -100 : 100,
            y : 0,
            autoAlpha: 0
        }, 
        {
          scrollTrigger: {
            trigger: element.project.nativeElement,
            start: "top bottom",
            scrub: 2,
            toggleActions: "restart pause reverse pause",
          
            //   onEnter: function() { animateFrom(elem) }, 
          } as gsap.plugins.ScrollTriggerInstanceVars,
          duration: 5, 
          x: 0,
          y: 0, 
          autoAlpha: 1, 
          ease: "expo", 
          overwrite: "auto"
       }
      );
    });
  }

  
  
}
