const nftName = "DANGOL logo";
const description = "DANGOL, STAMP NFT with See You Next Time by project DANGOL ";
const hiddenImgUrl = "ipfs://QmVasuAEVukJ1inrP14zPtCXnrcfLYD8uiRcCxj3EGxjQS";
const totalNum = 10; //총 발행 숫자

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}