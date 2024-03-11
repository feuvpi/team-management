<script lang="ts">
	import '../app.postcss';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
    import { LightSwitch } from '@skeletonlabs/skeleton';
	export let data: LayoutData;
	// const useThisToValidate = data.session.user
</script>

<!-- App Shell -->

<AppShell>

	<svelte:fragment slot="header">
		<Topbar/></svelte:fragment
	>
	<AppShell class="flex flex-row">
		<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<div class="h-fit mx-32 my-6 border-2 border-red-600">
			<slot />
		</div>

	</AppShell>

	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
