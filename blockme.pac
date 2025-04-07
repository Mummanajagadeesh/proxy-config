function FindProxyForURL(url, host) {
  url = url.toLowerCase();

  // Block any URL that contains these substrings
  if (
    url.indexOf("mummanajagadeesh.github.io") !== -1 ||
    url.indexOf("github.com/mummanajagadeesh") !== -1 ||
    url.indexOf("linkedin.com/in/jagadeeesh-mummana") !== -1 ||
    url.indexOf("youtube.com/@m_j_9_7") !== -1 ||
    url.indexOf("youtube.com/channel/") !== -1 // In case it resolves to channel
  ) {
    return "PROXY 127.0.0.1:9999";
  }

  return "DIRECT";
}
