import { Component, Input, Output, EventEmitter, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>()
  imageDefault = './assets/img/default.png'

  constructor(){
    //before render
     console.log('constructor', 'imgValue => ', this.img); 
  }

  ngOnchanges(){
    //before render
    //changes inputs --times

    console.log('ngOnchanges', 'imgValue => ', this.img); 
  }

  ngOnInit(): void {
    //async - fetch - promises --once time

    console.log('ngOnInit', 'imgValue => ', this.img); 
  }

  ngAfterViewInit(){
    //after render
    //handler children

    console.log('ngAfterViewInit'); 
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy')
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img)
  }
}
