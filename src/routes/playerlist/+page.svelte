<script lang="ts">
    import type { PageData } from '../player/$types';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { LightSwitch } from '@skeletonlabs/skeleton';
    export let data: PageData;


    const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];


const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Name', 'Symbol', 'Weight'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
	// Optional: A list of footer labels.
	foot: ['Total', '', '<code class="code">5</code>']
};
</script>

<div class="py-4 pl-32 pr-6"><Table source={tableSimple} interactive={true}/></div>


