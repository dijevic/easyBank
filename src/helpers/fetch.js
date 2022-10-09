const baseUrl = process.env.REACT_APP_API_URL

export const fetchHelper = (data, method = 'GET', id) => {

    let url = `${baseUrl}`

    if (method === 'GET') {
        return fetch(url)
    }

    if (method === 'PUT') {

        url += id
        return fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    if (method === 'DELETE') {

        url += id
        return fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
    }



    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}