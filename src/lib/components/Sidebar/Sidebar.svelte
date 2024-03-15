<script>
	// @ts-nocheck
	import { sidebarOpen, closeOpenSidebar } from '$lib/components/Sidebar/store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';
	// import { customTheme } from '../../custom-theme'
	import { fontFamilyBase, fontColorBase } from '../../../custom-theme'
	const style = {
		mobileOrientation: {
			start: 'left-0 ',
			end: 'right-0 lg:left-0'
		},
		container: `pb-32 lg:pb-12`,
		close: `duration-700 ease-out hidden transition-all lg:w-24 z-1 shadow-lg`,
		default: `h-screen overflow-y-auto top-0 lg:block shadow-lg transform skew-x-1`,
		open: `duration-500 ease-in transition-all w-8/12 z-1 sm:w-5/12 md:w-64 shadow-lg`
	};


	// const {
    //     properties: {
    //         '--theme-font-family-base': fontFamilyBase,
    //         '--theme-font-color-base': fontColorBase,
    //         // Add more theme properties as needed
    //     }
    // } = customTheme;

	export let mobileOrientation = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
	   style="font-family: {fontFamilyBase}; color: rgba({fontColorBase}, 1); box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1);"
>
	<div class={style.container}>
		<!-- <SidebarHeader /> -->
		<SidebarItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
