import type { Handle } from '@sveltejs/kit'
// import { getUser } from '$lib/session'

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, locals } = event
    
    locals.user = null

    const session = cookies.get('session') as Session
    
    locals.user = session ? getUser(session) : null

    return resolve(event)
}
