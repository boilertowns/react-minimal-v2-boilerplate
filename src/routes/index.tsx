import type { RouteObject } from 'react-router-dom'
import { NotFoundPage } from 'pages/404'
import { HomePage } from 'pages/home'

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		// When no routes matches, show 404 page.
		path: '*',
		element: <NotFoundPage />,
	},
]
