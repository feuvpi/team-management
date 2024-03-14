<script lang="ts">
	 import { onMount } from 'svelte';
	import '../app.postcss';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import { AppShell, AppBar, initializeStores, Drawer, getDrawerStore, Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import { isMobile } from "../lib/stores/ui";
	export let data: LayoutData;

	const checkScreenWidth = () => {
		let windowIsMobile = window.innerWidth < 768
		
	isMobile.set(windowIsMobile);
	console.log(isMobile) // Defina o limite de largura para considerar como tela móvel
};

onMount(() => {
    checkScreenWidth();
	window.addEventListener("resize", checkScreenWidth);
  });

	
	//- sskeleton tores
	initializeStores();
	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();

	// -- effects
	// $: positionClasses = $drawerStore.open ? 'translate-x-[-50%]' : '';
	$: positionClasses = $drawerStore.open ? $isMobile ? 'translate-y-[10%]' : 'translate-x-[-50%]' : '';


	
	// Listen for window resize events
	// window.addEventListener("resize", checkScreenWidth);
</script>

<!-- App Shell -->
{#if $isMobile.valueOf()}
<Modal />
<Drawer />
<AppShell class="transition-transform {positionClasses}">

	<svelte:fragment slot="header">
		<Topbar/></svelte:fragment
	>
	<AppShell class="flex flex-row">
		<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<div class="h-fit mx-2 my-6">
			<slot />
		</div>
	</AppShell>

	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
<svelte:fragment slot="footer"><Navigation/></svelte:fragment>
</AppShell>



{:else}

<Modal />
<Drawer />
<AppShell class="transition-transform {positionClasses}">

	<svelte:fragment slot="header">
		<Topbar/></svelte:fragment
	>
	<AppShell class="flex flex-row">
		<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<div class="h-fit mx-2 my-6">
			<slot />
		</div>
	</AppShell>

	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>

{/if}
