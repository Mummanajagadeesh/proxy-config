function FindProxyForURL(url, host) {
  url = url.toLowerCase();

  if (url.includes("mummanajagadeesh.github.io")) {
    return "PROXY 127.0.0.1:9999";
  }

  if (url.includes("github.com/mummanajagadeesh")) {
    return "PROXY 127.0.0.1:9999";
  }

  if (url.includes("linkedin.com/in/jagadeeesh-mummana")) {
    return "PROXY 127.0.0.1:9999";
  }

  if (url.includes("youtube.com/@m_j_9_7")) {
    return "PROXY 127.0.0.1:9999";
  }

  return "DIRECT";
}
