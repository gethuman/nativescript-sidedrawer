
declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class AccountHeader extends java.lang.Object {
				public static NAVIGATION_DRAWER_ACCOUNT_ASPECT_RATIO: number;
				public static BUNDLE_SELECTION_HEADER: string;
				public mAccountHeaderBuilder: com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public removeProfile(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile): void;
				public getHeaderBackgroundView(): android.widget.ImageView;
				public setActiveProfile(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile, param1: boolean): void;
				public setActiveProfile(param0: number, param1: boolean): void;
				public updateProfileByIdentifier(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile): void;
				public addProfile(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile, param1: number): void;
				public setSelectionSecondLine(param0: string): void;
				public setDrawer(param0: com.mikepenz.materialdrawer.Drawer): void;
				public setActiveProfile(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile): void;
				public isSelectionListShown(): boolean;
				public setSelectionSecondLineShown(param0: boolean): void;
				public removeProfileByIdentifier(param0: number): void;
				public setHeaderBackground(param0: com.mikepenz.materialdrawer.holder.ImageHolder): void;
				public setActiveProfile(param0: number): void;
				public getActiveProfile(): com.mikepenz.materialdrawer.model.interfaces.IProfile;
				public clear(): void;
				public setSelectionFirstLineShown(param0: boolean): void;
				public getView(): android.view.View;
				public saveInstanceState(param0: android.os.Bundle): android.os.Bundle;
				public getProfiles(): java.util.List;
				public removeProfile(param0: number): void;
				public setBackgroundRes(param0: number): void;
				public getAccountHeaderBuilder(): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public setSelectionFirstLine(param0: string): void;
				public addProfiles(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IProfile>): void;
				public setBackground(param0: android.graphics.drawable.Drawable): void;
				public constructor(param0: com.mikepenz.materialdrawer.AccountHeaderBuilder);
				public updateProfile(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile): void;
				public toggleSelectionList(param0: android.content.Context): void;
				public setProfiles(param0: java.util.List): void;
			}
			export module AccountHeader {
				export class OnAccountHeaderItemLongClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.AccountHeader$OnAccountHeaderItemLongClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onProfileLongClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
					});
					public onProfileLongClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
				}
				export class OnAccountHeaderListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.AccountHeader$OnAccountHeaderListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onProfileChanged(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
					});
					public onProfileChanged(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
				}
				export class OnAccountHeaderProfileImageListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.AccountHeader$OnAccountHeaderProfileImageListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onProfileImageClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
						onProfileImageLongClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
					});
					public onProfileImageLongClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
					public onProfileImageClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile, param2: boolean): boolean;
				}
				export class OnAccountHeaderSelectionViewClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.AccountHeader$OnAccountHeaderSelectionViewClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile): boolean;
					});
					public onClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IProfile): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class AccountHeaderBuilder extends java.lang.Object {
				public mAccountHeader: android.view.View;
				public mAccountHeaderBackground: android.widget.ImageView;
				public mCurrentProfileView: com.mikepenz.materialdrawer.view.BezelImageView;
				public mAccountHeaderTextSection: android.view.View;
				public mAccountSwitcherArrow: android.widget.ImageView;
				public mCurrentProfileName: android.widget.TextView;
				public mCurrentProfileEmail: android.widget.TextView;
				public mProfileFirstView: com.mikepenz.materialdrawer.view.BezelImageView;
				public mProfileSecondView: com.mikepenz.materialdrawer.view.BezelImageView;
				public mProfileThirdView: com.mikepenz.materialdrawer.view.BezelImageView;
				public mCurrentProfile: com.mikepenz.materialdrawer.model.interfaces.IProfile;
				public mProfileFirst: com.mikepenz.materialdrawer.model.interfaces.IProfile;
				public mProfileSecond: com.mikepenz.materialdrawer.model.interfaces.IProfile;
				public mProfileThird: com.mikepenz.materialdrawer.model.interfaces.IProfile;
				public mSelectionListShown: boolean;
				public mAccountHeaderTextSectionBackgroundResource: number;
				public mActivity: android.app.Activity;
				public mCompactStyle: boolean;
				public mTypeface: android.graphics.Typeface;
				public mNameTypeface: android.graphics.Typeface;
				public mEmailTypeface: android.graphics.Typeface;
				public mHeight: com.mikepenz.materialdrawer.holder.DimenHolder;
				public mTextColor: com.mikepenz.materialdrawer.holder.ColorHolder;
				public mCurrentHiddenInList: boolean;
				public mSelectionFirstLineShown: boolean;
				public mSelectionSecondLineShown: boolean;
				public mSelectionFirstLine: string;
				public mSelectionSecondLine: string;
				public mPaddingBelowHeader: boolean;
				public mDividerBelowHeader: boolean;
				public mTranslucentStatusBar: boolean;
				public mHeaderBackground: com.mikepenz.materialdrawer.holder.ImageHolder;
				public mHeaderBackgroundScaleType: android.widget.ImageView.ScaleType;
				public mProfileImagesVisible: boolean;
				public mOnlyMainProfileImageVisible: boolean;
				public mOnlySmallProfileImagesVisible: boolean;
				public mCloseDrawerOnProfileListClick: java.lang.Boolean;
				public mResetDrawerOnProfileListClick: boolean;
				public mProfileImagesClickable: boolean;
				public mAlternativeProfileHeaderSwitching: boolean;
				public mThreeSmallProfileImages: boolean;
				public mOnProfileClickDrawerCloseDelay: number;
				public mOnAccountHeaderProfileImageListener: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderProfileImageListener;
				public mOnAccountHeaderSelectionViewClickListener: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderSelectionViewClickListener;
				public mSelectionListEnabledForSingleProfile: boolean;
				public mSelectionListEnabled: boolean;
				public mAccountHeaderContainer: android.view.View;
				public mProfiles: java.util.List;
				public mOnAccountHeaderListener: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderListener;
				public mOnAccountHeaderItemLongClickListener: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderItemLongClickListener;
				public mDrawer: com.mikepenz.materialdrawer.Drawer;
				public mSavedInstance: android.os.Bundle;
				public withCompactStyle(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withActivity(param0: android.app.Activity): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public getCurrentSelection(): number;
				public constructor();
				public updateHeaderAndList(): void;
				public withSelectionSecondLine(param0: string): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public calculateProfiles(): void;
				public switchProfiles(param0: com.mikepenz.materialdrawer.model.interfaces.IProfile): boolean;
				public withProfiles(param0: java.util.List): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnlySmallProfileImagesVisible(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionFirstLineShown(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withTranslucentStatusBar(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public buildDrawerSelectionList(): void;
				public withCurrentProfileHiddenInList(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionListEnabledForSingleProfile(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public buildProfiles(): void;
				public withHeaderBackground(param0: com.mikepenz.materialdrawer.holder.ImageHolder): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionSecondLineShown(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withResetDrawerOnProfileListClick(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withThreeSmallProfileImages(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public addProfiles(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IProfile>): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withCloseDrawerOnProfileListClick(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnlyMainProfileImageVisible(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withTextColorRes(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withHeaderBackground(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withHeaderBackgroundScaleType(param0: android.widget.ImageView.ScaleType): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withAccountHeader(param0: android.view.View): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withEmailTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionFistLineShown(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withHeightPx(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withHeaderBackground(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withProfileImagesVisible(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public build(): com.mikepenz.materialdrawer.AccountHeader;
				public withOnAccountHeaderProfileImageListener(param0: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderProfileImageListener): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withTextColor(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withDividerBelowHeader(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withHeightRes(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withAccountHeader(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withPaddingBelowHeader(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnAccountHeaderListener(param0: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderListener): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionFirstLine(param0: string): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public onProfileClick(param0: android.view.View, param1: boolean): void;
				public withProfileImagesClickable(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withAlternativeProfileHeaderSwitching(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnAccountHeaderItemLongClickListener(param0: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderItemLongClickListener): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnAccountHeaderSelectionViewClickListener(param0: com.mikepenz.materialdrawer.AccountHeader.OnAccountHeaderSelectionViewClickListener): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withNameTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSelectionListEnabled(param0: boolean): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withOnProfileClickDrawerCloseDelay(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public toggleSelectionList(param0: android.content.Context): void;
				public withHeightDp(param0: number): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withDrawer(param0: com.mikepenz.materialdrawer.Drawer): com.mikepenz.materialdrawer.AccountHeaderBuilder;
				public withSavedInstance(param0: android.os.Bundle): com.mikepenz.materialdrawer.AccountHeaderBuilder;
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class BuildConfig extends java.lang.Object {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class Drawer extends java.lang.Object {
				public static BUNDLE_SELECTION: string;
				public static BUNDLE_SELECTION_APPENDED: string;
				public static BUNDLE_STICKY_FOOTER_SELECTION: string;
				public static BUNDLE_STICKY_FOOTER_SELECTION_APPENDED: string;
				public static BUNDLE_DRAWER_CONTENT_SWITCHED: string;
				public static BUNDLE_DRAWER_CONTENT_SWITCHED_APPENDED: string;
				public static PREF_USER_LEARNED_DRAWER: string;
				public mDrawerBuilder: com.mikepenz.materialdrawer.DrawerBuilder;
				public updateName(param0: number, param1: com.mikepenz.materialdrawer.holder.StringHolder): void;
				public updateStickyFooterItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public getRecyclerView(): android.support.v7.widget.RecyclerView;
				public getCurrentStickyFooterSelectedPosition(): number;
				public getAdapter(): com.mikepenz.fastadapter.FastAdapter;
				public setSelection(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: boolean): boolean;
				public setStickyFooterItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public getStickyFooterPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): number;
				public getHeader(): android.view.View;
				public switchedDrawerContent(): boolean;
				public getCurrentSelection(): number;
				public addItem(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
				public setOnDrawerItemLongClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemLongClickListener): void;
				public removeStickyFooterItemAtPosition(param0: number): void;
				public setSelection(param0: number): boolean;
				public getDrawerLayout(): android.support.v4.widget.DrawerLayout;
				public setHeader(param0: android.view.View, param1: boolean, param2: boolean): void;
				public getPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): number;
				public getContent(): android.widget.FrameLayout;
				public getActionBarDrawerToggle(): android.support.v7.app.ActionBarDrawerToggle;
				public addStickyFooterItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public setToolbar(param0: android.app.Activity, param1: android.support.v7.widget.Toolbar): void;
				public setHeader(param0: android.view.View, param1: boolean, param2: boolean, param3: com.mikepenz.materialdrawer.holder.DimenHolder): void;
				public getMaterialize(): com.mikepenz.materialize.Materialize;
				public getDrawerItem(param0: java.lang.Object): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public setStickyFooterSelectionAtPosition(param0: number): void;
				public saveInstanceState(param0: android.os.Bundle): android.os.Bundle;
				public setOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener): void;
				public setToolbar(param0: android.app.Activity, param1: android.support.v7.widget.Toolbar, param2: boolean): void;
				public getFooterAdapter(): com.mikepenz.fastadapter.adapters.FooterAdapter;
				public updateItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public getFooter(): android.view.View;
				public isDrawerOpen(): boolean;
				public updateStickyFooterItem(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
				public getPosition(param0: number): number;
				public deselect(): void;
				public getDrawerBuilder(): com.mikepenz.materialdrawer.DrawerBuilder;
				public setHeader(param0: android.view.View): void;
				public updateIcon(param0: number, param1: com.mikepenz.materialdrawer.holder.ImageHolder): void;
				public getDrawerItem(param0: number): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public getStickyFooterPosition(param0: number): number;
				public removeHeader(): void;
				public setSelection(param0: number, param1: boolean): boolean;
				public setSelection(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
				public setSelectionAtPosition(param0: number, param1: boolean): boolean;
				public constructor(param0: com.mikepenz.materialdrawer.DrawerBuilder);
				public updateItem(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
				public addItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public closeDrawer(): void;
				public setItemAtPosition(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: number): void;
				public removeItem(param0: number): void;
				public setActionBarDrawerToggle(param0: android.support.v7.app.ActionBarDrawerToggle): void;
				public removeItems(param0: native.Array<number>): void;
				public switchDrawerContent(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener, param1: com.mikepenz.materialdrawer.Drawer.OnDrawerItemLongClickListener, param2: java.util.List, param3: number): void;
				public getOnDrawerItemLongClickListener(): com.mikepenz.materialdrawer.Drawer.OnDrawerItemLongClickListener;
				public setFullscreen(param0: boolean): void;
				public getDrawerItems(): java.util.List;
				public getStickyHeader(): android.view.View;
				public setStickyFooterSelectionAtPosition(param0: number, param1: boolean): void;
				public getCurrentSelectedPosition(): number;
				public addItemsAtPosition(param0: number, param1: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): void;
				public addItems(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): void;
				public setGravity(param0: number): void;
				public setItems(param0: java.util.List): void;
				public removeItemByPosition(param0: number): void;
				public getStickyFooter(): android.view.View;
				public openDrawer(): void;
				public deselect(param0: number): void;
				public removeAllStickyFooterItems(): void;
				public removeAllItems(): void;
				public getOriginalDrawerItems(): java.util.List;
				public resetDrawerContent(): void;
				public updateBadge(param0: number, param1: com.mikepenz.materialdrawer.holder.StringHolder): void;
				public getHeaderAdapter(): com.mikepenz.fastadapter.adapters.HeaderAdapter;
				public setSelectionAtPosition(param0: number): boolean;
				public getSlider(): com.mikepenz.materialize.view.ScrimInsetsRelativeLayout;
				public getItemAdapter(): com.mikepenz.fastadapter.adapters.ItemAdapter;
				public getOnDrawerNavigationListener(): com.mikepenz.materialdrawer.Drawer.OnDrawerNavigationListener;
				public setStickyFooterSelection(param0: number, param1: boolean): void;
				public getMiniDrawer(): com.mikepenz.materialdrawer.MiniDrawer;
				public setOnDrawerNavigationListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerNavigationListener): void;
				public getOnDrawerItemClickListener(): com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener;
				public addStickyFooterItem(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
				public setHeader(param0: android.view.View, param1: boolean): void;
			}
			export module Drawer {
				export class OnDrawerItemClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.Drawer$OnDrawerItemClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onItemClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
					});
					public onItemClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
				}
				export class OnDrawerItemLongClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.Drawer$OnDrawerItemLongClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onItemLongClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
					});
					public onItemLongClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
				}
				export class OnDrawerItemSelectedListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.Drawer$OnDrawerItemSelectedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number, param4: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
						onNothingSelected(param0: android.widget.AdapterView): void;
					});
					public onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number, param4: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
					public onNothingSelected(param0: android.widget.AdapterView): void;
				}
				export class OnDrawerListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.Drawer$OnDrawerListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onDrawerOpened(param0: android.view.View): void;
						onDrawerClosed(param0: android.view.View): void;
						onDrawerSlide(param0: android.view.View, param1: number): void;
					});
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
				}
				export class OnDrawerNavigationListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.Drawer$OnDrawerNavigationListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onNavigationClickListener(param0: android.view.View): boolean;
					});
					public onNavigationClickListener(param0: android.view.View): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class DrawerBuilder extends java.lang.Object {
				public mUsed: boolean;
				public mCurrentStickyFooterSelection: number;
				public mAppended: boolean;
				public mActivity: android.app.Activity;
				public mLayoutManager: android.support.v7.widget.RecyclerView.LayoutManager;
				public mRootView: android.view.ViewGroup;
				public mMaterialize: com.mikepenz.materialize.Materialize;
				public mTranslucentStatusBar: boolean;
				public mDisplayBelowStatusBar: java.lang.Boolean;
				public mToolbar: android.support.v7.widget.Toolbar;
				public mTranslucentNavigationBar: boolean;
				public mTranslucentNavigationBarProgrammatically: boolean;
				public mFullscreen: boolean;
				public mSystemUIHidden: boolean;
				public mCustomView: android.view.View;
				public mDrawerLayout: android.support.v4.widget.DrawerLayout;
				public mSliderLayout: com.mikepenz.materialize.view.ScrimInsetsRelativeLayout;
				public mSliderBackgroundColor: number;
				public mSliderBackgroundColorRes: number;
				public mSliderBackgroundDrawable: android.graphics.drawable.Drawable;
				public mSliderBackgroundDrawableRes: number;
				public mDrawerWidth: number;
				public mDrawerGravity: java.lang.Integer;
				public mAccountHeader: com.mikepenz.materialdrawer.AccountHeader;
				public mAccountHeaderSticky: boolean;
				public mAnimateActionBarDrawerToggle: boolean;
				public mActionBarDrawerToggleEnabled: boolean;
				public mActionBarDrawerToggle: android.support.v7.app.ActionBarDrawerToggle;
				public mScrollToTopAfterClick: boolean;
				public mHeaderView: android.view.View;
				public mHeaderDivider: boolean;
				public mHeaderPadding: boolean;
				public mHeiderHeight: com.mikepenz.materialdrawer.holder.DimenHolder;
				public mStickyHeaderView: android.view.View;
				public mStickyHeaderShadow: boolean;
				public mFooterView: android.view.View;
				public mFooterDivider: boolean;
				public mFooterClickable: boolean;
				public mStickyFooterView: android.view.ViewGroup;
				public mStickyFooterDivider: boolean;
				public mStickyFooterShadowView: android.view.View;
				public mStickyFooterShadow: boolean;
				public mFireInitialOnClick: boolean;
				public mMultiSelect: boolean;
				public mSelectedItemPosition: number;
				public mSelectedItemIdentifier: number;
				public mRecyclerView: android.support.v7.widget.RecyclerView;
				public mHasStableIds: boolean;
				public mPositionBasedStateManagement: boolean;
				public mAdapter: com.mikepenz.fastadapter.FastAdapter;
				public mHeaderAdapter: com.mikepenz.fastadapter.adapters.HeaderAdapter;
				public mItemAdapter: com.mikepenz.fastadapter.adapters.ItemAdapter;
				public mFooterAdapter: com.mikepenz.fastadapter.adapters.FooterAdapter;
				public mAdapterWrapper: android.support.v7.widget.RecyclerView.Adapter;
				public mItemAnimator: android.support.v7.widget.RecyclerView.ItemAnimator;
				public mStickyDrawerItems: java.util.List;
				public mCloseOnClick: boolean;
				public mDelayOnDrawerClose: number;
				public mDelayDrawerClickEvent: number;
				public mOnDrawerListener: com.mikepenz.materialdrawer.Drawer.OnDrawerListener;
				public mOnDrawerItemClickListener: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener;
				public mOnDrawerItemLongClickListener: com.mikepenz.materialdrawer.Drawer.OnDrawerItemLongClickListener;
				public mOnDrawerNavigationListener: com.mikepenz.materialdrawer.Drawer.OnDrawerNavigationListener;
				public mShowDrawerOnFirstLaunch: boolean;
				public mGenerateMiniDrawer: boolean;
				public mMiniDrawer: com.mikepenz.materialdrawer.MiniDrawer;
				public mSavedInstance: android.os.Bundle;
				public withAdapterWrapper(param0: android.support.v7.widget.RecyclerView.Adapter): com.mikepenz.materialdrawer.DrawerBuilder;
				public withFooterClickable(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHasStableIds(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public getAdapter(): com.mikepenz.fastadapter.FastAdapter;
				public withTranslucentStatusBar(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public build(): com.mikepenz.materialdrawer.Drawer;
				public withSliderBackgroundDrawableRes(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withActionBarDrawerToggle(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withRecyclerView(param0: android.support.v7.widget.RecyclerView): com.mikepenz.materialdrawer.DrawerBuilder;
				public constructor();
				public withSliderBackgroundDrawable(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerWidthPx(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerGravity(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withActionBarDrawerToggleAnimated(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withOnDrawerNavigationListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerNavigationListener): com.mikepenz.materialdrawer.DrawerBuilder;
				public withShowDrawerOnFirstLaunch(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withActionBarDrawerToggle(param0: android.support.v7.app.ActionBarDrawerToggle): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyHeaderShadow(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHeader(param0: android.view.View): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHeader(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withGenerateMiniDrawer(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHeaderPadding(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withFullscreen(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withScrollToTopAfterClick(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyFooterShadow(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withTranslucentNavigationBarProgrammatically(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyHeader(param0: android.view.View): com.mikepenz.materialdrawer.DrawerBuilder;
				public withItemAnimator(param0: android.support.v7.widget.RecyclerView.ItemAnimator): com.mikepenz.materialdrawer.DrawerBuilder;
				public withRootView(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDisplayBelowStatusBar(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withTranslucentNavigationBar(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public addDrawerItems(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): com.mikepenz.materialdrawer.DrawerBuilder;
				public withActivity(param0: android.app.Activity): com.mikepenz.materialdrawer.DrawerBuilder;
				public getHeaderAdapter(): com.mikepenz.fastadapter.IItemAdapter;
				public withCloseOnClick(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerLayout(param0: android.support.v4.widget.DrawerLayout): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDelayOnDrawerClose(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public getDrawerItem(param0: number): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public inflateMenu(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public append(param0: com.mikepenz.materialdrawer.Drawer): com.mikepenz.materialdrawer.Drawer;
				public withSelectedItem(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyDrawerItems(param0: java.util.List): com.mikepenz.materialdrawer.DrawerBuilder;
				public withSliderBackgroundColor(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerWidthDp(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public buildForFragment(): com.mikepenz.materialdrawer.Drawer;
				public withSelectedItemByPosition(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withSavedInstance(param0: android.os.Bundle): com.mikepenz.materialdrawer.DrawerBuilder;
				public withSystemUIHidden(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerLayout(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withAdapter(param0: com.mikepenz.fastadapter.FastAdapter): com.mikepenz.materialdrawer.DrawerBuilder;
				public checkDrawerItem(param0: number, param1: boolean): boolean;
				public getItemAdapter(): com.mikepenz.fastadapter.IItemAdapter;
				public withFooter(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public constructor(param0: android.app.Activity);
				public withDrawerItems(param0: java.util.List): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDrawerWidthRes(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withFireOnInitialOnClick(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public handleDrawerNavigation(param0: android.app.Activity, param1: boolean): void;
				public withPositionBasedStateManagement(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public closeDrawerDelayed(): void;
				public withStickyHeader(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withDelayDrawerClickEvent(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withAccountHeader(param0: com.mikepenz.materialdrawer.AccountHeader, param1: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withCustomView(param0: android.view.View): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyFooter(param0: android.view.ViewGroup): com.mikepenz.materialdrawer.DrawerBuilder;
				public withAccountHeader(param0: com.mikepenz.materialdrawer.AccountHeader): com.mikepenz.materialdrawer.DrawerBuilder;
				public withFooterDivider(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHeaderDivider(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withOnDrawerItemLongClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemLongClickListener): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyFooterDivider(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withRootView(param0: android.view.ViewGroup): com.mikepenz.materialdrawer.DrawerBuilder;
				public withStickyFooter(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public buildView(): com.mikepenz.materialdrawer.Drawer;
				public addStickyDrawerItems(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): com.mikepenz.materialdrawer.DrawerBuilder;
				public withOnDrawerListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerListener): com.mikepenz.materialdrawer.DrawerBuilder;
				public resetStickyFooterSelection(): void;
				public withInnerShadow(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withHeaderHeight(param0: com.mikepenz.materialdrawer.holder.DimenHolder): com.mikepenz.materialdrawer.DrawerBuilder;
				public withMultiSelect(param0: boolean): com.mikepenz.materialdrawer.DrawerBuilder;
				public withFooter(param0: android.view.View): com.mikepenz.materialdrawer.DrawerBuilder;
				public getFooterAdapter(): com.mikepenz.fastadapter.IItemAdapter;
				public withOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener): com.mikepenz.materialdrawer.DrawerBuilder;
				public withSliderBackgroundColorRes(param0: number): com.mikepenz.materialdrawer.DrawerBuilder;
				public withToolbar(param0: android.support.v7.widget.Toolbar): com.mikepenz.materialdrawer.DrawerBuilder;
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class DrawerUtils extends java.lang.Object {
				public static handleHeaderView(param0: com.mikepenz.materialdrawer.DrawerBuilder): void;
				public static onFooterDrawerItemClick(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param2: android.view.View, param3: java.lang.Boolean): void;
				public static processDrawerLayoutParams(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: android.support.v4.widget.DrawerLayout.LayoutParams): android.support.v4.widget.DrawerLayout.LayoutParams;
				public static handleFooterView(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: android.view.View.OnClickListener): void;
				public static getStickyFooterPositionByIdentifier(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: number): number;
				public static rebuildStickyFooterView(param0: com.mikepenz.materialdrawer.DrawerBuilder): void;
				public static getDrawerItem(param0: java.util.List, param1: java.lang.Object): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public static buildStickyDrawerItemFooter(param0: android.content.Context, param1: com.mikepenz.materialdrawer.DrawerBuilder, param2: android.view.View.OnClickListener): android.view.ViewGroup;
				public static getPositionByIdentifier(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: number): number;
				public static setStickyFooterSelection(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: number, param2: java.lang.Boolean): void;
				public static getDrawerItem(param0: java.util.List, param1: number): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public static fillStickyDrawerItemFooter(param0: com.mikepenz.materialdrawer.DrawerBuilder, param1: android.view.ViewGroup, param2: android.view.View.OnClickListener): void;
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export class MiniDrawer extends java.lang.Object {
				public static PROFILE: number;
				public static ITEM: number;
				public mAdapter: com.mikepenz.fastadapter.adapters.FastItemAdapter;
				public mPositionBasedStateManagement: boolean;
				public withCrossFader(param0: com.mikepenz.materialdrawer.interfaces.ICrossfader): com.mikepenz.materialdrawer.MiniDrawer;
				public getOnMiniDrawerItemLongClickListener(): com.mikepenz.fastadapter.FastAdapter.OnLongClickListener;
				public getRecyclerView(): android.support.v7.widget.RecyclerView;
				public withOnMiniDrawerItemOnClickListener(param0: com.mikepenz.fastadapter.FastAdapter.OnClickListener): com.mikepenz.materialdrawer.MiniDrawer;
				public getCrossFader(): com.mikepenz.materialdrawer.interfaces.ICrossfader;
				public getAdapter(): com.mikepenz.fastadapter.FastAdapter;
				public createItems(): void;
				public getOnMiniDrawerItemOnClickListener(): com.mikepenz.fastadapter.FastAdapter.OnClickListener;
				public onProfileClick(): void;
				public withIncludeSecondaryDrawerItems(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
				public constructor();
				public withEnableSelectedMiniDrawerItemBackground(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
				public withDrawer(param0: com.mikepenz.materialdrawer.Drawer): com.mikepenz.materialdrawer.MiniDrawer;
				public withInnerShadow(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
				public withInRTL(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
				public build(param0: android.content.Context): android.view.View;
				public onItemClick(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): boolean;
				public getDrawer(): com.mikepenz.materialdrawer.Drawer;
				public setSelection(param0: number): void;
				public withOnMiniDrawerItemLongClickListener(param0: com.mikepenz.fastadapter.FastAdapter.OnLongClickListener): com.mikepenz.materialdrawer.MiniDrawer;
				public withAccountHeader(param0: com.mikepenz.materialdrawer.AccountHeader): com.mikepenz.materialdrawer.MiniDrawer;
				public getAccountHeader(): com.mikepenz.materialdrawer.AccountHeader;
				public withPositionBasedStateManagement(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
				public withOnMiniDrawerItemClickListener(param0: com.mikepenz.materialdrawer.MiniDrawer.OnMiniDrawerItemClickListener): com.mikepenz.materialdrawer.MiniDrawer;
				public updateItem(param0: number): void;
				public getItemAdapter(): com.mikepenz.fastadapter.adapters.ItemAdapter;
				public getMiniDrawerType(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): number;
				public generateMiniDrawerItem(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
				public withEnableProfileClick(param0: boolean): com.mikepenz.materialdrawer.MiniDrawer;
			}
			export module MiniDrawer {
				export class OnMiniDrawerItemClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.MiniDrawer$OnMiniDrawerItemClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onItemClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param3: number): boolean;
					});
					public onItemClick(param0: android.view.View, param1: number, param2: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module holder {
				export class BadgeStyle extends java.lang.Object {
					public withCornersDp(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public getColorPressed(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withMinWidth(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withPaddingTopBottomPx(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public style(param0: android.widget.TextView, param1: android.content.res.ColorStateList): void;
					public withPaddingTopBottomDp(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withColor(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withCorners(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public getPaddingLeftRight(): com.mikepenz.materialdrawer.holder.DimenHolder;
					public getGradientDrawable(): number;
					public getMinWidth(): com.mikepenz.materialdrawer.holder.DimenHolder;
					public withBadgeBackground(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withTextColorRes(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public constructor();
					public getColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public constructor(param0: number, param1: number);
					public withPaddingLeftRightDp(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public getPaddingTopBottom(): com.mikepenz.materialdrawer.holder.DimenHolder;
					public withColorPressedRes(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withGradientDrawable(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withPaddingLeftRightPx(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public getBadgeBackground(): android.graphics.drawable.Drawable;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public withTextColor(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withColorRes(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withPadding(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public style(param0: android.widget.TextView): void;
					public getCorners(): com.mikepenz.materialdrawer.holder.DimenHolder;
					public getTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withColorPressed(param0: number): com.mikepenz.materialdrawer.holder.BadgeStyle;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module holder {
				export class ColorHolder extends com.mikepenz.materialize.holder.ColorHolder {
					public static fromColor(param0: number): com.mikepenz.materialize.holder.ColorHolder;
					public static fromColorRes(param0: number): com.mikepenz.materialdrawer.holder.ColorHolder;
					public constructor();
					public static fromColorRes(param0: number): com.mikepenz.materialize.holder.ColorHolder;
					public static fromColor(param0: number): com.mikepenz.materialdrawer.holder.ColorHolder;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module holder {
				export class DimenHolder extends com.mikepenz.materialize.holder.DimenHolder {
					public constructor();
					public static fromResource(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public static fromPixel(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public static fromDp(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public static fromResource(param0: number): com.mikepenz.materialdrawer.holder.DimenHolder;
					public static fromDp(param0: number): com.mikepenz.materialdrawer.holder.DimenHolder;
					public static fromPixel(param0: number): com.mikepenz.materialdrawer.holder.DimenHolder;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module holder {
				export class ImageHolder extends com.mikepenz.materialize.holder.ImageHolder {
					public setIIcon(param0: com.mikepenz.iconics.typeface.IIcon): void;
					public static applyDecidedIconOrSetGone(param0: com.mikepenz.materialdrawer.holder.ImageHolder, param1: android.widget.ImageView, param2: number, param3: boolean, param4: number): void;
					public constructor(param0: string);
					public static decideIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder, param1: android.content.Context, param2: number, param3: boolean, param4: number): android.graphics.drawable.Drawable;
					public decideIcon(param0: android.content.Context, param1: number, param2: boolean): android.graphics.drawable.Drawable;
					public constructor(param0: com.mikepenz.iconics.typeface.IIcon);
					public static applyDecidedIconOrSetGone(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: number, param3: boolean): void;
					public decideIcon(param0: android.content.Context, param1: number, param2: boolean, param3: number): android.graphics.drawable.Drawable;
					public applyTo(param0: android.widget.ImageView, param1: string): boolean;
					public getIIcon(): com.mikepenz.iconics.typeface.IIcon;
					public applyTo(param0: android.widget.ImageView): boolean;
					public static applyTo(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView): boolean;
					public constructor(param0: android.graphics.drawable.Drawable);
					public static applyTo(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: string): boolean;
					public static decideIcon(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.content.Context, param2: number, param3: boolean): android.graphics.drawable.Drawable;
					public constructor(param0: number);
					public constructor(param0: android.net.Uri);
					public constructor(param0: android.graphics.Bitmap);
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module holder {
				export class StringHolder extends com.mikepenz.materialize.holder.StringHolder {
					public constructor(param0: string);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module icons {
				export class MaterialDrawerFont extends java.lang.Object {
					public getFontName(): string;
					public getVersion(): string;
					public getTypeface(param0: android.content.Context): android.graphics.Typeface;
					public getMappingPrefix(): string;
					public getCharacters(): java.util.HashMap;
					public getIconCount(): number;
					public getIcons(): java.util.Collection;
					public getLicenseUrl(): string;
					public getAuthor(): string;
					public getIcon(param0: string): com.mikepenz.iconics.typeface.IIcon;
					public getUrl(): string;
					public constructor();
					public getLicense(): string;
					public getDescription(): string;
				}
				export module MaterialDrawerFont {
					export class Icon extends java.lang.Enum {
						public static mdf_arrow_drop_down: com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
						public static mdf_arrow_drop_up: com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
						public static mdf_expand_less: com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
						public static mdf_expand_more: com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
						public static mdf_person: com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
						public getFormattedName(): string;
						public getTypeface(): com.mikepenz.iconics.typeface.ITypeface;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getCharacter(): string;
						public static values(): native.Array<com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon>;
						public getName(): string;
						public static valueOf(param0: string): com.mikepenz.materialdrawer.icons.MaterialDrawerFont.Icon;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module interfaces {
				export class ICrossfader extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.interfaces.ICrossfader interface with the provided implementation.
					 */
					public constructor(implementation: {
						crossfade(): void;
						isCrossfaded(): boolean;
					});
					public crossfade(): void;
					public isCrossfaded(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module interfaces {
				export class OnCheckedChangeListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCheckedChanged(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: android.widget.CompoundButton, param2: boolean): void;
					});
					public onCheckedChanged(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: android.widget.CompoundButton, param2: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export abstract class AbstractBadgeableDrawerItem extends com.mikepenz.materialdrawer.model.BaseDescribeableDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.ColorfulBadgeable {
					public mBadge: com.mikepenz.materialdrawer.holder.StringHolder;
					public mBadgeStyle: com.mikepenz.materialdrawer.holder.BadgeStyle;
					public getType(): number;
					public withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): java.lang.Object;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withBadge(param0: string): java.lang.Object;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public getBadge(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getBadgeStyle(): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public withBadge(param0: string): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public withName(param0: number): java.lang.Object;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem.ViewHolder, param1: java.util.List): void;
					public equals(param0: number): boolean;
					public withBadge(param0: number): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withBadge(param0: number): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module AbstractBadgeableDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem.ViewHolder;
					}
					export class ViewHolder extends com.mikepenz.materialdrawer.model.BaseViewHolder {
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export abstract class AbstractDrawerItem extends java.lang.Object implements com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, com.mikepenz.materialdrawer.model.interfaces.Selectable, com.mikepenz.materialdrawer.model.interfaces.Tagable {
					public mIdentifier: number;
					public mTag: java.lang.Object;
					public mEnabled: boolean;
					public mSelected: boolean;
					public mSelectable: boolean;
					public mOnDrawerItemClickListener: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener;
					public mOnPostBindViewListener: com.mikepenz.materialdrawer.model.interfaces.OnPostBindViewListener;
					public mSubItems: java.util.List;
					public getType(): number;
					public withOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener): java.lang.Object;
					public withIdentifier(param0: number): java.lang.Object;
					public withParent(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
					public isExpanded(): boolean;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public getOnPostBindViewListener(): com.mikepenz.materialdrawer.model.interfaces.OnPostBindViewListener;
					public withSubItems(param0: java.util.List): java.lang.Object;
					public onPostBindView(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: android.view.View): void;
					public isSelectable(): boolean;
					public isAutoExpanding(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public isEnabled(): boolean;
					public hashCode(): number;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public withSubItems(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public withEnabled(param0: boolean): java.lang.Object;
					public equals(param0: number): boolean;
					public getSubItems(): java.util.List;
					public withSelectable(param0: boolean): java.lang.Object;
					public getOnDrawerItemClickListener(): com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIsExpanded(param0: boolean): java.lang.Object;
					public getIdentifier(): number;
					public getParent(): com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getLayoutRes(): number;
					public isSelected(): boolean;
					public withPostOnBindViewListener(param0: com.mikepenz.materialdrawer.model.interfaces.OnPostBindViewListener): java.lang.Object;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export abstract class AbstractSwitchableDrawerItem extends com.mikepenz.materialdrawer.model.BaseDescribeableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem.ViewHolder, param1: java.util.List): void;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withChecked(param0: boolean): com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem;
					public withCheckable(param0: boolean): com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public isChecked(): boolean;
					public withName(param0: number): java.lang.Object;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withOnCheckedChangeListener(param0: com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener): com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem;
					public getOnCheckedChangeListener(): com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener;
					public equals(param0: number): boolean;
					public isSwitchEnabled(): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public withSwitchEnabled(param0: boolean): com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module AbstractSwitchableDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem.ViewHolder;
					}
					export class ViewHolder extends com.mikepenz.materialdrawer.model.BaseViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class AbstractToggleableDrawerItem extends com.mikepenz.materialdrawer.model.BaseDescribeableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public setToggleEnabled(param0: boolean): void;
					public setOnCheckedChangeListener(param0: com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener): void;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public withOnCheckedChangeListener(param0: com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener): com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem;
					public isEnabled(): boolean;
					public setChecked(param0: boolean): void;
					public withChecked(param0: boolean): com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem;
					public isChecked(): boolean;
					public withName(param0: number): java.lang.Object;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public getOnCheckedChangeListener(): com.mikepenz.materialdrawer.interfaces.OnCheckedChangeListener;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withToggleEnabled(param0: boolean): com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public isToggleEnabled(): boolean;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module AbstractToggleableDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem.ViewHolder;
					}
					export class ViewHolder extends com.mikepenz.materialdrawer.model.BaseViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export abstract class BaseDescribeableDrawerItem extends com.mikepenz.materialdrawer.model.BaseDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public bindViewHelper(param0: com.mikepenz.materialdrawer.model.BaseViewHolder): void;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withDescriptionTextColorRes(param0: number): java.lang.Object;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public withDescription(param0: string): java.lang.Object;
					public withDescription(param0: number): java.lang.Object;
					public getDescription(): com.mikepenz.materialdrawer.holder.StringHolder;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public getDescriptionTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withDescriptionTextColor(param0: number): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export abstract class BaseDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.Nameable, com.mikepenz.materialdrawer.model.interfaces.Iconable, com.mikepenz.materialdrawer.model.interfaces.Tagable, com.mikepenz.materialdrawer.model.interfaces.Typefaceable {
					public icon: com.mikepenz.materialdrawer.holder.ImageHolder;
					public selectedIcon: com.mikepenz.materialdrawer.holder.ImageHolder;
					public name: com.mikepenz.materialdrawer.holder.StringHolder;
					public iconTinted: boolean;
					public selectedColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public textColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public selectedTextColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public disabledTextColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public iconColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public selectedIconColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public disabledIconColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public typeface: android.graphics.Typeface;
					public colorStateList: android.util.Pair;
					public level: number;
					public getType(): number;
					public getSelectedIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withDisabledIconColor(param0: number): java.lang.Object;
					public getTextColorStateList(param0: number, param1: number): android.content.res.ColorStateList;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withTextColorRes(param0: number): java.lang.Object;
					public getSelectedTextColor(param0: android.content.Context): number;
					public getDisabledTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withSelectedTextColorRes(param0: number): java.lang.Object;
					public getIconColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public constructor();
					public getTag(): java.lang.Object;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withLevel(param0: number): java.lang.Object;
					public isEnabled(): boolean;
					public withIconTinted(param0: boolean): java.lang.Object;
					public getSelectedIconColor(param0: android.content.Context): number;
					public withTextColor(param0: number): java.lang.Object;
					public withName(param0: number): java.lang.Object;
					public withSelectedIconColorRes(param0: number): java.lang.Object;
					public getSelectedColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public getSelectedColor(param0: android.content.Context): number;
					public equals(param0: java.lang.Object): boolean;
					public withSelectedIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withDisabledTextColorRes(param0: number): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public getIconColor(param0: android.content.Context): number;
					public withSelectedIconColor(param0: number): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getSelectedTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public getColor(param0: android.content.Context): number;
					public withTintSelectedIcon(param0: boolean): java.lang.Object;
					public isSelected(): boolean;
					public withIconTintingEnabled(param0: boolean): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public withDisabledIconColorRes(param0: number): java.lang.Object;
					public getSelectedIconColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public isIconTinted(): boolean;
					public withSelectedIcon(param0: number): java.lang.Object;
					public withIconColor(param0: number): java.lang.Object;
					public isSelectable(): boolean;
					public withSelectedColorRes(param0: number): java.lang.Object;
					public withSelectedTextColor(param0: number): java.lang.Object;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public withDisabledTextColor(param0: number): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public withName(param0: string): java.lang.Object;
					public getLevel(): number;
					public getDisabledIconColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public equals(param0: number): boolean;
					public withIconColorRes(param0: number): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withSelectedColor(param0: number): java.lang.Object;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class BaseViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					public view: android.view.View;
					public icon: android.widget.ImageView;
					public name: android.widget.TextView;
					public description: android.widget.TextView;
					public constructor(param0: android.view.View);
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class ContainerDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem {
					public getType(): number;
					public withViewPosition(param0: com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position): com.mikepenz.materialdrawer.model.ContainerDrawerItem;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public getView(): android.view.View;
					public withDivider(param0: boolean): com.mikepenz.materialdrawer.model.ContainerDrawerItem;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withHeight(param0: com.mikepenz.materialdrawer.holder.DimenHolder): com.mikepenz.materialdrawer.model.ContainerDrawerItem;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getViewPosition(): com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position;
					public getTag(): java.lang.Object;
					public isEnabled(): boolean;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public bindView(param0: com.mikepenz.materialdrawer.model.ContainerDrawerItem.ViewHolder, param1: java.util.List): void;
					public withView(param0: android.view.View): com.mikepenz.materialdrawer.model.ContainerDrawerItem;
					public getHeight(): com.mikepenz.materialdrawer.holder.DimenHolder;
					public equals(param0: number): boolean;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public isSelected(): boolean;
				}
				export module ContainerDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.ContainerDrawerItem.ViewHolder;
					}
					export class Position extends java.lang.Enum {
						public static TOP: com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position;
						public static BOTTOM: com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position;
						public static NONE: com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position;
						public static valueOf(param0: string): com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position;
						public static values(): native.Array<com.mikepenz.materialdrawer.model.ContainerDrawerItem.Position>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class DividerDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem {
					public getType(): number;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public equals(param0: number): boolean;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withSelectable(param0: boolean): java.lang.Object;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public bindView(param0: com.mikepenz.materialdrawer.model.DividerDrawerItem.ViewHolder, param1: java.util.List): void;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public isEnabled(): boolean;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public isSelected(): boolean;
				}
				export module DividerDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.DividerDrawerItem.ViewHolder;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class ExpandableDrawerItem extends com.mikepenz.materialdrawer.model.BaseDescribeableDrawerItem {
					public arrowColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public arrowRotationAngleStart: number;
					public arrowRotationAngleEnd: number;
					public getType(): number;
					public withOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener): java.lang.Object;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public withOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener): com.mikepenz.materialdrawer.model.ExpandableDrawerItem;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public withArrowRotationAngleEnd(param0: number): com.mikepenz.materialdrawer.model.ExpandableDrawerItem;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withArrowRotationAngleStart(param0: number): com.mikepenz.materialdrawer.model.ExpandableDrawerItem;
					public equals(param0: number): boolean;
					public withArrowColorRes(param0: number): com.mikepenz.materialdrawer.model.ExpandableDrawerItem;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public getOnDrawerItemClickListener(): com.mikepenz.materialdrawer.Drawer.OnDrawerItemClickListener;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withArrowColor(param0: number): com.mikepenz.materialdrawer.model.ExpandableDrawerItem;
					public bindView(param0: com.mikepenz.materialdrawer.model.ExpandableDrawerItem.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module ExpandableDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.ExpandableDrawerItem.ViewHolder;
					}
					export class ViewHolder extends com.mikepenz.materialdrawer.model.BaseViewHolder {
						public arrow: com.mikepenz.iconics.view.IconicsImageView;
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class MiniDrawerItem extends com.mikepenz.materialdrawer.model.BaseDrawerItem {
					public mCustomHeight: com.mikepenz.materialdrawer.holder.DimenHolder;
					public getType(): number;
					public withCustomHeightRes(param0: number): com.mikepenz.materialdrawer.model.MiniDrawerItem;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public withEnableSelectedBackground(param0: boolean): com.mikepenz.materialdrawer.model.MiniDrawerItem;
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withCustomHeightDp(param0: number): com.mikepenz.materialdrawer.model.MiniDrawerItem;
					public bindView(param0: com.mikepenz.materialdrawer.model.MiniDrawerItem.ViewHolder, param1: java.util.List): void;
					public withName(param0: number): java.lang.Object;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withCustomHeightPx(param0: number): com.mikepenz.materialdrawer.model.MiniDrawerItem;
					public constructor(param0: com.mikepenz.materialdrawer.model.SecondaryDrawerItem);
					public withCustomHeight(param0: com.mikepenz.materialdrawer.holder.DimenHolder): com.mikepenz.materialdrawer.model.MiniDrawerItem;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public constructor(param0: com.mikepenz.materialdrawer.model.PrimaryDrawerItem);
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module MiniDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.MiniDrawerItem.ViewHolder;
						public constructor();
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class MiniProfileDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.IProfile {
					public icon: com.mikepenz.materialdrawer.holder.ImageHolder;
					public customHeight: com.mikepenz.materialdrawer.holder.DimenHolder;
					public getType(): number;
					public withIcon(param0: string): java.lang.Object;
					public withName(param0: string): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withEmail(param0: string): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public isSelectable(): boolean;
					public withCustomHeight(param0: com.mikepenz.materialdrawer.holder.DimenHolder): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public generateView(param0: android.content.Context): android.view.View;
					public withCustomHeightDp(param0: number): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withIcon(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withIcon(param0: android.graphics.Bitmap): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public withIcon(param0: android.net.Uri): java.lang.Object;
					public withIcon(param0: string): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withIcon(param0: android.net.Uri): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withName(param0: string): java.lang.Object;
					public withIcon(param0: android.graphics.Bitmap): java.lang.Object;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public isEnabled(): boolean;
					public withEmail(param0: string): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withCustomHeightPx(param0: number): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withCustomHeightRes(param0: number): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public withIcon(param0: number): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem;
					public equals(param0: number): boolean;
					public withSelectable(param0: boolean): java.lang.Object;
					public constructor(param0: com.mikepenz.materialdrawer.model.ProfileDrawerItem);
					public withSetSelected(param0: boolean): java.lang.Object;
					public getEmail(): com.mikepenz.materialdrawer.holder.StringHolder;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public bindView(param0: com.mikepenz.materialdrawer.model.MiniProfileDrawerItem.ViewHolder, param1: java.util.List): void;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
				export module MiniProfileDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.MiniProfileDrawerItem.ViewHolder;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class PrimaryDrawerItem extends com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public getBadgeStyle(): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem.ViewHolder, param1: java.util.List): void;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class ProfileDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.IProfile, com.mikepenz.materialdrawer.model.interfaces.Tagable, com.mikepenz.materialdrawer.model.interfaces.Typefaceable {
					public nameShown: boolean;
					public icon: com.mikepenz.materialdrawer.holder.ImageHolder;
					public name: com.mikepenz.materialdrawer.holder.StringHolder;
					public email: com.mikepenz.materialdrawer.holder.StringHolder;
					public selectedColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public textColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public selectedTextColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public disabledTextColor: com.mikepenz.materialdrawer.holder.ColorHolder;
					public typeface: android.graphics.Typeface;
					public colorStateList: android.util.Pair;
					public getType(): number;
					public withEmail(param0: string): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withIcon(param0: string): java.lang.Object;
					public withIcon(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public getTextColorStateList(param0: number, param1: number): android.content.res.ColorStateList;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withEmail(param0: string): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withIcon(param0: string): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withIcon(param0: android.net.Uri): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public getSelectedTextColor(param0: android.content.Context): number;
					public withNameShown(param0: boolean): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public getDisabledTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public constructor();
					public getTag(): java.lang.Object;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withIcon(param0: android.graphics.Bitmap): java.lang.Object;
					public isEnabled(): boolean;
					public withSelectedColor(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public getSelectedColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public withName(param0: string): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public getEmail(): com.mikepenz.materialdrawer.holder.StringHolder;
					public withIcon(param0: number): java.lang.Object;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getSelectedTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public getColor(param0: android.content.Context): number;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
					public bindView(param0: com.mikepenz.materialdrawer.model.ProfileDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withIcon(param0: android.graphics.Bitmap): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public withIcon(param0: android.net.Uri): java.lang.Object;
					public withName(param0: string): java.lang.Object;
					public withDisabledTextColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withTextColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withSelectedTextColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withTextColor(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withDisabledTextColor(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withIcon(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public equals(param0: number): boolean;
					public withSelectedTextColor(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public withSelectedColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public isNameShown(): boolean;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public withTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.model.ProfileDrawerItem;
					public getTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
				}
				export module ProfileDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.ProfileDrawerItem.ViewHolder;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class ProfileSettingDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.IProfile, com.mikepenz.materialdrawer.model.interfaces.Tagable, com.mikepenz.materialdrawer.model.interfaces.Typefaceable {
					public getType(): number;
					public withTextColor(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withIcon(param0: string): java.lang.Object;
					public setDescription(param0: string): void;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withTextColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withEmail(param0: string): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public withDescription(param0: string): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withSelectedColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withIcon(param0: string): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public getIconColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public constructor();
					public getTag(): java.lang.Object;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withIcon(param0: android.graphics.Bitmap): java.lang.Object;
					public isEnabled(): boolean;
					public withIcon(param0: android.graphics.drawable.Drawable): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withName(param0: string): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public getSelectedColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public withTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public bindView(param0: com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem.ViewHolder, param1: java.util.List): void;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public getEmail(): com.mikepenz.materialdrawer.holder.StringHolder;
					public withIcon(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withIcon(param0: number): java.lang.Object;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withSelectedColor(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public withEmail(param0: string): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public isSelected(): boolean;
					public isIconTinted(): boolean;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withIconTinted(param0: boolean): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public setIconTinted(param0: boolean): void;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public withIcon(param0: android.net.Uri): java.lang.Object;
					public withName(param0: string): java.lang.Object;
					public withIcon(param0: android.graphics.Bitmap): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withSelectable(param0: boolean): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public getDescription(): com.mikepenz.materialdrawer.holder.StringHolder;
					public equals(param0: number): boolean;
					public withIconColor(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public withIconColorRes(param0: number): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public withIcon(param0: android.net.Uri): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
				}
				export module ProfileSettingDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem.ViewHolder;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class SecondaryDrawerItem extends com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public getBadgeStyle(): com.mikepenz.materialdrawer.holder.BadgeStyle;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem.ViewHolder, param1: java.util.List): void;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getColor(param0: android.content.Context): number;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): com.mikepenz.materialdrawer.model.AbstractBadgeableDrawerItem;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class SecondarySwitchDrawerItem extends com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getColor(param0: android.content.Context): number;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class SecondaryToggleDrawerItem extends com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getColor(param0: android.content.Context): number;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class SectionDrawerItem extends com.mikepenz.materialdrawer.model.AbstractDrawerItem implements com.mikepenz.materialdrawer.model.interfaces.Nameable, com.mikepenz.materialdrawer.model.interfaces.Typefaceable {
					public getType(): number;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.SectionDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withTextColorRes(param0: number): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withName(param0: number): java.lang.Object;
					public getFactory(): com.mikepenz.fastadapter.utils.ViewHolderFactory;
					public equals(param0: java.lang.Object): boolean;
					public hasDivider(): boolean;
					public withDivider(param0: boolean): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withTextColor(param0: number): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withName(param0: string): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withTypeface(param0: android.graphics.Typeface): com.mikepenz.materialdrawer.model.SectionDrawerItem;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public getTextColor(): com.mikepenz.materialdrawer.holder.ColorHolder;
					public isSelected(): boolean;
				}
				export module SectionDrawerItem {
					export class ItemFactory extends java.lang.Object {
						public constructor();
						public create(param0: android.view.View): com.mikepenz.materialdrawer.model.SectionDrawerItem.ViewHolder;
					}
					export class ViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class SwitchDrawerItem extends com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractSwitchableDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export class ToggleDrawerItem extends com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem {
					public getType(): number;
					public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
					public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
					public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public bindView(param0: com.mikepenz.materialdrawer.model.AbstractToggleableDrawerItem.ViewHolder, param1: java.util.List): void;
					public isSelectable(): boolean;
					public generateView(param0: android.content.Context): android.view.View;
					public withTag(param0: java.lang.Object): java.lang.Object;
					public constructor();
					public getTag(): java.lang.Object;
					public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
					public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					public getTypeface(): android.graphics.Typeface;
					public withName(param0: string): java.lang.Object;
					public isEnabled(): boolean;
					public withName(param0: number): java.lang.Object;
					public equals(param0: java.lang.Object): boolean;
					public equals(param0: number): boolean;
					public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
					public withSelectable(param0: boolean): java.lang.Object;
					public withSetSelected(param0: boolean): java.lang.Object;
					public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
					public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
					public withIcon(param0: number): java.lang.Object;
					public getLayoutRes(): number;
					public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
					public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
					public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Badgeable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Badgeable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withBadge(param0: string): java.lang.Object;
							withBadge(param0: number): java.lang.Object;
							withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
							getBadge(): com.mikepenz.materialdrawer.holder.StringHolder;
						});
						public withBadge(param0: string): java.lang.Object;
						public withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
						public withBadge(param0: number): java.lang.Object;
						public getBadge(): com.mikepenz.materialdrawer.holder.StringHolder;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class ColorfulBadgeable extends java.lang.Object implements com.mikepenz.materialdrawer.model.interfaces.Badgeable {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.ColorfulBadgeable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): java.lang.Object;
							getBadgeStyle(): com.mikepenz.materialdrawer.holder.BadgeStyle;
							withBadge(param0: string): java.lang.Object;
							withBadge(param0: number): java.lang.Object;
							withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
							getBadge(): com.mikepenz.materialdrawer.holder.StringHolder;
						});
						public withBadge(param0: string): java.lang.Object;
						public withBadge(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
						public withBadgeStyle(param0: com.mikepenz.materialdrawer.holder.BadgeStyle): java.lang.Object;
						public withBadge(param0: number): java.lang.Object;
						public getBadgeStyle(): com.mikepenz.materialdrawer.holder.BadgeStyle;
						public getBadge(): com.mikepenz.materialdrawer.holder.StringHolder;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class IDrawerItem extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.IDrawerItem interface with the provided implementation.
						 */
						public constructor(implementation: {
							getTag(): java.lang.Object;
							isEnabled(): boolean;
							isSelected(): boolean;
							withSetSelected(param0: boolean): java.lang.Object;
							isSelectable(): boolean;
							withSelectable(param0: boolean): java.lang.Object;
							getType(): number;
							getLayoutRes(): number;
							generateView(param0: android.content.Context): android.view.View;
							generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
							getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
							unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
							bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
							equals(param0: number): boolean;
						});
						public equals(param0: number): boolean;
						public generateView(param0: android.content.Context): android.view.View;
						public unbindView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public isSelected(): boolean;
						public withSetSelected(param0: boolean): java.lang.Object;
						public getViewHolder(param0: android.view.ViewGroup): android.support.v7.widget.RecyclerView.ViewHolder;
						public generateView(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
						public getType(): number;
						public isEnabled(): boolean;
						public getTag(): java.lang.Object;
						public getLayoutRes(): number;
						public equals(param0: java.lang.Object): boolean;
						public bindView(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: java.util.List): void;
						public withSelectable(param0: boolean): java.lang.Object;
						public isSelectable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class IProfile extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.IProfile interface with the provided implementation.
						 */
						public constructor(implementation: {
							withName(param0: string): java.lang.Object;
							getName(): com.mikepenz.materialdrawer.holder.StringHolder;
							withEmail(param0: string): java.lang.Object;
							getEmail(): com.mikepenz.materialdrawer.holder.StringHolder;
							withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
							withIcon(param0: android.graphics.Bitmap): java.lang.Object;
							withIcon(param0: number): java.lang.Object;
							withIcon(param0: string): java.lang.Object;
							withIcon(param0: android.net.Uri): java.lang.Object;
							withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
							getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
							withSelectable(param0: boolean): java.lang.Object;
							isSelectable(): boolean;
						});
						public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
						public getEmail(): com.mikepenz.materialdrawer.holder.StringHolder;
						public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
						public withIcon(param0: android.graphics.Bitmap): java.lang.Object;
						public withEmail(param0: string): java.lang.Object;
						public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
						public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
						public withSelectable(param0: boolean): java.lang.Object;
						public withIcon(param0: android.net.Uri): java.lang.Object;
						public withIcon(param0: number): java.lang.Object;
						public withName(param0: string): java.lang.Object;
						public isSelectable(): boolean;
						public withIcon(param0: string): java.lang.Object;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Iconable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Iconable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
							withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
							withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
							getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
						});
						public withIcon(param0: com.mikepenz.materialdrawer.holder.ImageHolder): java.lang.Object;
						public withIcon(param0: android.graphics.drawable.Drawable): java.lang.Object;
						public getIcon(): com.mikepenz.materialdrawer.holder.ImageHolder;
						public withIcon(param0: com.mikepenz.iconics.typeface.IIcon): java.lang.Object;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Nameable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Nameable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withName(param0: string): java.lang.Object;
							withName(param0: number): java.lang.Object;
							withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
							getName(): com.mikepenz.materialdrawer.holder.StringHolder;
						});
						public withName(param0: number): java.lang.Object;
						public withName(param0: string): java.lang.Object;
						public withName(param0: com.mikepenz.materialdrawer.holder.StringHolder): java.lang.Object;
						public getName(): com.mikepenz.materialdrawer.holder.StringHolder;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class OnPostBindViewListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.OnPostBindViewListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onBindView(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: android.view.View): void;
						});
						public onBindView(param0: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem, param1: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Selectable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Selectable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withSelectable(param0: boolean): java.lang.Object;
							isSelectable(): boolean;
						});
						public withSelectable(param0: boolean): java.lang.Object;
						public isSelectable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Tagable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Tagable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withTag(param0: java.lang.Object): java.lang.Object;
							getTag(): java.lang.Object;
						});
						public withTag(param0: java.lang.Object): java.lang.Object;
						public getTag(): java.lang.Object;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module interfaces {
					export class Typefaceable extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.model.interfaces.Typefaceable interface with the provided implementation.
						 */
						public constructor(implementation: {
							withTypeface(param0: android.graphics.Typeface): java.lang.Object;
							getTypeface(): android.graphics.Typeface;
						});
						public withTypeface(param0: android.graphics.Typeface): java.lang.Object;
						public getTypeface(): android.graphics.Typeface;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module model {
				export module utils {
					export class BadgeDrawableBuilder extends java.lang.Object {
						public constructor(param0: com.mikepenz.materialdrawer.holder.BadgeStyle);
						public build(param0: android.content.Context): android.graphics.drawable.StateListDrawable;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export abstract class AbstractDrawerImageLoader extends java.lang.Object implements com.mikepenz.materialdrawer.util.DrawerImageLoader.IDrawerImageLoader {
					public set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable, param3: string): void;
					public placeholder(param0: android.content.Context): android.graphics.drawable.Drawable;
					public placeholder(param0: android.content.Context, param1: string): android.graphics.drawable.Drawable;
					public constructor();
					public set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable): void;
					public cancel(param0: android.widget.ImageView): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export class DrawerImageLoader extends java.lang.Object {
					public static getInstance(): com.mikepenz.materialdrawer.util.DrawerImageLoader;
					public withHandleAllUris(param0: boolean): com.mikepenz.materialdrawer.util.DrawerImageLoader;
					public static init(param0: com.mikepenz.materialdrawer.util.DrawerImageLoader.IDrawerImageLoader): com.mikepenz.materialdrawer.util.DrawerImageLoader;
					public cancelImage(param0: android.widget.ImageView): void;
					public getImageLoader(): com.mikepenz.materialdrawer.util.DrawerImageLoader.IDrawerImageLoader;
					public setImage(param0: android.widget.ImageView, param1: android.net.Uri, param2: string): boolean;
					public setImageLoader(param0: com.mikepenz.materialdrawer.util.DrawerImageLoader.IDrawerImageLoader): void;
				}
				export module DrawerImageLoader {
					export class IDrawerImageLoader extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.util.DrawerImageLoader$IDrawerImageLoader interface with the provided implementation.
						 */
						public constructor(implementation: {
							set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable): void;
							set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable, param3: string): void;
							cancel(param0: android.widget.ImageView): void;
							placeholder(param0: android.content.Context): android.graphics.drawable.Drawable;
							placeholder(param0: android.content.Context, param1: string): android.graphics.drawable.Drawable;
						});
						public placeholder(param0: android.content.Context, param1: string): android.graphics.drawable.Drawable;
						public set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable): void;
						public cancel(param0: android.widget.ImageView): void;
						public placeholder(param0: android.content.Context): android.graphics.drawable.Drawable;
						public set(param0: android.widget.ImageView, param1: android.net.Uri, param2: android.graphics.drawable.Drawable, param3: string): void;
					}
					export class Tags extends java.lang.Enum {
						public static PROFILE: com.mikepenz.materialdrawer.util.DrawerImageLoader.Tags;
						public static PROFILE_DRAWER_ITEM: com.mikepenz.materialdrawer.util.DrawerImageLoader.Tags;
						public static ACCOUNT_HEADER: com.mikepenz.materialdrawer.util.DrawerImageLoader.Tags;
						public static valueOf(param0: string): com.mikepenz.materialdrawer.util.DrawerImageLoader.Tags;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): native.Array<com.mikepenz.materialdrawer.util.DrawerImageLoader.Tags>;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export class DrawerItemViewHelper extends java.lang.Object {
					public constructor(param0: android.content.Context);
					public withDrawerItems(param0: java.util.ArrayList): com.mikepenz.materialdrawer.util.DrawerItemViewHelper;
					public withDrawerItems(param0: native.Array<com.mikepenz.materialdrawer.model.interfaces.IDrawerItem>): com.mikepenz.materialdrawer.util.DrawerItemViewHelper;
					public withDivider(param0: boolean): com.mikepenz.materialdrawer.util.DrawerItemViewHelper;
					public withOnDrawerItemClickListener(param0: com.mikepenz.materialdrawer.util.DrawerItemViewHelper.OnDrawerItemClickListener): com.mikepenz.materialdrawer.util.DrawerItemViewHelper;
					public build(): android.view.View;
				}
				export module DrawerItemViewHelper {
					export class OnDrawerItemClickListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.mikepenz.materialdrawer.util.DrawerItemViewHelper$OnDrawerItemClickListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onItemClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
						});
						public onItemClick(param0: android.view.View, param1: com.mikepenz.materialdrawer.model.interfaces.IDrawerItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export class DrawerUIUtils extends java.lang.Object {
					public static setDrawerVerticalPadding(param0: android.view.View): void;
					public constructor();
					public static getIconStateList(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable): android.graphics.drawable.StateListDrawable;
					public static getDrawerItemBackground(param0: number): android.graphics.drawable.StateListDrawable;
					public static getOptimalDrawerWidth(param0: android.content.Context): number;
					public static setDrawerVerticalPadding(param0: android.view.View, param1: number): void;
					public static getTextColorStateList(param0: number, param1: number): android.content.res.ColorStateList;
					public static isSystemBarOnBottom(param0: android.content.Context): boolean;
					public static getPlaceHolder(param0: android.content.Context): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export class KeyboardUtil extends java.lang.Object {
					public static hideKeyboard(param0: android.app.Activity): void;
					public disable(): void;
					public constructor(param0: android.app.Activity, param1: android.view.View);
					public enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module util {
				export class PressedEffectStateListDrawable extends android.graphics.drawable.StateListDrawable {
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public constructor();
					public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number);
					public onStateChange(param0: native.Array<number>): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public isStateful(): boolean;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialdrawer {
			export module view {
				export class BezelImageView extends android.widget.ImageView {
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public setImageURI(param0: android.net.Uri): void;
					public setSelectorColor(param0: number): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public setImageBitmap(param0: android.graphics.Bitmap): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public disableTouchFeedback(param0: boolean): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setImageResource(param0: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
					public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public drawableStateChanged(): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
				}
				export module BezelImageView {
					export class CustomOutline extends android.view.ViewOutlineProvider {
						public getOutline(param0: android.view.View, param1: android.graphics.Outline): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export class BuildConfig extends java.lang.Object {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export class Materialize extends java.lang.Object {
				public setFullscreen(param0: boolean): void;
				public getContent(): android.view.ViewGroup;
				public setTintNavigationBar(param0: boolean): void;
				public constructor(param0: com.mikepenz.materialize.MaterializeBuilder);
				public setStatusBarColor(param0: number): void;
				public getScrimInsetsFrameLayout(): com.mikepenz.materialize.view.IScrimInsetsLayout;
				public keyboardSupportEnabled(param0: android.app.Activity, param1: boolean): void;
				public setTintStatusBar(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export class MaterializeBuilder extends java.lang.Object {
				public mActivity: android.app.Activity;
				public mRootView: android.view.ViewGroup;
				public mContentRoot: android.view.ViewGroup;
				public mScrimInsetsLayout: com.mikepenz.materialize.view.IScrimInsetsLayout;
				public mUseScrimInsetsLayout: boolean;
				public mStatusBarColor: number;
				public mStatusBarColorRes: number;
				public mTransparentStatusBar: boolean;
				public mTranslucentStatusBarProgrammatically: boolean;
				public mStatusBarPadding: boolean;
				public mTintStatusBar: boolean;
				public mTranslucentNavigationBarProgrammatically: boolean;
				public mTransparentNavigationBar: boolean;
				public mNavigationBarPadding: boolean;
				public mTintNavigationBar: boolean;
				public mFullscreen: boolean;
				public mSystemUIHidden: boolean;
				public mContainer: android.view.ViewGroup;
				public mContainerLayoutParams: android.view.ViewGroup.LayoutParams;
				public withTintedNavigationBar(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withRootView(param0: number): com.mikepenz.materialize.MaterializeBuilder;
				public withFullscreen(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withTransparentNavigationBar(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public constructor(param0: android.app.Activity);
				public withTintedStatusBar(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withActivity(param0: android.app.Activity): com.mikepenz.materialize.MaterializeBuilder;
				public withStatusBarColorRes(param0: number): com.mikepenz.materialize.MaterializeBuilder;
				public withTransparentStatusBar(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withTranslucentStatusBarProgrammatically(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withSystemUIHidden(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public constructor();
				public withUseScrimInsetsLayout(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withStatusBarColor(param0: number): com.mikepenz.materialize.MaterializeBuilder;
				public withTranslucentNavigationBarProgrammatically(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public build(): com.mikepenz.materialize.Materialize;
				public withStatusBarPadding(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withContainer(param0: android.view.ViewGroup, param1: android.view.ViewGroup.LayoutParams): com.mikepenz.materialize.MaterializeBuilder;
				public withNavigationBarPadding(param0: boolean): com.mikepenz.materialize.MaterializeBuilder;
				public withRootView(param0: android.view.ViewGroup): com.mikepenz.materialize.MaterializeBuilder;
				public withContainer(param0: android.view.ViewGroup): com.mikepenz.materialize.MaterializeBuilder;
				public withContainerLayoutParams(param0: android.view.ViewGroup.LayoutParams): com.mikepenz.materialize.MaterializeBuilder;
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module color {
				export class IColor extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialize.color.IColor interface with the provided implementation.
					 */
					public constructor(implementation: {
						getAsString(): string;
						getAsColor(): number;
						getAsResource(): number;
					});
					public getAsString(): string;
					public getAsResource(): number;
					public getAsColor(): number;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module color {
				export class Material extends java.lang.Object {
					public constructor();
				}
				export module Material {
					export class Amber extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Amber;
						public static _100: com.mikepenz.materialize.color.Material.Amber;
						public static _200: com.mikepenz.materialize.color.Material.Amber;
						public static _300: com.mikepenz.materialize.color.Material.Amber;
						public static _400: com.mikepenz.materialize.color.Material.Amber;
						public static _500: com.mikepenz.materialize.color.Material.Amber;
						public static _600: com.mikepenz.materialize.color.Material.Amber;
						public static _700: com.mikepenz.materialize.color.Material.Amber;
						public static _800: com.mikepenz.materialize.color.Material.Amber;
						public static _900: com.mikepenz.materialize.color.Material.Amber;
						public static _A100: com.mikepenz.materialize.color.Material.Amber;
						public static _A200: com.mikepenz.materialize.color.Material.Amber;
						public static _A400: com.mikepenz.materialize.color.Material.Amber;
						public static _A700: com.mikepenz.materialize.color.Material.Amber;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Amber;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Amber>;
					}
					export class Black extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _1000: com.mikepenz.materialize.color.Material.Black;
						public getAsColor(): number;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Black>;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Black;
						public getAsString(): string;
					}
					export class Blue extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Blue;
						public static _100: com.mikepenz.materialize.color.Material.Blue;
						public static _200: com.mikepenz.materialize.color.Material.Blue;
						public static _300: com.mikepenz.materialize.color.Material.Blue;
						public static _400: com.mikepenz.materialize.color.Material.Blue;
						public static _500: com.mikepenz.materialize.color.Material.Blue;
						public static _600: com.mikepenz.materialize.color.Material.Blue;
						public static _700: com.mikepenz.materialize.color.Material.Blue;
						public static _800: com.mikepenz.materialize.color.Material.Blue;
						public static _900: com.mikepenz.materialize.color.Material.Blue;
						public static _A100: com.mikepenz.materialize.color.Material.Blue;
						public static _A200: com.mikepenz.materialize.color.Material.Blue;
						public static _A400: com.mikepenz.materialize.color.Material.Blue;
						public static _A700: com.mikepenz.materialize.color.Material.Blue;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Blue;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Blue>;
					}
					export class BlueGrey extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _100: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _200: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _300: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _400: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _500: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _600: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _700: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _800: com.mikepenz.materialize.color.Material.BlueGrey;
						public static _900: com.mikepenz.materialize.color.Material.BlueGrey;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.BlueGrey;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.BlueGrey>;
						public getAsString(): string;
					}
					export class Brown extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Brown;
						public static _100: com.mikepenz.materialize.color.Material.Brown;
						public static _200: com.mikepenz.materialize.color.Material.Brown;
						public static _300: com.mikepenz.materialize.color.Material.Brown;
						public static _400: com.mikepenz.materialize.color.Material.Brown;
						public static _500: com.mikepenz.materialize.color.Material.Brown;
						public static _600: com.mikepenz.materialize.color.Material.Brown;
						public static _700: com.mikepenz.materialize.color.Material.Brown;
						public static _800: com.mikepenz.materialize.color.Material.Brown;
						public static _900: com.mikepenz.materialize.color.Material.Brown;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Brown;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Brown>;
					}
					export class Cyan extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Cyan;
						public static _100: com.mikepenz.materialize.color.Material.Cyan;
						public static _200: com.mikepenz.materialize.color.Material.Cyan;
						public static _300: com.mikepenz.materialize.color.Material.Cyan;
						public static _400: com.mikepenz.materialize.color.Material.Cyan;
						public static _500: com.mikepenz.materialize.color.Material.Cyan;
						public static _600: com.mikepenz.materialize.color.Material.Cyan;
						public static _700: com.mikepenz.materialize.color.Material.Cyan;
						public static _800: com.mikepenz.materialize.color.Material.Cyan;
						public static _900: com.mikepenz.materialize.color.Material.Cyan;
						public static _A100: com.mikepenz.materialize.color.Material.Cyan;
						public static _A200: com.mikepenz.materialize.color.Material.Cyan;
						public static _A400: com.mikepenz.materialize.color.Material.Cyan;
						public static _A700: com.mikepenz.materialize.color.Material.Cyan;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Cyan>;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Cyan;
						public getAsString(): string;
					}
					export class DeepOrange extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _100: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _200: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _300: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _400: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _500: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _600: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _700: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _800: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _900: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _A100: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _A200: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _A400: com.mikepenz.materialize.color.Material.DeepOrange;
						public static _A700: com.mikepenz.materialize.color.Material.DeepOrange;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.DeepOrange;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.DeepOrange>;
					}
					export class DeepPurple extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _100: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _200: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _300: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _400: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _500: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _600: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _700: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _800: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _900: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _A100: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _A200: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _A400: com.mikepenz.materialize.color.Material.DeepPurple;
						public static _A700: com.mikepenz.materialize.color.Material.DeepPurple;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.DeepPurple;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.DeepPurple>;
					}
					export class Elements extends java.lang.Object {
						public constructor();
					}
					export module Elements {
						export class Dark extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
							public static ICON: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static TEXT: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static SECONDARY_TEXT: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static SECONDARY_ICON: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static DISABLED_TEXT: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static HINT_TEXT: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static DIVIDER: com.mikepenz.materialize.color.Material.Elements.Dark;
							public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Elements.Dark;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public getAsColor(): number;
							public getAsString(): string;
							public getAsResource(): number;
							public static values(): native.Array<com.mikepenz.materialize.color.Material.Elements.Dark>;
						}
						export class Light extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
							public static ICON: com.mikepenz.materialize.color.Material.Elements.Light;
							public static TEXT: com.mikepenz.materialize.color.Material.Elements.Light;
							public static SECONDARY_TEXT: com.mikepenz.materialize.color.Material.Elements.Light;
							public static SECONDARY_ICON: com.mikepenz.materialize.color.Material.Elements.Light;
							public static DISABLED_TEXT: com.mikepenz.materialize.color.Material.Elements.Light;
							public static HINT_TEXT: com.mikepenz.materialize.color.Material.Elements.Light;
							public static DIVIDER: com.mikepenz.materialize.color.Material.Elements.Light;
							public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Elements.Light;
							public static values(): native.Array<com.mikepenz.materialize.color.Material.Elements.Light>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public getAsColor(): number;
							public getAsString(): string;
							public getAsResource(): number;
						}
					}
					export class Green extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Green;
						public static _100: com.mikepenz.materialize.color.Material.Green;
						public static _200: com.mikepenz.materialize.color.Material.Green;
						public static _300: com.mikepenz.materialize.color.Material.Green;
						public static _400: com.mikepenz.materialize.color.Material.Green;
						public static _500: com.mikepenz.materialize.color.Material.Green;
						public static _600: com.mikepenz.materialize.color.Material.Green;
						public static _700: com.mikepenz.materialize.color.Material.Green;
						public static _800: com.mikepenz.materialize.color.Material.Green;
						public static _900: com.mikepenz.materialize.color.Material.Green;
						public static _A100: com.mikepenz.materialize.color.Material.Green;
						public static _A200: com.mikepenz.materialize.color.Material.Green;
						public static _A400: com.mikepenz.materialize.color.Material.Green;
						public static _A700: com.mikepenz.materialize.color.Material.Green;
						public getAsColor(): number;
						public getAsResource(): number;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Green>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Green;
					}
					export class Grey extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Grey;
						public static _100: com.mikepenz.materialize.color.Material.Grey;
						public static _200: com.mikepenz.materialize.color.Material.Grey;
						public static _300: com.mikepenz.materialize.color.Material.Grey;
						public static _400: com.mikepenz.materialize.color.Material.Grey;
						public static _500: com.mikepenz.materialize.color.Material.Grey;
						public static _600: com.mikepenz.materialize.color.Material.Grey;
						public static _700: com.mikepenz.materialize.color.Material.Grey;
						public static _800: com.mikepenz.materialize.color.Material.Grey;
						public static _900: com.mikepenz.materialize.color.Material.Grey;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Grey>;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Grey;
					}
					export class Indigo extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Indigo;
						public static _100: com.mikepenz.materialize.color.Material.Indigo;
						public static _200: com.mikepenz.materialize.color.Material.Indigo;
						public static _300: com.mikepenz.materialize.color.Material.Indigo;
						public static _400: com.mikepenz.materialize.color.Material.Indigo;
						public static _500: com.mikepenz.materialize.color.Material.Indigo;
						public static _600: com.mikepenz.materialize.color.Material.Indigo;
						public static _700: com.mikepenz.materialize.color.Material.Indigo;
						public static _800: com.mikepenz.materialize.color.Material.Indigo;
						public static _900: com.mikepenz.materialize.color.Material.Indigo;
						public static _A100: com.mikepenz.materialize.color.Material.Indigo;
						public static _A200: com.mikepenz.materialize.color.Material.Indigo;
						public static _A400: com.mikepenz.materialize.color.Material.Indigo;
						public static _A700: com.mikepenz.materialize.color.Material.Indigo;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Indigo;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Indigo>;
					}
					export class LightBlue extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.LightBlue;
						public static _100: com.mikepenz.materialize.color.Material.LightBlue;
						public static _200: com.mikepenz.materialize.color.Material.LightBlue;
						public static _300: com.mikepenz.materialize.color.Material.LightBlue;
						public static _400: com.mikepenz.materialize.color.Material.LightBlue;
						public static _500: com.mikepenz.materialize.color.Material.LightBlue;
						public static _600: com.mikepenz.materialize.color.Material.LightBlue;
						public static _700: com.mikepenz.materialize.color.Material.LightBlue;
						public static _800: com.mikepenz.materialize.color.Material.LightBlue;
						public static _900: com.mikepenz.materialize.color.Material.LightBlue;
						public static _A100: com.mikepenz.materialize.color.Material.LightBlue;
						public static _A200: com.mikepenz.materialize.color.Material.LightBlue;
						public static _A400: com.mikepenz.materialize.color.Material.LightBlue;
						public static _A700: com.mikepenz.materialize.color.Material.LightBlue;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.LightBlue>;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.LightBlue;
						public getAsString(): string;
					}
					export class LightGreen extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.LightGreen;
						public static _100: com.mikepenz.materialize.color.Material.LightGreen;
						public static _200: com.mikepenz.materialize.color.Material.LightGreen;
						public static _300: com.mikepenz.materialize.color.Material.LightGreen;
						public static _400: com.mikepenz.materialize.color.Material.LightGreen;
						public static _500: com.mikepenz.materialize.color.Material.LightGreen;
						public static _600: com.mikepenz.materialize.color.Material.LightGreen;
						public static _700: com.mikepenz.materialize.color.Material.LightGreen;
						public static _800: com.mikepenz.materialize.color.Material.LightGreen;
						public static _900: com.mikepenz.materialize.color.Material.LightGreen;
						public static _A100: com.mikepenz.materialize.color.Material.LightGreen;
						public static _A200: com.mikepenz.materialize.color.Material.LightGreen;
						public static _A400: com.mikepenz.materialize.color.Material.LightGreen;
						public static _A700: com.mikepenz.materialize.color.Material.LightGreen;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.LightGreen;
						public getAsColor(): number;
						public getAsResource(): number;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.LightGreen>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
					}
					export class Lime extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Lime;
						public static _100: com.mikepenz.materialize.color.Material.Lime;
						public static _200: com.mikepenz.materialize.color.Material.Lime;
						public static _300: com.mikepenz.materialize.color.Material.Lime;
						public static _400: com.mikepenz.materialize.color.Material.Lime;
						public static _500: com.mikepenz.materialize.color.Material.Lime;
						public static _600: com.mikepenz.materialize.color.Material.Lime;
						public static _700: com.mikepenz.materialize.color.Material.Lime;
						public static _800: com.mikepenz.materialize.color.Material.Lime;
						public static _900: com.mikepenz.materialize.color.Material.Lime;
						public static _A100: com.mikepenz.materialize.color.Material.Lime;
						public static _A200: com.mikepenz.materialize.color.Material.Lime;
						public static _A400: com.mikepenz.materialize.color.Material.Lime;
						public static _A700: com.mikepenz.materialize.color.Material.Lime;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Lime;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Lime>;
					}
					export class Orange extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Orange;
						public static _100: com.mikepenz.materialize.color.Material.Orange;
						public static _200: com.mikepenz.materialize.color.Material.Orange;
						public static _300: com.mikepenz.materialize.color.Material.Orange;
						public static _400: com.mikepenz.materialize.color.Material.Orange;
						public static _500: com.mikepenz.materialize.color.Material.Orange;
						public static _600: com.mikepenz.materialize.color.Material.Orange;
						public static _700: com.mikepenz.materialize.color.Material.Orange;
						public static _800: com.mikepenz.materialize.color.Material.Orange;
						public static _900: com.mikepenz.materialize.color.Material.Orange;
						public static _A100: com.mikepenz.materialize.color.Material.Orange;
						public static _A200: com.mikepenz.materialize.color.Material.Orange;
						public static _A400: com.mikepenz.materialize.color.Material.Orange;
						public static _A700: com.mikepenz.materialize.color.Material.Orange;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Orange>;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Orange;
					}
					export class Pink extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Pink;
						public static _100: com.mikepenz.materialize.color.Material.Pink;
						public static _200: com.mikepenz.materialize.color.Material.Pink;
						public static _300: com.mikepenz.materialize.color.Material.Pink;
						public static _400: com.mikepenz.materialize.color.Material.Pink;
						public static _500: com.mikepenz.materialize.color.Material.Pink;
						public static _600: com.mikepenz.materialize.color.Material.Pink;
						public static _700: com.mikepenz.materialize.color.Material.Pink;
						public static _800: com.mikepenz.materialize.color.Material.Pink;
						public static _900: com.mikepenz.materialize.color.Material.Pink;
						public static _A100: com.mikepenz.materialize.color.Material.Pink;
						public static _A200: com.mikepenz.materialize.color.Material.Pink;
						public static _A400: com.mikepenz.materialize.color.Material.Pink;
						public static _A700: com.mikepenz.materialize.color.Material.Pink;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Pink>;
						public getAsColor(): number;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Pink;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
					}
					export class Purple extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Purple;
						public static _100: com.mikepenz.materialize.color.Material.Purple;
						public static _200: com.mikepenz.materialize.color.Material.Purple;
						public static _300: com.mikepenz.materialize.color.Material.Purple;
						public static _400: com.mikepenz.materialize.color.Material.Purple;
						public static _500: com.mikepenz.materialize.color.Material.Purple;
						public static _600: com.mikepenz.materialize.color.Material.Purple;
						public static _700: com.mikepenz.materialize.color.Material.Purple;
						public static _800: com.mikepenz.materialize.color.Material.Purple;
						public static _900: com.mikepenz.materialize.color.Material.Purple;
						public static _A100: com.mikepenz.materialize.color.Material.Purple;
						public static _A200: com.mikepenz.materialize.color.Material.Purple;
						public static _A400: com.mikepenz.materialize.color.Material.Purple;
						public static _A700: com.mikepenz.materialize.color.Material.Purple;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Purple;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Purple>;
					}
					export class Red extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Red;
						public static _100: com.mikepenz.materialize.color.Material.Red;
						public static _200: com.mikepenz.materialize.color.Material.Red;
						public static _300: com.mikepenz.materialize.color.Material.Red;
						public static _400: com.mikepenz.materialize.color.Material.Red;
						public static _500: com.mikepenz.materialize.color.Material.Red;
						public static _600: com.mikepenz.materialize.color.Material.Red;
						public static _700: com.mikepenz.materialize.color.Material.Red;
						public static _800: com.mikepenz.materialize.color.Material.Red;
						public static _900: com.mikepenz.materialize.color.Material.Red;
						public static _A100: com.mikepenz.materialize.color.Material.Red;
						public static _A200: com.mikepenz.materialize.color.Material.Red;
						public static _A400: com.mikepenz.materialize.color.Material.Red;
						public static _A700: com.mikepenz.materialize.color.Material.Red;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Red>;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Red;
					}
					export class Teal extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Teal;
						public static _100: com.mikepenz.materialize.color.Material.Teal;
						public static _200: com.mikepenz.materialize.color.Material.Teal;
						public static _300: com.mikepenz.materialize.color.Material.Teal;
						public static _400: com.mikepenz.materialize.color.Material.Teal;
						public static _500: com.mikepenz.materialize.color.Material.Teal;
						public static _600: com.mikepenz.materialize.color.Material.Teal;
						public static _700: com.mikepenz.materialize.color.Material.Teal;
						public static _800: com.mikepenz.materialize.color.Material.Teal;
						public static _900: com.mikepenz.materialize.color.Material.Teal;
						public static _A100: com.mikepenz.materialize.color.Material.Teal;
						public static _A200: com.mikepenz.materialize.color.Material.Teal;
						public static _A400: com.mikepenz.materialize.color.Material.Teal;
						public static _A700: com.mikepenz.materialize.color.Material.Teal;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Teal;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Teal>;
					}
					export class White extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _1000: com.mikepenz.materialize.color.Material.White;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.White>;
						public getAsColor(): number;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.White;
					}
					export class Yellow extends java.lang.Enum implements com.mikepenz.materialize.color.IColor {
						public static _50: com.mikepenz.materialize.color.Material.Yellow;
						public static _100: com.mikepenz.materialize.color.Material.Yellow;
						public static _200: com.mikepenz.materialize.color.Material.Yellow;
						public static _300: com.mikepenz.materialize.color.Material.Yellow;
						public static _400: com.mikepenz.materialize.color.Material.Yellow;
						public static _500: com.mikepenz.materialize.color.Material.Yellow;
						public static _600: com.mikepenz.materialize.color.Material.Yellow;
						public static _700: com.mikepenz.materialize.color.Material.Yellow;
						public static _800: com.mikepenz.materialize.color.Material.Yellow;
						public static _900: com.mikepenz.materialize.color.Material.Yellow;
						public static _A100: com.mikepenz.materialize.color.Material.Yellow;
						public static _A200: com.mikepenz.materialize.color.Material.Yellow;
						public static _A400: com.mikepenz.materialize.color.Material.Yellow;
						public static _A700: com.mikepenz.materialize.color.Material.Yellow;
						public getAsColor(): number;
						public static values(): native.Array<com.mikepenz.materialize.color.Material.Yellow>;
						public static valueOf(param0: string): com.mikepenz.materialize.color.Material.Yellow;
						public getAsResource(): number;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public getAsString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module drawable {
				export class PressedEffectStateListDrawable extends android.graphics.drawable.StateListDrawable {
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public constructor();
					public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number);
					public constructor(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: number, param3: number);
					public onStateChange(param0: native.Array<number>): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public isStateful(): boolean;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module holder {
				export class ColorHolder extends java.lang.Object {
					public applyToOr(param0: android.widget.TextView, param1: android.content.res.ColorStateList): void;
					public static fromColor(param0: number): com.mikepenz.materialize.holder.ColorHolder;
					public applyToBackground(param0: android.view.View): void;
					public static color(param0: com.mikepenz.materialize.holder.ColorHolder, param1: android.content.Context, param2: number, param3: number): number;
					public getColorInt(): number;
					public color(param0: android.content.Context, param1: number, param2: number): number;
					public static applyToOr(param0: com.mikepenz.materialize.holder.ColorHolder, param1: android.widget.TextView, param2: android.content.res.ColorStateList): void;
					public static applyToOrTransparent(param0: com.mikepenz.materialize.holder.ColorHolder, param1: android.content.Context, param2: android.graphics.drawable.GradientDrawable): void;
					public constructor();
					public applyTo(param0: android.content.Context, param1: android.graphics.drawable.GradientDrawable): void;
					public setColorInt(param0: number): void;
					public static fromColorRes(param0: number): com.mikepenz.materialize.holder.ColorHolder;
					public static color(param0: com.mikepenz.materialize.holder.ColorHolder, param1: android.content.Context): number;
					public getColorRes(): number;
					public setColorRes(param0: number): void;
					public color(param0: android.content.Context): number;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module holder {
				export class DimenHolder extends java.lang.Object {
					public setDp(param0: number): void;
					public getDp(): number;
					public constructor();
					public setResource(param0: number): void;
					public static fromResource(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public static fromPixel(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public static fromDp(param0: number): com.mikepenz.materialize.holder.DimenHolder;
					public getPixel(): number;
					public setPixel(param0: number): void;
					public getResource(): number;
					public asPixel(param0: android.content.Context): number;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module holder {
				export class ImageHolder extends java.lang.Object {
					public getUri(): android.net.Uri;
					public getIconRes(): number;
					public constructor(param0: string);
					public getBitmap(): android.graphics.Bitmap;
					public setBitmap(param0: android.graphics.Bitmap): void;
					public static applyToOrSetInvisible(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView): void;
					public applyTo(param0: android.widget.ImageView, param1: string): boolean;
					public applyTo(param0: android.widget.ImageView): boolean;
					public static applyTo(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView): boolean;
					public static applyToOrSetGone(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: string): void;
					public constructor(param0: android.graphics.drawable.Drawable);
					public static applyTo(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: string): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public static decideIcon(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.content.Context, param2: number, param3: boolean): android.graphics.drawable.Drawable;
					public constructor(param0: number);
					public constructor(param0: android.graphics.Bitmap);
					public decideIcon(param0: android.content.Context, param1: number, param2: boolean): android.graphics.drawable.Drawable;
					public static applyDecidedIconOrSetGone(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: number, param3: boolean): void;
					public getIcon(): android.graphics.drawable.Drawable;
					public setUri(param0: android.net.Uri): void;
					public static applyMultiIconTo(param0: android.graphics.drawable.Drawable, param1: number, param2: android.graphics.drawable.Drawable, param3: number, param4: boolean, param5: android.widget.ImageView): void;
					public setIconRes(param0: number): void;
					public static applyToOrSetGone(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView): void;
					public static applyToOrSetInvisible(param0: com.mikepenz.materialize.holder.ImageHolder, param1: android.widget.ImageView, param2: string): void;
					public constructor(param0: android.net.Uri);
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module holder {
				export class StringHolder extends java.lang.Object {
					public static applyToOrHide(param0: com.mikepenz.materialize.holder.StringHolder, param1: android.widget.TextView): boolean;
					public toString(): string;
					public setText(param0: string): void;
					public applyTo(param0: android.widget.TextView): void;
					public constructor(param0: string);
					public getText(): string;
					public applyToOrHide(param0: android.widget.TextView): boolean;
					public getText(param0: android.content.Context): string;
					public static applyTo(param0: com.mikepenz.materialize.holder.StringHolder, param1: android.widget.TextView): void;
					public setTextRes(param0: number): void;
					public getTextRes(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module util {
				export class KeyboardUtil extends java.lang.Object {
					public static hideKeyboard(param0: android.app.Activity): void;
					public disable(): void;
					public constructor(param0: android.app.Activity, param1: android.view.View);
					public enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module util {
				export class SystemUtils extends java.lang.Object {
					public static getScreenOrientation(): number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module util {
				export class UIUtils extends java.lang.Object {
					public static getThemeColor(param0: android.content.Context, param1: number): number;
					public static getNavigationBarHeight(param0: android.content.Context): number;
					public static getSelectableBackground(param0: android.content.Context): android.graphics.drawable.Drawable;
					public static getThemeAttributeDimensionSize(param0: android.content.Context, param1: number): number;
					public static setBackground(param0: android.view.View, param1: number): void;
					public static setTranslucentStatusFlag(param0: android.app.Activity, param1: boolean): void;
					public static setFlag(param0: android.app.Activity, param1: number, param2: boolean): void;
					public static convertDpToPixel(param0: number, param1: android.content.Context): number;
					public static getScreenHeight(param0: android.content.Context): number;
					public static getActionBarHeight(param0: android.content.Context): number;
					public static getSelectableBackground(param0: android.content.Context, param1: number, param2: boolean): android.graphics.drawable.StateListDrawable;
					public static setTranslucentNavigationFlag(param0: android.app.Activity, param1: boolean): void;
					public static getThemeColorFromAttrOrRes(param0: android.content.Context, param1: number, param2: number): number;
					public static getSelectableBackgroundRes(param0: android.content.Context): number;
					public constructor();
					public static getIconStateList(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable): android.graphics.drawable.StateListDrawable;
					public static setBackground(param0: android.view.View, param1: android.graphics.drawable.Drawable): void;
					public static adjustAlpha(param0: number, param1: number): number;
					public static getStatusBarHeight(param0: android.content.Context): number;
					public static getScreenWidth(param0: android.content.Context): number;
					public static getSelectablePressedBackground(param0: android.content.Context, param1: number, param2: number, param3: boolean): android.graphics.drawable.StateListDrawable;
					public static convertPixelsToDp(param0: number, param1: android.content.Context): number;
					public static getStatusBarHeight(param0: android.content.Context, param1: boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module view {
				export class IScrimInsetsLayout extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialize.view.IScrimInsetsLayout interface with the provided implementation.
					 */
					public constructor(implementation: {
						getView(): android.view.ViewGroup;
						getInsetForeground(): android.graphics.drawable.Drawable;
						setInsetForeground(param0: android.graphics.drawable.Drawable): void;
						setInsetForeground(param0: number): void;
						isTintStatusBar(): boolean;
						setTintStatusBar(param0: boolean): void;
						isTintNavigationBar(): boolean;
						setTintNavigationBar(param0: boolean): void;
						isSystemUIVisible(): boolean;
						setSystemUIVisible(param0: boolean): void;
						setOnInsetsCallback(param0: com.mikepenz.materialize.view.OnInsetsCallback): void;
						getOnInsetsCallback(): com.mikepenz.materialize.view.OnInsetsCallback;
						setFitsSystemWindows(param0: boolean): void;
					});
					public isSystemUIVisible(): boolean;
					public setOnInsetsCallback(param0: com.mikepenz.materialize.view.OnInsetsCallback): void;
					public setInsetForeground(param0: number): void;
					public setInsetForeground(param0: android.graphics.drawable.Drawable): void;
					public getOnInsetsCallback(): com.mikepenz.materialize.view.OnInsetsCallback;
					public isTintNavigationBar(): boolean;
					public setTintStatusBar(param0: boolean): void;
					public getView(): android.view.ViewGroup;
					public isTintStatusBar(): boolean;
					public getInsetForeground(): android.graphics.drawable.Drawable;
					public setTintNavigationBar(param0: boolean): void;
					public setSystemUIVisible(param0: boolean): void;
					public setFitsSystemWindows(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module view {
				export class OnInsetsCallback extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.mikepenz.materialize.view.OnInsetsCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onInsetsChanged(param0: android.support.v4.view.WindowInsetsCompat): void;
					});
					public onInsetsChanged(param0: android.support.v4.view.WindowInsetsCompat): void;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module view {
				export class ScrimInsetsFrameLayout extends android.widget.FrameLayout implements com.mikepenz.materialize.view.IScrimInsetsLayout {
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
					public isLayoutRequested(): boolean;
					public setInsetForeground(param0: number): void;
					public onAttachedToWindow(): void;
					public getOnInsetsCallback(): com.mikepenz.materialize.view.OnInsetsCallback;
					public clearChildFocus(param0: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public isLayoutDirectionResolved(): boolean;
					public addView(param0: android.view.View, param1: number): void;
					public isTintStatusBar(): boolean;
					public getInsetForeground(): android.graphics.drawable.Drawable;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public bringChildToFront(param0: android.view.View): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public setTintNavigationBar(param0: boolean): void;
					public requestFitSystemWindows(): void;
					public focusSearch(param0: number): android.view.View;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isSystemUIVisible(): boolean;
					public isTextAlignmentResolved(): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public canResolveTextAlignment(): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public canResolveTextDirection(): boolean;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public isTintNavigationBar(): boolean;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getView(): android.view.ViewGroup;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setSystemUIVisible(param0: boolean): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public setFitsSystemWindows(param0: boolean): void;
					public draw(param0: android.graphics.Canvas): void;
					public onDetachedFromWindow(): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public canResolveLayoutDirection(): boolean;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public removeView(param0: android.view.View): void;
					public getTextAlignment(): number;
					public setOnInsetsCallback(param0: com.mikepenz.materialize.view.OnInsetsCallback): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public setInsetForeground(param0: android.graphics.drawable.Drawable): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTintStatusBar(param0: boolean): void;
					public constructor(param0: android.content.Context);
					public addView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mikepenz {
		export module materialize {
			export module view {
				export class ScrimInsetsRelativeLayout extends android.widget.RelativeLayout implements com.mikepenz.materialize.view.IScrimInsetsLayout {
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
					public isLayoutRequested(): boolean;
					public setInsetForeground(param0: number): void;
					public onAttachedToWindow(): void;
					public getOnInsetsCallback(): com.mikepenz.materialize.view.OnInsetsCallback;
					public clearChildFocus(param0: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public isLayoutDirectionResolved(): boolean;
					public addView(param0: android.view.View, param1: number): void;
					public isTintStatusBar(): boolean;
					public getInsetForeground(): android.graphics.drawable.Drawable;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public bringChildToFront(param0: android.view.View): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public setTintNavigationBar(param0: boolean): void;
					public requestFitSystemWindows(): void;
					public focusSearch(param0: number): android.view.View;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isSystemUIVisible(): boolean;
					public isTextAlignmentResolved(): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public canResolveTextAlignment(): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public canResolveTextDirection(): boolean;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public isTintNavigationBar(): boolean;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getView(): android.view.ViewGroup;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setSystemUIVisible(param0: boolean): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public setFitsSystemWindows(param0: boolean): void;
					public draw(param0: android.graphics.Canvas): void;
					public onDetachedFromWindow(): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public canResolveLayoutDirection(): boolean;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public removeView(param0: android.view.View): void;
					public getTextAlignment(): number;
					public setOnInsetsCallback(param0: com.mikepenz.materialize.view.OnInsetsCallback): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public setInsetForeground(param0: android.graphics.drawable.Drawable): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTintStatusBar(param0: boolean): void;
					public constructor(param0: android.content.Context);
					public addView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}
