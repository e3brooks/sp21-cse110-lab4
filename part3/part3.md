# Part 3. Debugging using the DevTools #

### DevTools - Debugging ###
1) The bug was that the inputs ```num1``` and ```num2``` are being treated as strings which causes the function ```calculateSum``` to concatenate them instead of numerically adding them together to get the sum. 
     
2) I fixed it by casting ```num1``` and ```num2``` as Numbers so that the function ```calculateSum``` will perform numeric addition rather than string concatenation. Click [here](fix.png) for screenshot of fix.

### DevTools - Network Tab ###
3) Name: citylots.json
4) Initiator: part2.js
5) File Size: 11.7 MB
6) Download Time: 3.01 s
7) User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 
8) Server: Apache
9) Last Modified: Tue, 26 Jan 2021 22:14:13 GMT
10) Content-Type: application/json
11) Method: fetchData()