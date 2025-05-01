import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-content-projector',
  standalone: false,
  templateUrl: './content-projector.component.html',
  styleUrl: './content-projector.component.scss'
})
export class ContentProjectorComponent implements AfterContentInit {
  @ContentChild('childContent') projector!:ContentProjectorComponent;

  
  @ContentChildren('childContent') projectorList!:ContentProjectorComponent;


  ngAfterContentInit(): void {
    console.log('accessing the content',this.projector);
    console.log('list of content',this.projectorList);
  }

}
