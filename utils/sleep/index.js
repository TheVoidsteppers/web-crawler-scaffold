function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

module.exports = sleep