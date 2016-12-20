# NativeScript-SideDrawer
A Nativescript plugin that allows developers to simply integrate the infamous side drawer pattern.

## Supported Platforms
- iOS
- Android

## Installation
```bash
tns plugin add nativescript-onesignal
```

## Usage
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




