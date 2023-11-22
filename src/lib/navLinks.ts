export type NavList = {
	href: string; 
	label: string; 
	icon: string // fomt awesome icon name
}
// Navigation Sitemap
export const navData: Record<string, NavList> = {
	'home': {
		href:'/',
		label: 'Home',
		icon: 'fa-home'
	},
	'about':{
		href: '/about',
		label: 'About',
		icon: 'fa-about'
	}
}
