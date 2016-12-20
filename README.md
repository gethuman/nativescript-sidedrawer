# NativeScript-SideDrawer
A Nativescript plugin that allows developers to simply integrate the infamous side drawer pattern.

iOS |  Android
-------- | ---------
![iOS](http://i.imgur.com/cnKqRJl.gif) | ![Android](http://i.imgur.com/KsfRZLl.gif)

## Features
- Smooth animations
- Pull from side of screen
- Rebound/bounce back open
- Tap off drawer to close
- Follows both Material and Human Interface guidelines

## Installation
```bash
tns plugin add nativescript-sidedrawer
```

## Example
Import the plugin.
```typescript
import { TnsSideDrawer } from 'nativescript-sidedrawer'
```

Build the drawer with `TnsSideDrawer.build` passing config options.
```typescript
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
```

Toggle the side drawer with `TnsSideDrawer.toggle`.
```typescript
TnsSideDrawer.toggle()
```

## Configuration
### Drawer
```typescript
TnsSideDrawerOptions {
	templates: Array<TnsSideDrawerItem> // see below
	textColor?: Color // color of all text including title, subtitle, and items
	headerBackgroundColor?: Color
	backgroundColor?: Color // background color under the header
	logoImage?: ImageSource // defaults to your app icon
	title?: string // large text in the header
	subtitle?: string // small text in the header
	listener: TnsSideDrawerOptionsListener // see below
	context?: any // see below
}
```

### Templates
Template icons **MUST** be a [resource](https://docs.nativescript.org/ui/images#load-images-from-a-resource) string.
```typescript
TnsSideDrawerItem {
	title: string
	androidIcon?: string
	iosIcon?: string
}
```

### Listener
The listener function **ONLY** gets called everytime a drawer item is successfully tapped.
```typescript
type TnsSideDrawerOptionsListener = (index: number) => void
```
You can optionally pass a *this context* to the `context` option.

## iOS Quirks
Because you can drag the edge of your screen to go back,

![back](https://cnet2.cbsistatic.com/img/MYRiTUkuSzBgOWfQnNPEYKnWmsY=/370x0/2013/09/12/cf8cd607-6de0-11e3-913e-14feb5ca9861/iOS_7_Gestures_Back.jpg)

you'll need to manually add and remove the gesture recognition by calling their methods and passing the `Page` instance. 

Let's say this is your home page.
```typescript
export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	TnsSideDrawer.addGesture(page)
}
export function onUnloaded(args: EventData) {
	let page: Page = <Page>args.object
	TnsSideDrawer.removeGesture(page)
}
```

## Android Quirks
None.

# Thanks to
[mikepenz](https://github.com/mikepenz) for the Android [MaterialDrawer](https://github.com/mikepenz/MaterialDrawer) implementation.


