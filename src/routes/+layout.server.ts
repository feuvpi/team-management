import type { LayoutServerLoad } from './$types';
// import { getSession } from '$lib/session'



// function getSession(user: User | null) {
//     if (user) {
//       const { id, name, email, roles } = user
//       return { user: { id, name, email, roles } }
//     }
//     return { user: null }
//   }

export const load = (async ({ locals }) => {



    // const { user } = locals
    // cosnt session = getSession(user)

    return {};
}) satisfies LayoutServerLoad;