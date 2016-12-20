//

import * as application from 'application'
import { Color } from 'color'
import { fromResource, ImageSource, fromNativeSource } from 'image-source'
import { ad } from 'utils/utils'
import { isDefined } from 'utils/types'
import { TnsSideDrawerItem, TnsSideDrawerOptions, TnsSideDrawerCommonClass } from './nativescript-sidedrawer.common'



export class TnsSideDrawerClass extends TnsSideDrawerCommonClass {

	private isBusy = false
	private isOpen = false
	private drawer: com.mikepenz.materialdrawer.Drawer

	build(opts: TnsSideDrawerOptions): any {
		if (super.build(opts)) {
			return
		}
		this.logoImage = (isDefined(opts.logoImage)) ? opts.logoImage : TnsSideDrawerClass.getAppIcon()

		let activity: android.app.Activity = application.android.foregroundActivity

		let profile = new com.mikepenz.materialdrawer.model.ProfileDrawerItem()
		profile.withIcon(this.logoImage.android)
		if (this.title) {
			profile.withName(this.title)
		}
		if (this.subtitle) {
			profile.withEmail(this.subtitle)
		}

		let bg = android.graphics.Bitmap.createBitmap(8, 8, android.graphics.Bitmap.Config.ARGB_8888)
		bg.eraseColor(this.headerBackgroundColor.android)

		let header = new com.mikepenz.materialdrawer.AccountHeaderBuilder()
		header.withActivity(activity)
		header.withHeaderBackground(new com.mikepenz.materialdrawer.holder.ImageHolder(bg))
		header.addProfiles([profile])
		header.withSelectionListEnabledForSingleProfile(false)
		header.withProfileImagesClickable(false)

		let items: Array<com.mikepenz.materialdrawer.model.AbstractDrawerItem> = []
		let i: number, len: number = this.templates.length
		for (i = 0; i < len; i++) {
			let template = this.templates[i]
			let item = new com.mikepenz.materialdrawer.model.PrimaryDrawerItem()
			item.withIdentifier(i)
			if (template.androidIcon) {
				item.withIcon(ad.resources.getDrawableId(template.androidIcon) as number)
				item.withIconColor(this.textColor.android)
			}
			item.withName(template.title)
			item.withSelectable(false)
			item.withTextColor(this.textColor.android)
			items.push(item)
		}

		let drawer = new com.mikepenz.materialdrawer.DrawerBuilder()
		drawer.withActivity(activity)
		drawer.withAccountHeader(header.build())
		drawer.withSliderBackgroundColor(this.backgroundColor.android)
		drawer.addDrawerItems(items)
		drawer.withSelectedItem(-1)
		// drawer.withTranslucentStatusBar(false)
		drawer.withOnDrawerItemClickListener(new com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener({
			onItemClick: (view: android.view.View, index: number, item: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean => {
				index-- // just cause...
				if (isDefined(this.context)) {
					this.listener.apply(this.context, [index])
				} else {
					this.listener(index)
				}
				return false
			},
		}))
		this.drawer = drawer.build()
	}

	toggle(force?: boolean) {
		if (force == true) {
			this.drawer.openDrawer()
		} else if (force == false) {
			this.drawer.closeDrawer()
		} else {
			this.drawer.openDrawer()
		}
	}

	open() {
		this.toggle(true)
	}

	close() {
		this.toggle(false)
	}

	addGesture() { }
	removeGesture() { }

	private static getAppIcon(): ImageSource {
		let nativeApp: android.app.Application = application.android.nativeApp
		let bundle = nativeApp.getPackageName()
		let drawable = nativeApp.getPackageManager().getApplicationIcon(bundle)
		return fromNativeSource(drawable)
	}

}

export const TnsSideDrawer = new TnsSideDrawerClass()
