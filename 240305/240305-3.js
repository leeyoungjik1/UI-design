const link = document.getElementById('link')

const locationInfo = {
  href: link.href,
  protocol: link.protocol,
  host: link.host,
  hostname: link.hostname,
  port: link.port,
  pathname: link.pathname,
  search: link.search,
  hash: link.hash,
  origin: link.origin
}

console.table(locationInfo)
console.table(location)