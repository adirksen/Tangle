let evmJsonRpcRequest = require("./evmJsonRpcRequest.js");
(async () => {
    let newLogs;
    let payload = {
        rpcUrl: "test.[REDACTED]",
        whichProtocol: 1,
        port: 443,
        method: "eth_estimateGas",
        params: [{
            from: "0x9De2b19dEaDBeeFB821D00c39289919DD5313566",
            data: "[REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED]63430008090033"
        }]
    };
    let response = await evmJsonRpcRequest(payload)
    console.log(response);
    if (response && response.result)
        console.log(BigInt(response.result));
})();