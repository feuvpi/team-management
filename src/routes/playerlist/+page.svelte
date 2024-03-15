<script lang="ts">
    import type { PageData } from '../player/$types';
    import { Table, tableMapperValues, getDrawerStore, getModalStore } from '@skeletonlabs/skeleton';
    import type { TableSource, DrawerSettings, ModalSettings } from '@skeletonlabs/skeleton';
    export let data: PageData;
	import { isMobile } from "$lib/stores/ui";
	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();
	const sourceData = [
    { 
		position: 1,
        nome: 'Cristiano Ronaldo', 
        nascimento: '1985-02-05', 
        idade: 39, 
        posicao: 'Forward', 
        peso: 83, 
        pe: 'Right'
    },
    { 
		position: 2,
        nome: 'Lionel Messi', 
        nascimento: '1987-06-24', 
        idade: 36, 
        posicao: 'Forward', 
        peso: 72, 
        pe: 'Left'
    },
    { 
		position: 3,
        nome: 'Neymar Jr', 
        nascimento: '1992-02-05', 
        idade: 32, 
        posicao: 'Forward', 
        peso: 68, 
        pe: 'Right'
    },
    { 
		position: 4,
        nome: 'Virgil van Dijk', 
        nascimento: '1991-07-08', 
        idade: 33, 
        posicao: 'Defender', 
        peso: 92, 
        pe: 'Right'
    },
    { 
		position: 5,
        nome: 'Kevin De Bruyne', 
        nascimento: '1991-06-28', 
        idade: 33, 
        posicao: 'Midfielder', 
        peso: 70, 
        pe: 'Right'
    }
];


const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Nome', 'Nascimento', 'Idade', "Posicao", "Peso", "Pe"],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['Nome', 'Nascimento', 'Idade', "Posicao", "Peso", "Pe"]),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['Nome', 'Nascimento', 'Idade', "Posicao", "Peso", "Pe"]),
	// Optional: A list of footer labels.
	foot: ['Total', '', '<code class="code">5</code>']
};

const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'variant-ghost-primary text-white',
	bgBackdrop: $isMobile ? 'bg-gradient-to-tr from-zinc-500/90 via-slate-500/50 to-indigo-500/50' : 'bg-gradient-to-tr from-indigo-500/90 via-slate-500/50 to-zinc-500/50',
	width: 'w-[390px] md:w-[680px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
	position: $isMobile ? 'bottom' : 'right'
};

const modal: ModalSettings = {
	type: 'alert',
	// Data
	title: 'Example Alert',
	body: 'This is an example modal.',
	image: 'https://i.imgur.com/WOgTG96.gif',
};

function handleDrawer(){
	drawerStore.open(drawerSettings);
}

function handleModal(){
	console.log("entrei");
	modalStore.trigger(modal);
}



</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<button type="button" class="btn variant-ghost-primary shadow-sm" on:click={handleModal}>
	<span class="material-symbols-outlined">
		add
		</span>
	<span class="font-bold">Adicionar</span>
</button>
<button type="button" class="btn variant-outline-primary shadow-sm" on:click={handleDrawer}>
	<span class="material-symbols-outlined">
		filter_list
		</span>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span class="font-bold">Filtro</span>
</button>


<div class="py-4 pr-8"><Table source={tableSimple} interactive={true} class="shadow-lg"/></div>


