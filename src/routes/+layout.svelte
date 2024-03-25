<script lang="ts">
	 import { onMount } from 'svelte';
	import '../app.postcss';
	import AppRail from '$lib/components/AppRail.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import { AppShell, initializeStores, Drawer, getDrawerStore, Modal, getModalStore, RangeSlider, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
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

	let value = 15;
let max = 25;
	
	// Listen for window resize events
	// window.addEventListener("resize", checkScreenWidth);
</script>

<!-- App Shell -->
{#if $isMobile.valueOf()}
<Modal />
<Drawer>
(Content)
<h2 class="p-4">Filtro</h2>
</Drawer>
<AppShell class="transition-transform {positionClasses}">

	<svelte:fragment slot="header">
		<Topbar/></svelte:fragment
	>
	<AppShell class="flex flex-row">
		<svelte:fragment slot="sidebarLeft"><AppRail /></svelte:fragment>
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
<Drawer>
	<h2 class="p-4 font-mono font-bold text-4xl text-center">Filtro</h2>
	<label class="label px-12">
		<span>Select</span>
		<select class="select">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>
	</label>
	<div class="px-12 flex justify-center align">
		<div class="flex-grow justify-center align-center text-center"> <!-- This div will occupy the remaining width -->
			<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
				<RadioItem bind:group={value} name="justify" value={0}>Direito</RadioItem>
				<RadioItem bind:group={value} name="justify" value={1}>Esquerdo</RadioItem>
			</RadioGroup>
		</div>
	
	</div>

	<div class="flex-grow px-12 pt-4"> <!-- This div will occupy the remaining width -->
		<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>
			<div class="flex justify-between items-center">
				<div class="font-bold">Idade Maxima</div>
				<div class="text-xs">{value} / {max}</div>
			</div>
		</RangeSlider>
	</div>

	<div class="flex-grow px-12 pt-6"> <!-- This div will occupy the remaining width -->
		<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>
			<div class="flex justify-between items-center">
				<div class="font-bold">Altura Maxima</div>
				<div class="text-xs">{value} / {max}</div>
			</div>
		</RangeSlider>
	</div>

	<div class="flex-grow px-12 pt-6"> <!-- This div will occupy the remaining width -->
		<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>
			<div class="flex justify-between items-center">
				<div class="font-bold">Peso</div>
				<div class="text-xs">{value} / {max}</div>
			</div>
		</RangeSlider>
	</div>


	</Drawer>
<AppShell class="transition-transform {positionClasses}">

	<svelte:fragment slot="header">
		<Topbar/></svelte:fragment
	>
	<AppShell class="flex flex-row">
		<svelte:fragment slot="sidebarLeft"><AppRail /></svelte:fragment>
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
