
import HomeIcon from './icons/HomeIcon.svelte';
import BillsIcon from './icons/BillsIcon.svelte';
// import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
// import MonitoringIcon from './icons/MonitoringIcon.svelte';
// import DemographicsIcon from './icons/DemographicsIcon.svelte';
import ApplicationIcon from './icons/ApplicationIcon.svelte';
// import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Dashboard',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'Plantel',
		icon: BillsIcon,
		link: '/playerlist'
	},
	{
		title: 'Divisões',
		icon: ApplicationIcon,
		link: '/time/divisoes'
	},
	{
		title: 'Jogos',
		icon: ApplicationIcon,
		link: '/time/jogos'
	},
	{
		title: 'Tático',
		icon: ApplicationIcon,
		link: '/time/tatico'
	},
	// {
	// 	title: 'Monitoring',
	// 	icon: MonitoringIcon,
	// 	link: '/admin/monitoring'
	// },
	// {
	// 	title: 'Demographics',
	// 	icon: DemographicsIcon,
	// 	link: '/admin/demographics'
	// },
	// {
	// 	title: 'Analytics',
	// 	icon: AnalyticsIcon,
	// 	link: '/admin/analytics'
	// },
	// {
	// 	title: 'Documentation',
	// 	icon: DocumentationIcon,
	// 	link: '/admin/documentation'
	// }
];