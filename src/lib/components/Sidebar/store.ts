import { writable } from 'svelte/store';

const sidebarOpen = writable(false);

const openSidebar = () => {
	sidebarOpen.update(() => true);
	console.log("abrir")
};

const closeOpenSidebar = () => {
	let state = false
	const unsubscribe = sidebarOpen.subscribe(value => {
		// Do something with the value
		
		state = value
		console.log("entrei " + value)
	})
	unsubscribe();
	sidebarOpen.update(() => !state);
	
}

const closeSidebar = () => {
	sidebarOpen.update(() => false);
	console.log("fechar")
};

export { sidebarOpen, openSidebar, closeSidebar, closeOpenSidebar };