
const fetchWithRetry = async (fetcher, maxRetry = 3, currentRetry = 0) => {
  try {
    const response = await fetcher()
    if (response.ok) {
      return await response.json()
    }
  }
  catch (err) {
    console.log('err', err);
    if (maxRetry > 0) {
      return fetchWithRetry(fetcher, maxRetry - 1, currentRetry + 1)
    }
  }
  throw new Error(`Failed to fetch after ${currentRetry} retries`)
}


//Usage 
const url = 'https://api.example.com'

const fetchData = async () => fetchWithRetry(() => fetch(url), 3)


fetchData()
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('failed to fetch', error))
