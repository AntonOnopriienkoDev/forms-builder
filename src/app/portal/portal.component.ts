import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkPortal,DomPortalHost} from '@angular/cdk/portal'
@Component({
  selector: 'app-portal',
  template: `<ng-container *cdkPortal><ng-content></ng-content></ng-container>`,
})
export class PortalComponent implements AfterViewInit,OnDestroy {
	@ViewChild(CdkPortal)
	private portal!: CdkPortal;
	private host!: DomPortalHost;
	targetDiv!:string 

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private applicationRef:ApplicationRef,
		private injector:Injector
	) { }
	
	ngAfterViewInit(): void {
		const creatorDiv = document.querySelector(`#${this.targetDiv}`)!
		this.host = new DomPortalHost(
			creatorDiv,
			this.componentFactoryResolver,
			this.applicationRef,
			this.injector
		);
		this.host.attach(this.portal)
	}	
	ngOnDestroy(): void {
		this.host.detach()
	}
}
