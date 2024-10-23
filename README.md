Reproduction repository for https://github.com/honojs/hono/issues/3518

## Reproduce steps:

### original (as reported by @haochenx)

```bash
bun --version
# output: 1.1.32

bun run dev &

## better in another window
curl --compressed -v localhost:5173/api/hello
```

### minimal (as suggested by @yusukebe)

```bash
bun run src/minimal.ts &

## better in another window
curl --compressed -v localhost:3000/
```

### output

the last command will give (something like) the following result:

```
* Host localhost:5173 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:5173...
* Connected to localhost (::1) port 5173
> GET /api/hello HTTP/1.1
> Host: localhost:5173
> User-Agent: curl/8.9.1
> Accept: */*
> Accept-Encoding: deflate, gzip, br, zstd
>
* Request completely sent off
< HTTP/1.1 404 Not Found
< alt-svc: h3=":443"; ma=86400
< cf-cache-status: BYPASS
< cf-ray: 8d712205dc178341-KIX
< connection: keep-alive
< content-encoding: br
< content-type: text/html
< date: Wed, 23 Oct 2024 10:44:37 GMT
< nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=7tsz3UdsIRJyul8hdGqGpZLWNRbJ%2B4zwv5m52M5%2BP1iUJ%2B6pHMuqh9t%2BF5ILoygmrVVXf%2BkPidhPId8H4BeFBr7n6YtTNUqEF6JAjJVFxxQvwSTsZCmH%2FpwE"}],"group":"cf-nel","max_age":604800}
< server: cloudflare
< strict-transport-security: max-age=31536000; includeSubDomains; preload
< transfer-encoding: chunked
< vary: Accept-Encoding
<
* Failed reading the chunked-encoded stream
* closing connection #0
curl: (23) Failed reading the chunked-encoded stream
```
