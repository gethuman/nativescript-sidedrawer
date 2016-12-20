// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { Color } from 'color'
import { TnsSideDrawer } from 'nativescript-sidedrawer'



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage()
	TnsSideDrawer.addGesture(page)
}

export function onUnloaded(args: EventData) {
	let page: Page = <Page>args.object
	TnsSideDrawer.removeGesture(page)
}

class MainPage extends Observable {

	private _i: number = 0
	get i(): number {
		return this._i
	}
	set i(i: number) {
		this._i = i
		this.notifyPropertyChange('i', i)
	}

	constructor() {
		super()

		TnsSideDrawer.build({
			templates: [{
				title: 'Home',
				androidIcon: 'ic_home_white_24dp',
				iosIcon: 'ic_home_white',
			}, {
				title: 'Judgment Day',
				androidIcon: 'ic_gavel_white_24dp',
				iosIcon: 'ic_gavel_white',
			}, {
				title: 'Bank Roll',
				androidIcon: 'ic_account_balance_white_24dp',
				iosIcon: 'ic_account_balance_white',
			}, {
				title: 'Fix Stuff',
				androidIcon: 'ic_build_white_24dp',
				iosIcon: 'ic_build_white',
			}, {
				title: 'This Is Me',
				androidIcon: 'ic_account_circle_white_24dp',
				iosIcon: 'ic_account_circle_white',
			}],
			title: 'This App Name',
			subtitle: 'is just as awesome as this subtitle!',
			listener: (index) => {
				this.i = index
			},
			context: this,
		})
	}

	toggleit() {
		TnsSideDrawer.toggle()
	}

}


