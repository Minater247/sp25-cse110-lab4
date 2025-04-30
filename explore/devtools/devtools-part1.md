1. `citylots.json`
2. `expose.js`, line 4.
3. `11.69 MB`, but it only transferred `7780.5 kB`. This leads to an unterminated string error at line 38342 column 31 of the JSON data.
4. `644ms`, split into `317ms` waiting for the server to respond and `327ms` receiving data.

5. `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:138.0) Gecko/20100101 Firefox/138.0`.
6. I don't think I can list all 3,680+ lines (even if I could, my browser truncated it), but it's a `FeatureCollection` with a huge list of features rather than a single type.
7. Thursday, September 25 2022 at 22:44:30 GMT.
8. `application/json`. Charset is in the same field, `charset=utf-8`.
9. `fetch`.