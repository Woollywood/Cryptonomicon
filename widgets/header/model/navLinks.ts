import { type NavLinkType } from '../consts';

export const navLinks: NavLinkType[] = [
	{
		to: '/favourites',
		label: 'Избранные',
		requiredAuth: true,
	},
];
