const errorResponse = (store, err) => ({
  title: `${store} - ${err.statusText}: ${err.status}`,
  message: err.data.message
})

export { errorResponse }
